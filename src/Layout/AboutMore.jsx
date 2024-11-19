import AboutPage from "../Components/AboutPage";
import AbtBanner from "../Components/AbtBanner";
import Cta from "../Components/Cta";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const AboutMore = () => {
  return (
    <div>
      <header>
        <nav className="bg-info">
          <Navbar></Navbar>
        </nav>
      </header>
      <AbtBanner></AbtBanner>
      <section>
        <AboutPage></AboutPage>
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

export default AboutMore;
