type IUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

type IService = {
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
  category: string;
  startDate: string;
  endDate: string;
};

type IOrder = {
  id: string;
  user: string;
};

type IWishList = {
  id: string;
  user: string;
};

export type { IUser, IService, IOrder, IWishList };
