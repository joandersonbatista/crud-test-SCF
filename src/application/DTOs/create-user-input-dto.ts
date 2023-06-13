import { Job } from '~entity/enums/job-enum';

import { Name } from '~value-object/name';

export class CreateUserInputDTO {
  public name: Name;
  public job: Job;
  public admin: boolean;

  constructor(name: string, job: Job, admin = false) {
    this.name = new Name(name);
    this.job = job;
    this.admin = admin;
  }
}
