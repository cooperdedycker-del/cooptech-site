function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1>Welcome to CoopTech</h1>
        <p className="hero-subtitle">
          Have a tech question? Need something installed? Give us a call, we do
          it all!
        </p>
        <div className="hero-actions">
          <a href="tel:19074067901" className="btn btn-primary">
            Call for IT Help · 907-406-7901
          </a>
        </div>
        <p className="hero-tagline">
          Local, reliable IT support in Alaska for homes, small businesses, and
          everything in between.
        </p>
      </div>
    </section>
  );
}

export default Hero;
