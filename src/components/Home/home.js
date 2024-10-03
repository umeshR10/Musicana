import "./home.css";

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
          <div className="card mb-2" style={{width:'250px'}}>
            <a href="Music/Hua Main_64(PagalWorld.com.cm).mp3" target="_blank">
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
            </a>
          </div>
          <div className="card mb-2" style={{width:'250px'}}>
            <a href="Music/Bad Munda.mp3" target="_blank">
              <img
                src="data:image/jpeg;base64,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"
                className="card-img-top"
                height="300px"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">PUNJABI</p>
                <p className="card-text">TOP 50</p>
              </div>
            </a>
          </div>
          <div className="card mb-2" style={{width:'250px'}}>
            <a
              href="Music/Your-Eyes-Got-My-Heart(PaglaSongs).mp3"
              target="_blank"
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
            </a>
          </div>
          <div className="card mb-2" style={{width:'250px'}}>
            <a href="Music/Ijazat.mp3" target="_blank">
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
            </a>
          </div>
        </div>
        <br />
        <h3 className="text-warning">New Releases</h3>
        <div className="d-flex justify-content-around flex-wrap">
          <div className="card mb-2" style={{width:'250px'}}>
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
          <div className="card mb-2" style={{width:'250px'}}>
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
          <div className="card mb-2" style={{width:'250px'}}>
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
          <div className="card mb-2" style={{width:'250px'}}>
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
