import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App/app";
import { Setting } from "./const";
import { store } from "./store";
import { fillOffers } from "./store/action";
import { offers } from "./mocks/offers";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

store.dispatch(fillOffers(offers));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App rentalOffersCount={Setting.rentOffersCount} />
    </Provider>
  </React.StrictMode>
);
