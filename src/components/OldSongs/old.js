import Header from "../Header/header";
import { OldSongs } from "../Header/Sections/section";
import Footer from "../Footer/footer";

const OldS = () => {
  return (
    <>
      <div className="bg-dark text-white">
        <Header />
        <OldSongs />
        <Footer />
      </div>
    </>
  );
};

export default OldS;
