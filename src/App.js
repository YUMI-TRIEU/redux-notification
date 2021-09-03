import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    const sendData = async () => {
      var response = await fetch(
        "https://react-post-37b5a-default-rtdb.asia-southeast1.firebasedatabase.app/ordersRedux.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Send order data is failed.");
      }
    };
    if (isInitial) {
      isInitial = false;
      return;
    }

    sendData().catch((error) => {
      console.log(error.message);
    });
  }, [cart, dispatch]);
  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
