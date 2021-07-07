import classes from "./Products.module.css";
import { useQuery } from "react-query";
import Item from "./Item";
import { IProduct } from "../../interfaces/IProduct";
import SkeletonItem from "../Skeletons/SkeletonItem";

import { useContext } from "react";
import SearchContext from "../contexts/SearchContext";

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  return res.json();
};
const ShopItems = () => {
  const { data, error, isLoading } = useQuery("proucts", fetchProducts);
  const { searchItem } = useContext(SearchContext);

  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <ul className={classes["list-items"]}>
      {isLoading && list.map((item) => <SkeletonItem key={item} />)}
      {error && <h3>Oops!Something went wrong</h3>}
      {data && searchItem !== ""
        ? data
            .filter((item: IProduct) => item.title.toLowerCase().includes(searchItem.toLowerCase()))
            .map((item: IProduct) => <Item item={item} key={item.id} />)
        : data &&
          data.map((item: IProduct) => <Item item={item} key={item.id} />)}
    </ul>
  );
};

export default ShopItems;
