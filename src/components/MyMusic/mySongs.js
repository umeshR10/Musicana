import Header from "../Header/header";
import { MyMusic } from "../Header/Sections/section";
import Footer from "../Footer/footer";

const MySongs = () => {
  return (
    <>
      <div className="bg-dark text-white">
        <Header />
        <MyMusic />
        <Footer />
      </div>
    </>
  );
};

export default MySongs;
