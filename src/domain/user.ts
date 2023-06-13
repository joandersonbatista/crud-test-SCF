import { Job } from '~entity/enums/job-enum';

import { Id } from '~value-object/id';
import { Name } from '~value-object/name';

export class User {
  constructor(
    private readonly id: Id,
    private name: Name,
    private job: Job,
    private readonly admin: boolean,
    private readonly createdAt: Date,
    private updatedAt?: Date,
  ) {}

  public getId(): Id {
    return this.id;
  }

  public getName(): Name {
    return this.name;
  }

  public isAdmin(): boolean {
    return this.admin;
  }

  public getJob(): Job {
    return this.job;
  }

  public changeName(name: Name): void {
    this.name = name;

    this.updateUser(new Date());
  }

  public changeJob(job: Job): void {
    this.job = job;

    this.updateUser(new Date());
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date | undefined {
    return this.updatedAt;
  }

  private updateUser(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }
}
