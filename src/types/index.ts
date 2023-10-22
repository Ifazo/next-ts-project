type IService = {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
  startDate: string;
  endDate: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

type IUser = {
    id: string;
    name: string;
    email: string;
    password: string;
    role: string;
    createdAt: string;
    updatedAt: string;
};

export type { IService, IUser };
