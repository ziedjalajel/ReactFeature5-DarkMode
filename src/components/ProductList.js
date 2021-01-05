// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
// Data
import products from "../products";

const ProductList = () => {
  const productList = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  return <ListWrapper>{productList}</ListWrapper>;
};

export default ProductList;
