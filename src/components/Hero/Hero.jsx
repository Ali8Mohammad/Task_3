import Carousel from "../Carousel/Carousel";
import { slideData } from "../../data/slideData";
import "./Hero.css";

export default function Hero() {
  const heroContent = {
    location: "Tronto,",
    locationSpan: "Canada",
    headline: "HURRY! GET THE BEST VILLA FOR YOU"
  };

  return (
    <section className="hero" id="home">
      <Carousel data={slideData} />
      <div className="hero-title">
        <p className="hero-p">
          <span>{heroContent.location}</span><span>{heroContent.locationSpan}</span>
        </p>
        <h1 className="hero-h1">
          <span className="typing">{heroContent.headline}</span>
        </h1>
      </div>
    </section>
  );
}
