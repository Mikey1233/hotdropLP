import React from "react";
import "./App.css";
import Header from "./containers/header/Header";
import Featured from "./containers/featured/Featured";
import Connect from "./containers/connect/Connect";
import Control from "./containers/control/Control";
import Reason from "./containers/reason/Reason";
import Promote from "./containers/promote/Promote";
import Testimonials from "./containers/testimonials/Testimonials";
import Movement from "./containers/movement/Movement";
import Footer from "./containers/footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Featured />
      <Connect />
      <Control />
      <Reason />
      <Promote />
      <Testimonials />
      <Movement />
      <Footer />
    </div>
  );
}

export default App;
