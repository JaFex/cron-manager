import React, { useContext } from 'react';
import CronJobContext from '../context/cronJobContext';

function Table() {

  const {cronJobs, setCronToUpdate, deleteCronJob} = useContext(CronJobContext);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Schedule</th>
          <th scope="col">URI</th>
          <th scope="col">HTTP Method</th>
          <th scope="col">Body</th>
          <th scope="col">Timezone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          cronJobs.map((obj: any) => {
            return (
              <tr key={obj.id}>
                <td>{obj.schedule}</td>
                <td>{obj.uri}</td>
                <td>{obj.httpMethod}</td>
                <td className='text-truncate'>{JSON.stringify(obj.body)}</td>
                <td>{obj.timeZone}</td>
                <td>
                  <button type="button" className="btn btn-primary btn-sm mx-1" onClick={() => { setCronToUpdate(obj) }}><i className="bi bi-pencil-square"></i></button>
                  <button type="button" className="btn btn-danger btn-sm mx-1" onClick={() => { deleteCronJob(obj.id) }}><i className="bi bi-trash-fill"></i></button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
}

export default Table;