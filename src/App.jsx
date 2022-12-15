import React from "react";
import Header from "./containers/header";
import Footer from "./containers/footer";
import Order from "./containers/order";
import Posts from "./containers/posts";
import Product from "./containers/product";



function App() {
  return (
    <div>
    <Header />
    <Product />
    <Posts />
    <Order />
    <Footer />
    </div>
  );
}

export default App;
