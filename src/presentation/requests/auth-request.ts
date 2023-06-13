import { RequestModel } from '~presentation-interface/request-model-interface';

type AuthRequest = RequestModel<
  {},
  {},
  {},
  { authorization: string; userId: string; accessKey: string }
>;

export { AuthRequest };
