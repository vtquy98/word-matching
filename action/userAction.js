import { LOGIN } from "../stores/userState";

const postLogin = (account) => {
  return (dispatch) => {
    //check username/pass
    dispatch(loginSuccess(account));
  };
};

const loginSuccess = (resp) => {
  return {
    type: LOGIN,
    payload: resp,
  };
};

export const userAction = {
  postLogin,
};
