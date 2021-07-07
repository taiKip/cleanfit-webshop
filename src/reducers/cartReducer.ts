import { ICartItem } from "./../interfaces/ICartItem";
import { IState } from "./../interfaces/IState";
import { CARTACTIONS } from "./../types/actionTypes";
export const cartReducer = (state: IState, action: CARTACTIONS) => {
 
  let itemIndex: number;
  let existing_item: ICartItem;
  let updateItem: ICartItem;
  let newAmount: number;
  let updateState: IState;
  let itemsCopy: ICartItem[];
  switch (action.type) {
      case "add":
          itemsCopy = [...state.items]
          newAmount = state.totalAmount + action.payload.price;
          itemIndex = itemsCopy.findIndex(item => item.id === action.payload.id)
          existing_item = itemsCopy[itemIndex]
          if (existing_item) {
              updateItem = {
                  ...existing_item,
                  quantity:existing_item.quantity+1
              }
              itemsCopy[itemIndex] = updateItem;
              updateState = {
                  items: itemsCopy,
                  totalAmount:newAmount
              }
              state = updateState;
          } else {
              newAmount = state.totalAmount + action.payload.price;
              itemsCopy = [...state.items]
              updateState = {
                  items: [action.payload, ...itemsCopy],
                  totalAmount:newAmount
              }
              state = updateState;
          }
     
      return state;
    case "increment":
      itemsCopy = [...state.items];

      itemIndex = itemsCopy.findIndex((item) => item.id === action.payload);

      existing_item = itemsCopy[itemIndex];
      newAmount = state.totalAmount + existing_item.price;
      updateItem = {
        ...existing_item,
        quantity: existing_item.quantity + 1,
      };
      itemsCopy[itemIndex] = updateItem;
      updateState = {
        items: [...itemsCopy],
        totalAmount: newAmount,
      };
      state = updateState;
      return state;
    case "decrement":
      itemsCopy = [...state.items];
      itemIndex = itemsCopy.findIndex((item) => item.id === action.payload);
      existing_item = itemsCopy[itemIndex];

      if (existing_item.quantity > 1) {
        newAmount = state.totalAmount - existing_item.price;
        updateItem = {
          ...existing_item,
          quantity: existing_item.quantity - 1,
        };
        itemsCopy[itemIndex] = updateItem;
        updateState = {
          items: [...itemsCopy],
          totalAmount: newAmount,
        };
        state = updateState;
      } else {
        itemsCopy.splice(itemIndex, 1);
        newAmount = state.totalAmount - existing_item.price;
        updateState = {
          items: [...itemsCopy],
          totalAmount: newAmount,
        };
        state = updateState;
      }
      return state;
    default:
      return state;
  }
};
