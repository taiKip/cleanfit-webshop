import { ICartItem } from './ICartItem';
export interface IState{
    items: ICartItem[],
    totalAmount:number
}