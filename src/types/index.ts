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

type IReview = {
  id: string;
  rating: string;
  review: string;
  name: string;
  image: string;
  email: string;
  product: string;
  createdAt: string;
  updatedAt: string;
}

type IOrder = {
  id: string;
  user: string;
  products: IService[];
};

type IWishList = {
  id: string;
  user: string;
  product: IService;
};

export type { IService, IReview, IUser, IOrder, IWishList };
