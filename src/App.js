import './App.css';

import star from "./assets/star.png"
import sticker from "./assets/waitlist.png"
import icon from "./assets/waitlist_star.png"
import { Waitlist } from 'waitlistapi'

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="header__title">
          <img src={star} className="header__star-left" />
          <h1 className="title fredoka-one">
            Start your merchandise journey<br />
            <span className="fredoka-one title__yellow">with murch</span>.
          </h1>
          <img src={star} className="header__star-right" />
        </div>
        <p className="header__caption">We’ll hop you right onboard once ready, referring to your fellow creators will bump you further up the list!</p>
      </div>
      <div className="waitlist__container">
        <div className="waitlist__wrapper">
          <img src={sticker} className="waitlist__image-left" />
          <div className="waitlist__card">
            <div className="waitlist__content">
              <img src={icon} />
              <h1 className="fredoka-one content__title">Join the waitlist</h1>
              <p className="open-sans content__body">Get exclusive access to...</p>
            </div>
            <Waitlist api_key="EAYIW2" waitlist_link="https://waitlist.murch.shop/" />
          </div>
          <img src={sticker} className="waitlist__image-right" />
        </div>
      </div>
    </div>
  );
}

export default App;
