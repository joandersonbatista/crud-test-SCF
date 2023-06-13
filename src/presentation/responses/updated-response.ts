import { ResponseHandler } from '~presentation-interface/response-handler-interface';
import { ResponseModel } from '~presentation-interface/response-model-interface';

export class UpdatedResponse implements ResponseHandler {
  response<Body>(body?: Body): ResponseModel<Body> {
    return { statusCode: 204, body };
  }
}
