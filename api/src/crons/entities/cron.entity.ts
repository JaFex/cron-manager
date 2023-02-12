import { Logger } from '@nestjs/common';
import { CronJob } from 'cron';
import axios from 'axios';

export class Cron {
  id: string;
  uri: string;
  httpMethod: string;
  body: string;
  schedule: string;
  timeZone: string;

  public static createJob(cron: Cron): CronJob {
    const job = new CronJob(
      cron.schedule,
      () => {
        axios({
          method: cron.httpMethod,
          url: cron.uri,
          data: {
            message: cron.body,
          },
        });
      },
      null,
      true,
      cron.timeZone,
    );
    return job;
  }
}
