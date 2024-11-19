import About from "../Components/About";
import Banner from "../Components/Banner";
import Cta from "../Components/Cta";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <nav className="bg-info">
          <Navbar></Navbar>
        </nav>
        <section>
          <Banner></Banner>
        </section>
      </header>
    <section className="bg-cyan-100 py-24 ">
        <About></About>
    </section>
    <section>
        <Cta></Cta>
    </section>
    <section className="bg-cyan-100">
        <Footer></Footer>
    </section>
    </div>
  );
};

export default HomeLayout;
