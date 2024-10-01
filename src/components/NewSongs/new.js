import Header from "../Header/header";
import { NewSongs } from "../Header/Sections/section";
import Footer from "../Footer/footer";

const NewS = () => {
  return (
    <>
      <div className="bg-dark text-white">
        <Header />
        <NewSongs />
        <Footer />
      </div>
    </>
  );
};

export default NewS;
