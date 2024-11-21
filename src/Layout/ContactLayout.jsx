
import Contact from "../Components/Contact";
import ContactBanner from "../Components/ContactBanner";
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
      <ContactBanner></ContactBanner>
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
