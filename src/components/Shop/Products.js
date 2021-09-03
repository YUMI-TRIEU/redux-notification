import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUM_DATA = [
  {
    id: "p1",
    name: "The orange",
    price: 12.9,
    description: "The orange is from Dalat",
  },
  {
    id: "p2",
    name: "The apple",
    price: 15.5,
    description: "The apple is from America Thor",
  },
  {
    id: "p3",
    name: "The kiwi",
    price: 5.01,
    description: "It is the best",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUM_DATA.map((item) => {
          return (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.name}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
