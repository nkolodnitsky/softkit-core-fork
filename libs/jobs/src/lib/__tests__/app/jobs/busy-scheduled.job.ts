import { InjectQueue, Processor } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { Jobs } from './vo/jobs.enum';
import { BusyJobData } from './vo/busy-job-data.dto';
import { BaseBusyJob } from './base-busy.job';

// @ts-ignore
@Processor(Jobs.BUSY_SCHEDULED_JOB, {
  concurrency: 50,
  maxStalledCount: 10,
})
export class BusyScheduledJob extends BaseBusyJob {
  constructor(@InjectQueue(Jobs.BUSY_SCHEDULED_JOB) queue: Queue<BusyJobData>) {
    super(queue);
  }
}
