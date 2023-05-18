import Navbar from "./components/navbar/Navbar.js";
import "./App.css";
import Herosection from "./components/herosection/Herosection.js";
// import vector from './components/img/vector.svg'

import Aboutus from "./components/aboutus/Aboutus.js";
import Services from "./components/Services/Services.js";
import Projects from "./components/projects/Projects.js";
import Pricing from "./components/pricing/Pricing.js";
import Clients from "./components/clients/Clients.js";

import Form from "./components/form/Form.js";
import Footer from "./components/Footer/Footer.js";
import Sidebar from "./components/sidebar/Sidebar.js";
import { useState } from "react";

function App() {
  const [hide, setHide] = useState(false);

  const onHide = () => {
    setHide(!hide);
  };
  const [form, setForm] = useState("");
  return (
    <>
      <Sidebar onHide={onHide} hide={hide} />
      <div className="top">
        <Navbar onHide={onHide} />
        <Herosection />
      </div>

      <Aboutus />
      <Services />
      <Projects />
      <Pricing setForm={setForm} />
      <Clients />

      <Form form={form} setForm={setForm} />
      <Footer />
    </>
  );
}

export default App;
