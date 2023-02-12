import React, { useEffect, useState } from 'react';
import ApiCalls from '../helpers/apiCalls';

export const CronJobContext = React.createContext<any>([]);

export const CronJobProvider = ({children} : { children: any }) => {

    const [cronJobs, setCronJobs] = useState<any>([]);
    const [cronToUpdate, setCronToUpdate] = useState<any>(null);

    useEffect(() => {
        ApiCalls.listCrons().then((res) => {
            console.log(res.data);
            setCronJobs(res.data);
          }).catch((err) => {
            console.log(err);
          });
    }, []);

    const addCronJob = (schedule: string, uri: string, httpMethod: string, timeZone: string, body: string) => {
        ApiCalls.postCron({ schedule, uri, httpMethod, timeZone, body})
        .then((res) => {
            setCronJobs([...cronJobs, res.data]);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    const updateCronJob = (id: string, schedule: string, uri: string, httpMethod: string, timeZone: string, body: string) => {
        ApiCalls.updateCron(id, { schedule, uri, httpMethod, timeZone, body })
      .then((res) => {
        setCronJobs(cronJobs.map((elem: { id: any; }) => elem.id === cronToUpdate.id ? res.data : elem));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setCronToUpdate(null);
      });
    }

    const deleteCronJob = (id: string) => {
        ApiCalls.deleteCron(id).then((res) => {
            setCronJobs(cronJobs.filter((elem: any) => elem.id !== id));
          }).catch((err) => {
            console.log(err);
          })
    }

    return (
        <CronJobContext.Provider value={{
            cronJobs,
            cronToUpdate,
            setCronToUpdate,
            addCronJob,
            updateCronJob,
            deleteCronJob,
        }}>
            { children }
        </CronJobContext.Provider>
    )
}

export default CronJobContext;