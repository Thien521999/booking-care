export interface payloadLogin {
  email: string;
  password: string;
}

export interface payloadGetAllUser {
  id: string | number;
}

export interface user {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  image: string;
  gender: number;
  phonenumber: string;
  roleId: string;
  positionId: string;
}

export interface payloadNewUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
}
