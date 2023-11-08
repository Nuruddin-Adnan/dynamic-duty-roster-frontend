export type IAdmin = {
  id?: string;
  firstName?: string;
  lastName?: string;
  name?: {
    firstName?: string;
    lastName?: string;
  };
  role?: "admin";
  email?: string;
  password?: string;
  confirmPpassword?: string;
};

export type IUser = {
  id?: string;
  firstName?: string;
  lastName?: string;
  name?: {
    firstName?: string;
    lastName?: string;
  };
  role?: "admin";
  email?: string;
  password?: string;
  confirmPpassword?: string;
};

export type ILogin = {
  email: string;
  password: string;
};
