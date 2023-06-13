import { RequestModel } from '~presentation-interface/request-model-interface';

export interface MethodMiddleware<Return = {}> {
  (request: RequestModel): Promise<Return>;
}
