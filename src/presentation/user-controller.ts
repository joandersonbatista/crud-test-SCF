import { CreateUserApplication } from '~application/create-user.application';
import { DeleteUserApplication } from '~application/delete-user.application';
import { CreateUserInputDTO } from '~application/DTOs/create-user-input-dto';
import { NameInputDTO } from '~application/DTOs/name-input-dto';
import { UpdateUserInputDTO } from '~application/DTOs/update-user-input-dto';
import { GetUserApplication } from '~application/get-user.application';
import { GetUsersApplication } from '~application/get-users.application';
import { UpdateUserApplication } from '~application/update-user.application';

import { GetUserOutputDTO } from '~dto/get-user-output-dto';

import { CreatedResponse } from '~response/created-response';
import { SuccessResponse } from '~response/success-response';
import { UpdatedResponse } from '~response/updated-response';

import { CreateUserRequest } from '~request/create-user-request';
import { NameRequest } from '~request/name-request';
import { UpdateUserRequest } from '~request/update-user-request';

import { MethodController } from '~presentation-interface/method-controller-interface';

export class UserController {
  constructor(
    private readonly createUserApplication: CreateUserApplication,
    private readonly updateUserApplication: UpdateUserApplication,
    private readonly getUserApplication: GetUserApplication,
    private readonly getUsersApplication: GetUsersApplication,
    private readonly deleteUserApplication: DeleteUserApplication,

    private readonly createdResponse: CreatedResponse,
    private readonly updatedResponse: UpdatedResponse,
    private readonly successResponse: SuccessResponse,
  ) {}

  create: MethodController = async (req: CreateUserRequest) => {
    const { name, job, admin } = req.body;

    const inputDTO = new CreateUserInputDTO(name, job, admin);

    await this.createUserApplication.execute(inputDTO);

    return this.createdResponse.response();
  };

  update: MethodController = async (req: UpdateUserRequest) => {
    const { name, job } = req.body;
    const id = req.query.id;

    const inputDto = new UpdateUserInputDTO(id, name, job);

    await this.updateUserApplication.execute(inputDto);

    return this.updatedResponse.response();
  };

  get: MethodController<GetUserOutputDTO> = async (req: NameRequest) => {
    const name = req.query.name;

    const inputDto = new NameInputDTO(name);

    const outPutDTO = await this.getUserApplication.execute(inputDto);

    return this.successResponse.response(outPutDTO);
  };

  getAll: MethodController<GetUserOutputDTO[]> = async () => {
    const outPutDTO = await this.getUsersApplication.execute();

    return this.successResponse.response(outPutDTO);
  };

  delete: MethodController = async (req: NameRequest) => {
    const name = req.query.name;

    const inputDto = new NameInputDTO(name);

    await this.deleteUserApplication.execute(inputDto);

    return this.successResponse.response();
  };
}
