import { CreateUserApplication } from '~application/create-user.application';
import { DeleteUserApplication } from '~application/delete-user.application';
import { CreateUserInputDTO } from '~application/DTOs/create-user-input-dto';
import { NameInputDTO } from '~application/DTOs/name-input-dto';
import { UpdateUserInputDTO } from '~application/DTOs/update-user-input-dto';
import { IdInputDTO } from '~application/DTOs/user-id-input-dto';
import { UserLoginOutputDTO } from '~application/DTOs/user-login-output-dto';
import { GetUserApplication } from '~application/get-user.application';
import { GetUsersApplication } from '~application/get-users.application';
import { UpdateUserApplication } from '~application/update-user.application';
import { UserLoginApplication } from '~application/user-login.application';

import { GetUserOutputDTO } from '~dto/get-user-output-dto';

import { CreatedResponse } from '~response/created-response';
import { SuccessResponse } from '~response/success-response';
import { UpdatedResponse } from '~response/updated-response';

import { CreateUserRequest } from '~request/create-user-request';
import { LoginRequest } from '~request/login-request';
import { NameRequest } from '~request/name-request';
import { UpdateUserRequest } from '~request/update-user-request';

import { MethodController } from '~presentation-interface/method-controller-interface';
import { RequestModel } from '~presentation-interface/request-model-interface';

export class UserController {
  constructor(
    private readonly createUserApplication: CreateUserApplication,
    private readonly updateUserApplication: UpdateUserApplication,
    private readonly getUserApplication: GetUserApplication,
    private readonly getUsersApplication: GetUsersApplication,
    private readonly deleteUserApplication: DeleteUserApplication,
    private readonly userLoginApplicaton: UserLoginApplication,

    private readonly createdResponse: CreatedResponse,
    private readonly updatedResponse: UpdatedResponse,
    private readonly successResponse: SuccessResponse,
  ) {}

  create: MethodController<GetUserOutputDTO> = async (
    req: CreateUserRequest,
  ) => {
    const { name, job, admin } = req.body;

    const inputDTO = new CreateUserInputDTO(name, job, admin);

    const output = await this.createUserApplication.execute(inputDTO);

    return this.createdResponse.response(output);
  };

  update: MethodController<GetUserOutputDTO> = async (
    req: UpdateUserRequest,
  ) => {
    const { name, job } = req.body;
    const id = req.params.id;

    const inputDto = new UpdateUserInputDTO(id, name, job);

    const output = await this.updateUserApplication.execute(inputDto);

    return this.updatedResponse.response(output);
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

  delete: MethodController = async (req: RequestModel<{}, { id: string }>) => {
    const name = req.params.id;

    const inputDto = new IdInputDTO(name);

    await this.deleteUserApplication.execute(inputDto);

    return this.successResponse.response();
  };

  login: MethodController<UserLoginOutputDTO> = async (req: LoginRequest) => {
    const name = req.body.name;

    const inputDto = new NameInputDTO(name);

    const outputDto = await this.userLoginApplicaton.execute(inputDto);

    return this.successResponse.response(outputDto);
  };

  access: MethodController<string> = async (req: NameRequest) => {
    const name = req.query.name;

    const inputDto = new NameInputDTO(name);

    const outPutDTO = await this.getUserApplication.execute(inputDto);

    return this.successResponse.response(
      `"Usuário ${outPutDTO.name} foi lido ${outPutDTO.read} vezes."`,
    );
  };
}
