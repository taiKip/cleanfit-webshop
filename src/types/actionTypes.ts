import { ICartItem } from "./../interfaces/ICartItem";
export type CARTACTIONS =
  | { type: "add"; payload: ICartItem }
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number }
  | { type: "delete"; payload: number };
