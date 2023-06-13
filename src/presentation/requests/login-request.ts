import { RequestModel } from '~presentation-interface/request-model-interface';

type LoginRequest = RequestModel<{ name: string }>;

export { LoginRequest };
