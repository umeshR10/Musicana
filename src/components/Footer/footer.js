import './footer.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white">
        <div className="container border rounded">
          <br />
          <h4 className="text-danger">About Musicana</h4>
          Musicana is a complete package that allows you free online music
          streaming, set caller tunes, listen to podcasts, download MP3 music
          offline, and much more! Since music is essentially the only thing that
          can truly understand a person, we consistently offer our audience the
          ideal blend of MP3 Songs by their favourite artists and of versatile
          genres.
          <br />
          <br />
          <h4 className="text-danger">
            Play & Download FREE MP3 Songs in all languages
          </h4>
          One of the unique features of Musicana is that it offers users the
          ability to stream music in multiple regional languages, including
          Hindi, Punjabi, Bengali, Tamil, Telugu, and more. Also, users of the
          app can download MP3 songs for offline listening. This online music
          platform provides access to additional features such as offline
          listening, high-quality audio, and exclusive content.
          <br />
          <br />
          <h4 className="text-danger">
            Musicana One Stop Destination for Offline & Online Music!
          </h4>
          Musicana offers users access to a vast library of music, including
          Indian and international tracks across various genres like Bollywood,
          Punjabi, pop, rock, and more. We have made online music streaming
          simple, fun, and all about you! So, what's the wait for, discover and
          listen to millions of songs, playlists, podcasts & download MP3 songs
          on any device including mobile for free exclusively on Musicana. Keep
          Listening Musicana!
          <br />
          <br />
        </div>
        <br />
        <hr className="container" />
        <br />
        <div className="container d-flex justify-content-between">
          <div>
            <b>
              <Link to=""> ABOUT US </Link> | <Link to=""> PRIVACY POLICY </Link> |
              <Link to=""> TERMS OF USE </Link> |<Link to=""> CONTACT US </Link> |
              <Link to=""> HELLOTUNES </Link> 
            </b>
          </div>
          <div>
            <Link to=""> <i className="fa-brands fa-github fs-4 "></i> </Link>
            <Link to=""> <i className="fa-brands fa-linkedin fs-4 "></i> </Link>
            <Link to=""> <i className="fa-brands fa-instagram fs-4 "></i> </Link>
            <Link to=""> <i className="fa-brands fa-youtube fs-4 "></i> </Link>
          </div>
        </div>
        <br />
        <hr className="container" />
        <div className="container">
          <p>
            <small>
              Musicana is your gateway to the best and latest in music, offering
              over 30 million songs across diverse languages including Hindi,
              English, Bollywood, and regional tracks. Stream your favourite
              Hindi songs, Bollywood music, English MP3 songs, radio, podcast
              and regional music online or download songs to enjoy anytime,
              anywhere!
            </small>
          </p>
        </div>
        <br />
        <button
          type="button"
          data-mdb-button-init
          data-mdb-ripple-init
          className="btn btn-danger btn-floating btn-lg"
          id="btn-back-to-top"
        >
          <i className="fa-solid fa-angle-up"></i>
        </button>
      </footer>
    </>
  );
};

export default Footer;