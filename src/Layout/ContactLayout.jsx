import AbtBanner from "../Components/AbtBanner";
import Contact from "../Components/Contact";
import Cta from "../Components/Cta";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const ContactLayout = () => {
  return (
    <div>
      <header>
        <nav className="bg-info">
          <Navbar></Navbar>
        </nav>
      </header>
      <AbtBanner></AbtBanner>
      <Contact></Contact>
      <section>
        <Cta></Cta>
      </section>
      <section className="bg-cyan-100">
        <Footer></Footer>
      </section>
    </div>
  );
};

export default ContactLayout;
