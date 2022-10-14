import img1 from "../assets/Rectangle 36.png";
import img2 from "../assets/Rectangle 37.png";
import img3 from "../assets/Rectangle 38.png";

export const Display = () => {
  return (
    <section className="display">
      <h3 className="display__header section__header">Quam diam nascetur.</h3>
      <div className="display__imgWrapper">
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
      </div>
      <p className="header__body display__text">
        Ut sagittis ultrices nibh a. Suspendisse id eget elementum, aenean diam
        urna gravida sed. Egestas magnis commodo amet
      </p>
      <button className="waitlist waitlist--width">Join the waitlist</button>
    </section>
  );
};
