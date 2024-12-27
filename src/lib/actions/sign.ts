import { Endpoints } from "../endpoints";
import { Errors, User } from "../types";
import { _post } from "../helpers/_fetch";
import handleFormData from "../helpers/handleFormData";

type SigninData = {
  username: string;
  password: string;
};

type SignupData = SigninData & {
  passwod_confirmation: string;
  is_admin: boolean;
};

const sign = async (
  _: [],
  formData: FormData
): Promise<[Errors | null, User | null]> => {
  const data: SigninData | SignupData = handleFormData(formData);
  const response: [Errors | null, User | null] = await _post(
    Endpoints.signin,
    data
  );
  return response;
};

export default sign;
