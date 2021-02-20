import "./styles.css";
import React, { Component } from "react";
import Header from "./Components/Header";
import Pokeball from "./Components/Pokeball";
import Socials from "./Components/Socials";
import SubscribeForm from "./Components/SubscribeForm";
import SimpleForm from "./Components/MailchimpSubscribe";
import Footer from "./Components/Footer";

//export default function App() {
//  return (
//    <div className="App">
//      <Header />
//      <Pokeball />
//    </div>
//  );
//}

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Header />
        <div className="MyForm">
          {" "}
          <SimpleForm />
        </div>
        <Pokeball />
        <Socials />
        <Footer />
      </div>
    );
  }
}

export default App;
