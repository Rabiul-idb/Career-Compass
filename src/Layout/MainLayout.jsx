import { Outlet } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Cta from "../Components/Cta";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div>
      <nav className="bg-info">
        <Navbar></Navbar>
      </nav>
      <Outlet></Outlet>

      <section>
        <Cta></Cta>
      </section>
      <section className="bg-cyan-100">
        <Footer></Footer>
      </section>
    </div>
  );
};

export default MainLayout;
