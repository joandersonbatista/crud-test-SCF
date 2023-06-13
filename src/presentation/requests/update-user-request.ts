import { Job } from '~entity/enums/job-enum';

import { RequestModel } from '~presentation-interface/request-model-interface';

type UpdateUserRequest = RequestModel<
  {
    name?: string;
    job?: Job;
  },
  {},
  { id: string }
>;

export { UpdateUserRequest };
