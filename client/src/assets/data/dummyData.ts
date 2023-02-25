interface Table {
  table_id: number;
  available_seats: number;
}

interface MenuItems {
  id: number;
  name: string;
  category: string;
}

const seatingTables: Table[] = [
  {
    table_id: 1,
    available_seats: 4,
  },
  {
    table_id: 2,
    available_seats: 4,
  },
  {
    table_id: 3,
    available_seats: 4,
  },
  {
    table_id: 4,
    available_seats: 4,
  },
  {
    table_id: 5,
    available_seats: 4,
  },
  {
    table_id: 6,
    available_seats: 4,
  },
  {
    table_id: 7,
    available_seats: 4,
  },
  {
    table_id: 8,
    available_seats: 4,
  },
  {
    table_id: 9,
    available_seats: 4,
  },
];

const menuItems = [
  {
    id: 1,
    name: "pork chop",
    category: "lunch",
  },
  {
    id: 2,
    name: "power bowl",
    category: "lunch",
  },
  {
    id: 3,
    name: "short rib",
    category: "lunch",
  },
  {
    id: 4,
    name: "steak",
    category: "lunch",
  },
  {
    id: 5,
    name: "salmon",
    category: "lunch",
  },
  {
    id: 6,
    name: "chicken",
    category: "lunch",
  },
  {
    id: 7,
    name: "risotto",
    category: "lunch",
  },
  {
    id: 8,
    name: "udon bowl",
    category: "lunch",
  },
  {
    id: 9,
    name: "udon bowl",
    category: "lunch",
  },
  {
    id: 10,
    name: "souffle",
    category: "breakfast",
  },
  {
    id: 11,
    name: "eggs benedict",
    category: "breakfast",
  },
  {
    id: 12,
    name: "skillet",
    category: "breakfast",
  },
  {
    id: 13,
    name: "pancakes",
    category: "breakfast",
  },
  {
    id: 14,
    name: "scramble",
    category: "breakfast",
  },
  {
    id: 15,
    name: "parfait",
    category: "breakfast",
  },
  {
    id: 16,
    name: "avocado toast",
    category: "breakfast",
  },
  {
    id: 17,
    name: "oatmeal",
    category: "breakfast",
  },
  {
    id: 18,
    name: "souffle",
    category: "breakfast",
  },
  {
    id: 19,
    name: "burger",
    category: "lunch",
  },
  {
    id: 20,
    name: "pasta",
    category: "lunch",
  },
];

export { seatingTables, menuItems };
