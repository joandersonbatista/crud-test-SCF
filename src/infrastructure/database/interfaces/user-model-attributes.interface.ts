import { Job } from '~entity/enums/job-enum';

export default interface UserModelAttributes {
  id: string;
  name: string;
  job: Job;
  read?: number;
  admin?: boolean;
  created_at?: Date;
  updated_at?: Date;
}
