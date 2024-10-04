import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg-dark container-fluid">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <a href="#">
                <img
                  src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65a68ec7ed7dad04b5a74e4e/BANNER_94879319150057.png"
                  className="d-block w-100"
                  alt="..."
                />
              </a>
            </div>
            <div className="carousel-item">
              <a href="#">
                <img
                  src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/667014aa8eb8e9491901c6d9/BANNER_10834619175232.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </a>
            </div>
            <div className="carousel-item">
              <a href="#">
                <img
                  src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/667eb2fd01fd9c087c7f9b13/BANNER_27281925731717.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </a>
            </div>
            <div className="carousel-item">
              <a href="#">
                <img
                  src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/667ea2b77cce3b53e44f7b8a/BANNER_3876145781552.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </a>
            </div>
            <div className="carousel-item">
              <a href="#">
                <img
                  src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/6687c9c617af7a2f69a2e1e3/BANNER_28792974799207.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </a>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <br />
        <h3 className="text-warning">Top Charts</h3>
        <br />
        <div className="d-flex justify-content-around flex-wrap">
          <div className="card mb-2" style={{ width: "250px" }}>
            <Link to="/hindi">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMDQwOTI3NTMtZjA0My00M2E3LThmODUtODdiNTQ3ZjNiNGE3XkEyXkFqcGdeQXVyNTM2NTg3Nzg@._V1_.jpg"
                className="card-img-top"
                height="300px"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">HINDI</p>
                <p className="card-text">TOP 50</p>
              </div>
            </Link>
          </div>
          <div className="card mb-2" style={{ width: "250px" }}>
            <Link to="">
              <img
                src="https://cover.mr-jatt.im/thumb/498615/Bad-Munda-1.jpg"
                className="card-img-top"
                height="300px"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">PUNJABI</p>
                <p className="card-text">TOP 50</p>
              </div>
            </Link>
          </div>
          <div className="card mb-2" style={{ width: "250px" }}>
            <Link
              to=""
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKyMXJQyhK0y_PvKoJ52zVVNRaFIMlAVVxqFv8PEYFB-Nt1jNH9XgKn2TmprDbo7M0eSU&usqp=CAU"
                className="card-img-top"
                height="300px"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">ENGLISH</p>
                <p className="card-text">TOP 50</p>
              </div>
            </Link>
          </div>
          <div className="card mb-2" style={{ width: "250px" }}>
            <Link to="">
              <img
                src="https://stat5.bollywoodhungama.in/wp-content/uploads/2016/04/maxresdefault-4-720x405.jpg"
                className="card-img-top"
                height="300px"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">ROMANCE</p>
                <p className="card-text">TOP 50</p>
              </div>
            </Link>
          </div>
        </div>
        <br />
        <h3 className="text-warning">New Releases</h3>
        <div className="d-flex justify-content-around flex-wrap">
          <div className="card mb-2" style={{ width: "250px" }}>
            <a
              href="Music/Laa Pila De Sharaab_64(PagalWorld.com.cm).mp3"
              target="_blank"
            >
              <img
                src="https://a10.gaanacdn.com/gn_img/albums/D0PKLrWGl9/PKLvPJ1rWG/size_m.jpg"
                className="card-img-top"
                height="300px"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Laa pila de sharab</p>
              </div>
            </a>
          </div>
          <div className="card mb-2" style={{ width: "250px" }}>
            <a href="Music/Thoughts - Prodgk.mp3" target="_blank">
              <img
                src="https://a10.gaanacdn.com/gn_img/albums/9En3pqeWXD/n3pkXLw9KX/size_m.jpg"
                className="card-img-top"
                height="300px"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">THOUGHTS</p>
              </div>
            </a>
          </div>
          <div className="card mb-2" style={{ width: "250px" }}>
            <a
              href="Music/Akh Da Taara-(PagalSongs.Com.IN).mp3"
              target="_blank"
            >
              <img
                src="https://a10.gaanacdn.com/gn_img/albums/g4w3vr3jJB/w3v58p8eKj/size_m_1712116950.jpg"
                className="card-img-top"
                height="300px"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Akh da taara</p>
              </div>
            </a>
          </div>
          <div className="card mb-2" style={{ width: "250px" }}>
            <a href="Music/Problems Over Peace.mp3" target="_blank">
              <img
                src="https://a10.gaanacdn.com/gn_img/albums/JD2KJyAbOL/2KJ5qrBebO/size_m.jpg"
                className="card-img-top"
                height="300px"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Problems over peace</p>
              </div>
            </a>
          </div>
        </div>
        <br />
        <h3 className="text-warning">Top Artists</h3>
        <br />
        <div className="">
          <div className="row">
            <div className="col-md-2">
              <div className="card mb-4 shadow-sm max">
                <img
                  src="https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_m_1638898900.webp"
                  className="card-img-top"
                  alt="Artist 1"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="#">Arijit Singh</a>
                  </h5>
                  <p className="card-text">
                    Arijit Singh is a renowned Indian playback singer and music
                    composer celebrated for his soulful voice and emotive
                    renditions.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Follow
                      </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card mb-4 shadow-sm max">
                <img
                  src="https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNgP763B/size_m_1595857138.webp"
                  className="card-img-top"
                  alt="Artist 2"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="#">Tony Kakkar</a>
                  </h5>
                  <p className="card-text">
                    Tony Kakkar is a prominent Indian singer, composer, and
                    songwriter known for his catchy tunes and contributions.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Follow
                      </button>
                    </div>
                    <small className="text-muted">12 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card mb-4 shadow-sm max">
                <img
                  src="https://a10.gaanacdn.com/gn_img/artists/10q3ZR1352/0q3Z6Lg135/size_m_1712052402.webp"
                  className="card-img-top"
                  alt="Artist 2"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="#">Jubin Nautiyal</a>
                  </h5>
                  <p className="card-text">
                    Jubin Nautiyal is a highly acclaimed Indian playback singer
                    known for his versatile voice and emotive renditions.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Follow
                      </button>
                    </div>
                    <small className="text-muted">12 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card mb-4 shadow-sm max">
                <img
                  src="https://a10.gaanacdn.com/gn_img/artists/6Zxb2r7b9w/Zxb2xp0w39/size_m.jpg"
                  className="card-img-top"
                  alt="Artist 2"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="#">B Praak</a>
                  </h5>
                  <p className="card-text">
                    B Praak, whose real name is Pratik Bachan, is a highly
                    talented Indian singer, music composer, and lyricist.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Follow
                      </button>
                    </div>
                    <small className="text-muted">12 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card mb-4 shadow-sm max">
                <img
                  src="https://a10.gaanacdn.com/gn_img/artists/w4MKPDOKoj/4MKPgoQgbo/size_m_1516802409.webp"
                  className="card-img-top"
                  alt="Artist 2"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="#">Honey Singh</a>
                  </h5>
                  <p className="card-text">
                    Honey Singh, also known as Yo Yo Honey Singh, is a prominent
                    figure in the Indian music industry, He won his era.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Follow
                      </button>
                    </div>
                    <small className="text-muted">12 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card mb-4 shadow-sm max">
                <img
                  src="https://a10.gaanacdn.com/gn_img/artists/Rz4W87v3xD/Rz4W8ppWxD/size_m_1638817418.webp"
                  className="card-img-top"
                  alt="Artist 2"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="#">Neha Kakkar</a>
                  </h5>
                  <p className="card-text">
                    Neha Kakkar is a highly acclaimed Indian playback singer
                    known for her dynamic vocals and energetic performances.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Follow
                      </button>
                    </div>
                    <small className="text-muted">12 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default Home;
