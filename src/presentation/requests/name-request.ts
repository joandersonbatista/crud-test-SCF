import { RequestModel } from '~presentation-interface/request-model-interface';

type NameRequest = RequestModel<{}, {}, { name: string }>;

export { NameRequest };
