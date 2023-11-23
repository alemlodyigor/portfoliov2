import "./App.css";

import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import { useState } from "react";

function App() {
  const [menu, showMenu] = useState(false);

  const showMenuHandle = () => showMenu((prevState) => !prevState);

  return (
    <>
      <Home />
      {menu && <Menu />}
      <Footer menu={showMenuHandle} />
    </>
  );
}

export default App;
