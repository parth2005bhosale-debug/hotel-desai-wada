function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage:
          "url('https://media.assettype.com/outlooktraveller/2025-11-26/pn7n2wbp/sula-wada-the-legacy-8b6a6e.jpg?w=1200&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0')"
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">

        <p className="hero-small">
          निसर्गाच्या सान्निध्यात तुमचे स्वागत
        </p>

        <h1>
          हॉटेल देसाई वाडा
        </h1>

        <p className="hero-text">
          निसर्ग, साहस, स्वादिष्ट भोजन आणि मनमोकळ्या
          आनंदाचा अविस्मरणीय अनुभव.
        </p>

        <div className="hero-buttons">

          <a
            href="#booking"
            className="hero-btn"
          >
            Book Your Experience
          </a>

          <a
            href="#experiences"
            className="hero-btn outline"
          >
            Explore More
          </a>

        </div>

      </div>
    </section>
  )
}

export default Hero