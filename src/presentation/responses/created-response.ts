import { ResponseHandler } from '~presentation-interface/response-handler-interface';
import { ResponseModel } from '~presentation-interface/response-model-interface';

export class CreatedResponse implements ResponseHandler {
  response<Body>(body?: Body): ResponseModel<Body> {
    return { statusCode: 201, body };
  }
}
