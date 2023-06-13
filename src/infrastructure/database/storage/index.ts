import { Job } from '~entity/enums/job-enum';

import UserModelAttributes from '~infrastructure-interface/user-model-attributes.interface';

export const storage: UserModelAttributes[] = [
  {
    id: '1',
    name: 'João Oliveira',
    job: Job.developer,
  },
];
