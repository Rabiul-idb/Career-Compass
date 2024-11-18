import Banner from "../Components/Banner";
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
    </div>
  );
};

export default HomeLayout;
