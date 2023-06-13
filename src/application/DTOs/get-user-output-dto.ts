import { Job } from '~entity/enums/job-enum';

export class GetUserOutputDTO {
  constructor(
    public id: string,
    public name: string,
    public job: Job,
    public admin: boolean,
    public createdAt: Date,
    public updatedAt?: Date,
  ) {}
}
