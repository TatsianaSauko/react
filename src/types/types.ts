export interface IState {
  name: string[];
  age: number[];
  email: string[];
  password: string[];
  confirmPassword: string[];
  gender: string[];
  terms: boolean[];
  image: string[];
  country: string[];
}

export interface FormData {
  name: string;
  age: number | string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  terms?: boolean;
  image?: unknown;
  country: string;
}
