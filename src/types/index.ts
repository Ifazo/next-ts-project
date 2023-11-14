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
  map(arg0: (service: IService) => import("react").JSX.Element): import("react").ReactNode;
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
  map(arg0: (service: IService) => import("react").JSX.Element): import("react").ReactNode;
  id: string;
  service: IService;
  user: string;
};

type IWishList = {
  id: string;
  user: string;
};

export type { IUser, IService, IOrder, IWishList };
