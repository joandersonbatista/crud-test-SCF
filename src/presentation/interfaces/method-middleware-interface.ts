import { RequestModel } from '~presentation-interface/request-model-interface';

export interface MethodMiddleware {
  (request: RequestModel): Promise<void>;
}
