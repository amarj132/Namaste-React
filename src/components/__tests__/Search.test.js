import { render, screen, waitFor } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../utils/mockData";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Shimmer should load on HomePage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer");

  expect(shimmer.children.length).toBe(10);

  console.log(shimmer);
});

 test("Restaurants should load on HomePage", async () => {
    const body = render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("search-btn")))
  
    const resList = body.getByTestId("res-list");
  
    expect(resList.children.length).toBe(10);
  
    console.log(shimmer);
  });