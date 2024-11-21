import { Helmet } from "react-helmet-async";
import AboutPage from "../Components/AboutPage";
import AbtBanner from "../Components/AbtBanner";
import Cta from "../Components/Cta";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const AboutMore = () => {
  return (
    
    <div>

      <Helmet>
          <title>About || Career Compass</title>
          <meta name="description" content="this is a about page of Career Compass" />
      </Helmet>

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
