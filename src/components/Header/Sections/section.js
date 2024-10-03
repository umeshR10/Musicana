import "./section.css";
import { Link } from "react-router-dom";

export const TrendingSongs = () => {
  return (
    <>
      <section className="my-2 container-fluid bg-dark text-white">
        <br /> <br />
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 col-12 mb-3">
            <img
              src="https://a10.gaanacdn.com/gn_img/albums/21GWwrR3pk/GWwA4VlRKp/size_l.jpg"
              alt="trending"
              className="img-fluid border border-danger rounded float-center"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-12 mb-2">
            <h1>Trending Songs</h1>
            <br />
            <h5>Maahi Song | Album</h5>
            <p className="text-info">Madhur Sharma</p>
            <br />
            <h5>
              Created by{" "}
              <span className="text-primary"> 
                Musicana <i className="fa-brands fa-napster fa-flip"></i>
              </span>
            </h5>
            <br />
            <button className="btn btn-outline-info">
              <a href="Music/Nav/_Maahi_64(PagalWorld.com.cm).mp3" target="_blank">Play▶️</a>
            </button>
          </div>
        </div>
        <br />
        <h2 className="text-warning">Recommended Songs</h2>
        <br />
        <div className="row">
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <a href="Music/Tainu-Khabar-Nahi(Pagal-World.Com.In).mp3" target="_blank">
                <img
                  src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_zeemusic/2024-06/01/16-11/ZMC08401.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">Tainu Khabar Nahi</h5>
                  <p className="card-text">Arijit Singh</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <a href="Music/Pao-Ki-Jutti(Pagal-World.Com.In).mp3" target="_blank">
                <img
                  src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/00602465716511_20240504000719536/1714785604511/24UMGIM45548_T1_cvrart.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">Paon Ki Jutti</h5>
                  <p className="card-text">Jyoti Nooran</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <a href="Music/128-Paas Tere Main - Savi 128 Kbps.mp3" target="_blank">
                <img
                  src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8902894362313_20240528191806/8902894362313/1716905105588/resources/8902894362313.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">Paas Tere Main</h5>
                  <p className="card-text">Shreya Ghoshal-Savi</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <a href="" target="_blank">
                <img
                  src="https://www.pagalworld.com.sb/siteuploads/thumb/sft135/67444_4.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">Heeriye</h5>
                  <p className="card-text">Amit Tyagi</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <a href="Music/128-Assi Sajna - Intense 128 Kbps.mp3" target="_blank">
                <img
                  src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_wmg/20240528162040559/5021732383136/1716914741780/resources/5021732383136.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">Assi Sajna</h5>
                  <p className="card-text">Jasleen Royal</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <a href="Music/_Humdum_64(PagalWorld.com.sb).mp3" target="_blank">
                <img
                  src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431994271_20240510154807/8903431994271/1715337303770/resources/8903431994271.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">Humdum</h5>
                  <p className="card-text">Vishal Mishra</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <a href="Music/Zaalima_64(PagalWorld.com.sb).mp3" target="_blank">
                <img
                  src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_ingrooves/20240528043502993/196922985300/1716897307434/resources/196922985300.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">Zaalima</h5>
                  <p className="card-text">Shreya Ghoshal</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <a href="Music/Tu Hai Champion_64(PagalWorld.com.sb).mp3" target="_blank">
                <img
                  src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431002433_20240530161609/8903431002433/1717067110763/resources/8903431002433.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">Tu Champion Hai</h5>
                  <p className="card-text">Pritam</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <a href="Music/128-Zidd Na Karo - Dedh Bigha Zameen 128 Kbps (2).mp3" target="_blank">
                <img
                  src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431001832_20240527170008/8903431001832/1716810611929/resources/8903431001832.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">Zidd Naa Karo</h5>
                  <p className="card-text">Stebin Ben</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <a href="Music/Musafir - Dedh Bigha Zameen 128 Kbps.mp3" target="_blank">
                <img
                  src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431002600_20240603114807/8903431002600/1717396507253/resources/8903431002600.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">Musafir</h5>
                  <p className="card-text">Jubin Nautiyal</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <a href="Music/Dhadke Dil Yeh Deewana Kumaar 128 Kbps.mp3" target="_blank">
                <img
                  src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_zeemusic/2024-05/21/05-50/ZMC08375.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">Dhadke Dil Yeh Deewana</h5>
                  <p className="card-text">Stebin Ben</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <a href="Music/Jeena Sikha De_64(PagalWorld.com.sb).mp3" target="_blank">
                <img
                  src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431993977_20240507160515/8903431993977/1715079305125/resources/8903431993977.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">Jeena Sikha De</h5>
                  <p className="card-text">Arijit Singh</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <a href="Music/Millionaire_64(PagalWorld.com.sb).mp3" target="_blank">
                <img
                  src="https://www.pagalworld.com.sb/siteuploads/thumb/sft145/72038_4.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">Millionaire</h5>
                  <p className="card-text">Yo Yo Honey Singh</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <a href="Music/Wada humse kar lo.mp3" target="_blank">
                <img
                  src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431001849_20240525184028/8903431001849/1716643805301/resources/8903431001849.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">Vada Humse Karo</h5>
                  <p className="card-text">KK</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <a href="Music/Chhod Diya - Bazaar.mp3" target="_blank">
                <img
                  src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/srch_hungama_2084195.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">Chod Diya - Baazar</h5>
                  <p className="card-text">Bilal Saeed</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <a href="Music/Whos that girl.mp3" target="_blank">
                <img
                  src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431999986_20240605124407/8903431999986/1717572614380/resources/8903431999986.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">Who's That Girl</h5>
                  <p className="card-text">Guru Randhawa</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <a href="Music/Sarphira.mp3" target="_blank">
                <img
                  src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431003119_20240608183806/8903431003119/1717853108674/resources/8903431003119.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">Sarphira</h5>
                  <p className="card-text">Pritam</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <a href="Music/Taras.mp3" target="_blank">
                <img
                  src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_zeemusic/2024-05/27/04-01/ZMC08401.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">Taras</h5>
                  <p className="card-text">Jasmine Sandlas</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const NewSongs = () => {
  return (
    <>
      <section className="my-2 container-fluid  bg-dark text-white">
        <br />
        <br />
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 col-12 mb-3">
            <img
              src="https://a10.gaanacdn.com/gn_img/albums/Rz4W8vKxD5/4W876Xyv3x/size_l.jpg"
              alt="trending"
              className="img-fluid border border-danger rounded"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-12 mb-2">
            <h1>New_songs</h1>
            <br />
            <h5>Soulmate Song | Ek tha raja</h5>
            <p className="text-info">Badshah, Arijit Singh</p>
            <br />
            <h5>
              Created by{" "}
              <span className="text-primary">
                Musicana <i className="fa-brands fa-napster fa-flip"></i>
              </span>
            </h5>
            <br />
            <button className="btn btn-outline-info">
              <a href="Music/Nav/_Soulmate_64(PagalWorld.com.cm).mp3" target="_blank">Play▶️</a>
            </button>
          </div>
        </div>
        <br />
        <h2 className="text-warning">Recommended Songs</h2>
        <br />
        <div className="row">
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_zeemusic/2024-06/01/16-11/ZMC08401.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Tainu Khabar Nahi</h5>
                <p className="card-text">Arijit Singh</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/00602465716511_20240504000719536/1714785604511/24UMGIM45548_T1_cvrart.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Paon Ki Jutti</h5>
                <p className="card-text">Jyoti Nooran</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8902894362313_20240528191806/8902894362313/1716905105588/resources/8902894362313.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Paas Tere Main</h5>
                <p className="card-text">Shreya Ghoshal-Savi</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/859788564583_20240522194008/859788564583/1716388206159/resources/859788564583.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Kaale Kartoos</h5>
                <p className="card-text">Amit Tyagi</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_wmg/20240528162040559/5021732383136/1716914741780/resources/5021732383136.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Assi Sajna</h5>
                <p className="card-text">Jasleen Royal</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431994271_20240510154807/8903431994271/1715337303770/resources/8903431994271.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Humdum</h5>
                <p className="card-text">Vishal Mishra</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_ingrooves/20240528043502993/196922985300/1716897307434/resources/196922985300.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Zaalima</h5>
                <p className="card-text">Shreya Ghoshal</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431002433_20240530161609/8903431002433/1717067110763/resources/8903431002433.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Tu Champion Hai</h5>
                <p className="card-text">Pritam</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431001832_20240527170008/8903431001832/1716810611929/resources/8903431001832.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Zidd Naa Karo</h5>
                <p className="card-text">Stebin Ben</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431002600_20240603114807/8903431002600/1717396507253/resources/8903431002600.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Musafir</h5>
                <p className="card-text">Jubin Nautiyal</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_zeemusic/2024-05/21/05-50/ZMC08375.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Dhadke Dil Yeh Deewana</h5>
                <p className="card-text">Stebin Ben</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431993977_20240507160515/8903431993977/1715079305125/resources/8903431993977.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Jeena Sikha De</h5>
                <p className="card-text">Arijit Singh</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_wmg/20240520202055487/5021732382054/1716237648361/resources/5021732382054.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Har Dafa</h5>
                <p className="card-text">Nabeel Shaukat Ali</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431001849_20240525184028/8903431001849/1716643805301/resources/8903431001849.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Vada Humse Karo</h5>
                <p className="card-text">KK</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/srch_hungama_2084195.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Ab Chod Diya</h5>
                <p className="card-text">Mahima</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431999986_20240605124407/8903431999986/1717572614380/resources/8903431999986.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Who's That Girl</h5>
                <p className="card-text">Guru Randhawa</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431003119_20240608183806/8903431003119/1717853108674/resources/8903431003119.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Sarphira</h5>
                <p className="card-text">Pritam</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_zeemusic/2024-05/27/04-01/ZMC08401.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Taras</h5>
                <p className="card-text">Jasmine Sandlas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const OldSongs = () => {
  return (
    <>
      <section className="my-2 container-fluid  bg-dark text-white">
        <br />
        <br />
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 col-12 mb-3">
            <img
              src="https://a10.gaanacdn.com/gn_img/albums/DwPKOkBKqV/wPKORwkbqV/size_l.jpg"
              alt="trending"
              className="img-fluid border border-danger rounded float-center"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-12 mb-2">
            <h1>Old_songs</h1>
            <br />
            <h5>Pal Pal Dil Ke Paas Song | Blackmail</h5>
            <p className="text-info">Kishore Kumar</p>
            <br />
            <h5>
              Created by{" "}
              <span className="text-primary">
                Musicana <i className="fa-brands fa-napster fa-flip"></i>
              </span>
            </h5>
            <br />
            <button className="btn btn-outline-info">
              <a href="Music/Nav/old_BM-Pal Pal Dil Ke Pas.mp3" target="_blank">Play▶️</a>
            </button>
          </div>
        </div>
        <br />
        <h2 className="text-warning">Recommended Songs</h2>
        <br />
        <div className="row">
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_zeemusic/2024-06/01/16-11/ZMC08401.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Tainu Khabar Nahi</h5>
                <p className="card-text">Arijit Singh</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/00602465716511_20240504000719536/1714785604511/24UMGIM45548_T1_cvrart.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Paon Ki Jutti</h5>
                <p className="card-text">Jyoti Nooran</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8902894362313_20240528191806/8902894362313/1716905105588/resources/8902894362313.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Paas Tere Main</h5>
                <p className="card-text">Shreya Ghoshal-Savi</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/859788564583_20240522194008/859788564583/1716388206159/resources/859788564583.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Kaale Kartoos</h5>
                <p className="card-text">Amit Tyagi</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_wmg/20240528162040559/5021732383136/1716914741780/resources/5021732383136.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Assi Sajna</h5>
                <p className="card-text">Jasleen Royal</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431994271_20240510154807/8903431994271/1715337303770/resources/8903431994271.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Humdum</h5>
                <p className="card-text">Vishal Mishra</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_ingrooves/20240528043502993/196922985300/1716897307434/resources/196922985300.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Zaalima</h5>
                <p className="card-text">Shreya Ghoshal</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431002433_20240530161609/8903431002433/1717067110763/resources/8903431002433.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Tu Champion Hai</h5>
                <p className="card-text">Pritam</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431001832_20240527170008/8903431001832/1716810611929/resources/8903431001832.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Zidd Naa Karo</h5>
                <p className="card-text">Stebin Ben</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431002600_20240603114807/8903431002600/1717396507253/resources/8903431002600.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Musafir</h5>
                <p className="card-text">Jubin Nautiyal</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_zeemusic/2024-05/21/05-50/ZMC08375.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Dhadke Dil Yeh Deewana</h5>
                <p className="card-text">Stebin Ben</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431993977_20240507160515/8903431993977/1715079305125/resources/8903431993977.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Jeena Sikha De</h5>
                <p className="card-text">Arijit Singh</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_wmg/20240520202055487/5021732382054/1716237648361/resources/5021732382054.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Har Dafa</h5>
                <p className="card-text">Nabeel Shaukat Ali</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431001849_20240525184028/8903431001849/1716643805301/resources/8903431001849.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Vada Humse Karo</h5>
                <p className="card-text">KK</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/srch_hungama_2084195.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Ab Chod Diya</h5>
                <p className="card-text">Mahima</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431999986_20240605124407/8903431999986/1717572614380/resources/8903431999986.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Who's That Girl</h5>
                <p className="card-text">Guru Randhawa</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431003119_20240608183806/8903431003119/1717853108674/resources/8903431003119.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Sarphira</h5>
                <p className="card-text">Pritam</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_zeemusic/2024-05/27/04-01/ZMC08401.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Taras</h5>
                <p className="card-text">Jasmine Sandlas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const MyMusic = () => {
  return (
    <>
      <section className="my-2 container-fluid  bg-dark text-white">
        <br />
        <br />
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 col-12 mb-3">
            <img
              src="https://a10.gaanacdn.com/gn_img/song/jBr3gybR1m/r3gNMnyQKR/size_l_1577334328.webp"
              alt="My_music"
              className="img-fluid border border-danger rounded float-center"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-12 mb-2">
            <h1>My_music</h1>
            <br />
            <h5>Garmi Song | Street Dancer 3D</h5>
            <p className="text-info">Badshah, Neha Kakkar</p>
            <br />
            <h5>
              Created by{" "}
              <span className="text-primary">
                Musicana <i className="fa-brands fa-napster fa-flip"></i>
              </span>
            </h5>
            <br />
            <button className="btn btn-outline-info">
              <a href="Music/Nav/new_128_02 - Garmi - Street Dancer 3D (2020).mp3" target="_blank">Play▶️</a>
            </button>
          </div>
        </div>
        <br />
        <h2 className="text-warning">Recommended Songs</h2>
        <br />
        <div className="row">
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_zeemusic/2024-06/01/16-11/ZMC08401.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Tainu Khabar Nahi</h5>
                <p className="card-text">Arijit Singh</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/00602465716511_20240504000719536/1714785604511/24UMGIM45548_T1_cvrart.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Paon Ki Jutti</h5>
                <p className="card-text">Jyoti Nooran</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8902894362313_20240528191806/8902894362313/1716905105588/resources/8902894362313.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Paas Tere Main</h5>
                <p className="card-text">Shreya Ghoshal-Savi</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/859788564583_20240522194008/859788564583/1716388206159/resources/859788564583.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Kaale Kartoos</h5>
                <p className="card-text">Amit Tyagi</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_wmg/20240528162040559/5021732383136/1716914741780/resources/5021732383136.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Assi Sajna</h5>
                <p className="card-text">Jasleen Royal</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431994271_20240510154807/8903431994271/1715337303770/resources/8903431994271.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Humdum</h5>
                <p className="card-text">Vishal Mishra</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_ingrooves/20240528043502993/196922985300/1716897307434/resources/196922985300.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Zaalima</h5>
                <p className="card-text">Shreya Ghoshal</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431002433_20240530161609/8903431002433/1717067110763/resources/8903431002433.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Tu Champion Hai</h5>
                <p className="card-text">Pritam</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431001832_20240527170008/8903431001832/1716810611929/resources/8903431001832.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Zidd Naa Karo</h5>
                <p className="card-text">Stebin Ben</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431002600_20240603114807/8903431002600/1717396507253/resources/8903431002600.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Musafir</h5>
                <p className="card-text">Jubin Nautiyal</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_zeemusic/2024-05/21/05-50/ZMC08375.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Dhadke Dil Yeh Deewana</h5>
                <p className="card-text">Stebin Ben</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431993977_20240507160515/8903431993977/1715079305125/resources/8903431993977.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Jeena Sikha De</h5>
                <p className="card-text">Arijit Singh</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_wmg/20240520202055487/5021732382054/1716237648361/resources/5021732382054.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Har Dafa</h5>
                <p className="card-text">Nabeel Shaukat Ali</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431001849_20240525184028/8903431001849/1716643805301/resources/8903431001849.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Vada Humse Karo</h5>
                <p className="card-text">KK</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/srch_hungama_2084195.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Ab Chod Diya</h5>
                <p className="card-text">Mahima</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431999986_20240605124407/8903431999986/1717572614380/resources/8903431999986.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Who's That Girl</h5>
                <p className="card-text">Guru Randhawa</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431003119_20240608183806/8903431003119/1717853108674/resources/8903431003119.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Sarphira</h5>
                <p className="card-text">Pritam</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card mb-4 max">
              <img
                src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_zeemusic/2024-05/27/04-01/ZMC08401.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">Taras</h5>
                <p className="card-text">Jasmine Sandlas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
