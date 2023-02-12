import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCronDto } from './dto/create-cron.dto';
import { UpdateCronDto } from './dto/update-cron.dto';
import { Cron } from './entities/cron.entity';
import { v4 as uuidv4 } from 'uuid';
import { CronJob } from 'cron';

@Injectable()
export class CronsService {
  private readonly crons: Map<string, Cron> = new Map();
  private readonly jobs: Map<string, CronJob> = new Map();

  create(createCronDto: CreateCronDto): Cron {
    const cron: Cron = { id: uuidv4(), ...createCronDto };
    const job = Cron.createJob(cron);
    this.crons.set(cron.id, cron);
    this.jobs.set(cron.id, job);
    return cron;
  }

  findAll(): Array<Cron> {
    return Array.from(this.crons.values());
  }

  findOne(id: string): Cron {
    const cron = this.crons.get(id);
    if (!cron) {
      throw new NotFoundException('Item not found.');
    }
    return cron;
  }

  update(id: string, updateCronDto: UpdateCronDto) {
    let cron = this.findOne(id);
    if (cron) {
      let job = this.jobs.get(cron.id);
      job.stop();
      cron = { ...cron, ...updateCronDto };
      job = Cron.createJob(cron);
      this.crons.set(cron.id, cron);
      this.jobs.set(cron.id, job);
      return cron;
    }
  }

  remove(id: string) {
    const cron = this.findOne(id);
    if (cron) {
      const job = this.jobs.get(cron.id);
      job.stop();
    }
    return this.crons.delete(id);
  }
}
