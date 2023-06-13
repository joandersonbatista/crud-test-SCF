import { Job } from '~entity/enums/job-enum';

import { Id } from '~value-object/id';
import { Name } from '~value-object/name';

export class UpdateUserInputDTO {
  public id: Id;
  public name?: Name;
  public job?: Job;

  constructor(id: string, name?: string, job?: Job) {
    this.id = new Id(id);
    if (name) this.name = new Name(name);
    if (job) this.job = job;
  }
}
