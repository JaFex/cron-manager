import React from 'react';
import Form from './components/form';
import NavBar from './components/navbar';
import Table from './components/table';
import { CronJobProvider } from './context/cronJobContext';

function App() {
  return (
    <CronJobProvider>
      <NavBar title='Cron Manager'></NavBar>
      <div className="container-fluid mt-4">
        <div className='row'>
          <div className='col-4'>
            <Form></Form>
          </div>
          <div className='col-8'>
            <Table/>
          </div>
        </div>
      </div>
    </CronJobProvider>
  );
}

export default App;
