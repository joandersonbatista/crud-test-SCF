import { Job } from '~entity/enums/job-enum';

import UserModelAttributes from '~infrastructure-interface/user-model-attributes.interface';

export const storage: UserModelAttributes[] = [
  {
    id: 'fed64e85-a411-482b-bc7f-9d57af1859a6',
    name: 'João Oliveira',
    job: Job.developer,
    read: 0,
  },
];
