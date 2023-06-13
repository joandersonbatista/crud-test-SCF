import { RequestModel } from '~presentation-interface/request-model-interface';
import { ResponseModel } from '~presentation-interface/response-model-interface';

export interface MethodController<OutputDTO = undefined> {
  (request: RequestModel): Promise<ResponseModel<OutputDTO>>;
}
