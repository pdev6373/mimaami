import logo from "../assets/image 1.svg";
import heroImage from "../assets/image 3.svg";

export const Hero = () => {
  return (
    <section className="hero">
      <img className="hero__Logo" src={logo} alt="logo" />

      <div className="hero__main">
        <div>
          <h1 className="hero__header section__header">
            Skincare from the heart of African mothers
          </h1>
          <p className="hero__text">
            Tristique nulla tincidunt a morbi. Sem sed platea facilisi facilisi
            magna. Etiam ut diam facilisi. Curabitur morbi hac magna erat
            convallis. Sed.
          </p>
          <form className="hero__form">
            <input
              className="hero__email"
              type="text"
              placeholder="Your email address"
            />
            <button className="waitlist" type="submit">
              Join the waitlist
            </button>
          </form>
        </div>

        <img className="hero__image" src={heroImage} />
      </div>
    </section>
  );
};
