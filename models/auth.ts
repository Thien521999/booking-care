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
  createdAt?: string;
  updatedAt?: string;
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
  gender: string;
  phonenumber: string;
  positionId: string;
  roleId: string;
  image?: any;
}

export interface gender {
  id: number;
  key: string;
  valueEn: string;
  valueVi: string;
  createdAt?: string;
  updatedAt?: string;
  type?: string;
}
