import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering herder", () => {
  //Load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  //check if logo is loaded
  const logo = header.getAllByTestId("logo");

  console.log(logo[0]);

  expect(logo[0].src).toBe(
    "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
  );

  //
});

test("Online status should be green on rendering herder", () => {
  //Load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const onlineStatus = header.getByTestId("online-status");

  //check if onlineStatus is loaded

  expect(onlineStatus.innerHTML).toBe(" ✅");

  //
});


test("Card should have 0 items on rendering herder", () => {
  //Load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cart");

  //check if cart is loaded

  expect(cart.innerHTML).toBe("Cart 0 ");

  //
});
