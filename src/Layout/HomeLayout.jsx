import { Helmet } from "react-helmet-async";
import About from "../Components/About";
import Banner from "../Components/Banner";
import Service from "../Components/Service";

const HomeLayout = () => {
  return (
    <div className="">

        <Helmet>
          <title>Home || Career Compass</title>
          <meta name="description" content="Career Compass is a platform that helps you find the right
          career path for you. We provide you with the best career guidance and resources to help you achieve
          your goals."/>
        </Helmet>

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
