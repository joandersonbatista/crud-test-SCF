import { Job } from '~entity/enums/job-enum';

import { RequestModel } from '~presentation-interface/request-model-interface';

type CreateUserRequest = RequestModel<{
  name: string;
  job: Job;
  admin?: boolean;
}>;

export { CreateUserRequest };
