function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        {/* About Image */}
        <div className="about-image">
          <img
            src="https://gos3.ibcdn.com/c3575ba6b46b11e9a9390242ac110002.jpg"
            alt="Traditional Maharashtrian Wada"
          />
        </div>

        {/* About Content */}
        <div className="about-content">

          <p className="section-subtitle">
            ABOUT US
          </p>

          <h2>
            निसर्ग, साहस आणि आपुलकीचा सुंदर अनुभव
          </h2>

          <p>
            हॉटेल देसाई वाडा येथे निसर्गरम्य वातावरणात
            आरामदायी मुक्काम, स्वादिष्ट भोजन आणि विविध
            मनोरंजक उपक्रमांचा आनंद घेता येतो.
          </p>

          <p>
            कुटुंब, मित्रमंडळी आणि ग्रुपसोबत अविस्मरणीय
            आठवणी निर्माण करण्यासाठी हे एक सुंदर ठिकाण आहे.
            साहसी उपक्रमांपासून निसर्गाच्या शांत अनुभवापर्यंत,
            प्रत्येकासाठी काहीतरी खास येथे अनुभवता येते.
          </p>

          <a
            href="#experiences"
            className="about-btn"
          >
            Explore Experiences
          </a>

        </div>

      </div>

    </section>
  )
}

export default About