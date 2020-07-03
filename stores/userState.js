export const LOGIN = "LOGIN";

const initUser = {};

export const userState = (state = initUser, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
      };

    default:
      return state;
  }
};
