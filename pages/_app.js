import React from "react";
import "../public/css/antd.less";
import { Provider } from "react-redux";

import withRedux from "next-redux-wrapper";
import { store } from "../stores/store";

const makeStore = () => store;

// class MyApp extends App {
//   render() {
//     const { Component, pageProps } = this.props;

//     return <Component {...pageProps} />;
//   }
// }

const MyApp = (props) => {
  const { Component, pageProps } = props;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default withRedux(makeStore)(MyApp);
