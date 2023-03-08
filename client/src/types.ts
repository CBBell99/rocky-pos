export type MenuItem = {
  name: string;
  description: string;
  price: number;
};

export type MenuData = Record<string, MenuItem[]>;
