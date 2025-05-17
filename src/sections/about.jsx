import "../style/about.css";
import aboutimg from "../assets/img/About.png";

const About = () => {
  return (
    <section id="About" className="about-section">
      <div className="about-content">
        <h1 className="about-title">About SIPLUSH</h1>
        <p>
          SIPLUSH is more than just a brand, it’s a lifestyle inspired by the
          heart of California. The founder, who grew up in LA,{" "}
          <strong>brings over 35 years of experience</strong> within the
          drinkware industry to SIPLUSH. With this deep expertise, SIPLUSH
          blends California’s dynamic, diverse culture with a commitment to
          conscious living.
        </p>
        <p>
          Here, conscious living isn’t just a motto—it’s a mindset. It’s about
          embracing
          <strong> control over your choices</strong>, from how you hydrate to
          how you nourish your body. Every sip is an{" "}
          <strong>
            intentional step toward balance, wellness, and vitality
          </strong>
          . With SIPLUSH, you’re not just drinking water—you’re elevating{" "}
          <strong>your daily rituals with purpose and style</strong>.
        </p>
      </div>
      <div className="about-media">
        <img
          src={aboutimg}
          alt="SIPLUSH Lifestyle - A lifestyle brand inspired by California"
          className="about-image"
        />
      </div>
    </section>
  );
};

export default About;
