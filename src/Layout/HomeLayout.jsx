import About from "../Components/About";
import Banner from "../Components/Banner";
import Service from "../Components/Service";

const HomeLayout = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>

      <section className="bg-cyan-100 py-24 ">
        <About></About>
      </section>
      <section>
        <Service></Service>
      </section>
    </div>
  );
};

export default HomeLayout;
