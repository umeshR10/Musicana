import Header from "../Header/header";
import { TrendingSongs } from "../Header/Sections/section";
import Footer from "../Footer/footer";

const TrendS = () => {
  return (
    <>
      <div className="bg-dark text-white">
        <Header />
        <TrendingSongs />
        <Footer />
      </div>
    </>
  );
};

export default TrendS;
