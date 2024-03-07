import { Movement } from "@type";

export const movements: Movement[] = [
  {
    type: "add",
    amount: 222.32,
    currency: {
      type: "ars",
      amount: 133241.12,
    },
    date: {
      day: "March 2",
      year: 2023,
    },
    completed: true,
    partner: {
      username: "santiago zarate",
      pfp: "https://cdn.pfps.gg/pfps/1766-silly-cat.png",
      country: "argentina",
    },
  },
  {
    type: "add",
    amount: 86.11,
    currency: {
      type: "ars",
      amount: 371.12,
    },
    date: {
      day: "October 24",
      year: 2021,
    },
    completed: true,
    partner: {
      username: "mauro alfonso",
      pfp: "https://wallpapers-clan.com/wp-content/uploads/2022/07/funny-cat-1.jpg",
      country: "ecuador",
    },
  },
  {
    type: "send",
    amount: 86.11,
    currency: {
      type: "ars",
      amount: 371.12,
    },
    date: {
      day: "april 4",
      year: 2024,
    },
    completed: false,
    partner: {
      username: "john carpenter",
      pfp: "https://tr.rbxcdn.com/79b1759e71f39f1c5365593cfb6fbf20/420/420/Hat/Png",
      country: "poland",
    },
  },
  {
    type: "send",
    amount: 86.11,
    currency: {
      type: "ars",
      amount: 371.12,
    },
    date: {
      day: "april 4",
      year: 2024,
    },
    completed: false,
    partner: {
      username: "Joao da silva",
      pfp: "https://i.pinimg.com/1200x/0a/13/a9/0a13a9b63b9ab11125e7a5e117a67a61.jpg",
      country: "Brazil",
    },
  },
  {
    type: "send",
    amount: 86.11,
    currency: {
      type: "ars",
      amount: 371.12,
    },
    date: {
      day: "april 4",
      year: 2024,
    },
    completed: false,
    partner: {
      username: "Matias Recalde",
      pfp: "https://i.pinimg.com/236x/71/ac/33/71ac33eaa46f49c456044dd1f5a88f64.jpg",
      country: "Sweden",
    },
  },
];

export const movementsSend = movements.filter((mov) => mov.type === "send");
