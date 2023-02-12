import React, { useContext, useState } from 'react';
import CronJobContext from '../context/cronJobContext';
import timezones from '../helpers/timezones.json';
import cron from 'cron-validate';


function Form() {

  const [scheduleError, setScheduleError] = useState(false);
  const { cronToUpdate, setCronToUpdate, updateCronJob, addCronJob } = useContext(CronJobContext);

  function handleReset(e: React.SyntheticEvent) {
    setCronToUpdate(null);
    setScheduleError(false);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    const data = new FormData(e.target);

    const cronSchedule = cron(data.get('schedule') + '');
    if(!cronSchedule.isValid()){
      setScheduleError(true);
      return;
    }

    if(cronToUpdate){
      updateCronJob(cronToUpdate.id, data.get('schedule'), data.get('uri'), data.get('httpMethod'), data.get("timeZone"), data.get('body'));
    } else {
      addCronJob(data.get('schedule'), data.get('uri'), data.get('httpMethod'), data.get("timeZone"), data.get('body'))
    }
    e.target.reset(data.get('schedule'), data.get('uri'), data.get('httpMethod'), data.get("timeZone"), data.get('body'));
    setScheduleError(false);
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <div className="mb-3">
        <label htmlFor="scheduleField" className="form-label">Schedule</label>
        <input type="text" className={"form-control " + (scheduleError && "is-invalid")} id="scheduleField" name="schedule" defaultValue={cronToUpdate ? cronToUpdate.schedule : ''} required/>
        <div className="invalid-feedback">
          Invalid value.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="uriField" className="form-label">URI</label>
        <input type="text" className="form-control" id="uriField" name="uri" defaultValue={cronToUpdate ? cronToUpdate.uri : 'http://localhost:5000/test'} required/>
      </div>
      <div className="mb-3">
        <label htmlFor="httpMethodField" className="form-label">HTTP Method</label>
        <select id="httpMethodField" className="form-select" defaultValue={cronToUpdate ? cronToUpdate.httpMethod : 'post'} name="httpMethod">
          <option value="post">POST</option>
          <option value="get">GET</option>
          <option value="patch">PATCH</option>
          <option value="delete">DELETE</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="timezoneField" className="form-label">TimeZone</label>
        <select id="timezoneField" className="form-select" defaultValue={cronToUpdate ? cronToUpdate.timeZone : timezones[0]} name="timeZone">
          {
            timezones.map((obj, i) => {
              return <option key={i} value={obj}>{obj}</option>
            })
          }
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="bodyField" className="form-label">Body</label>
        <textarea className="form-control" id="bodyField" rows={3} name="body" defaultValue={cronToUpdate ? cronToUpdate.body : ''} required></textarea>
      </div>
      <button type='submit' className="btn btn-success mx-1">Save</button>
      <button type="reset" className="btn btn-danger mx-1">Cancel</button>
    </form>
  )
}

export default Form;