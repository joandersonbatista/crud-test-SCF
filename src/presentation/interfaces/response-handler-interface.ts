import { ResponseModel } from '~presentation-interface/response-model-interface';

export interface ResponseHandler {
  response<Body>(body?: Body): ResponseModel<Body>;
}
