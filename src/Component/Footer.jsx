import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt
} from 'react-icons/fa'

function Footer() {
  const whatsappMessage =
    'Hello Hotel Desai Wada, I would like to know more about your services and booking.'

  const whatsappUrl = `https://wa.me/919403884460?text=${encodeURIComponent(
    whatsappMessage
  )}`

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Hotel Info */}
        <div className="footer-column footer-about">

          <h2>हॉटेल देसाई वाडा</h2>

          <p>
            निसर्ग, साहस, स्वादिष्ट भोजन आणि
            मनमोकळ्या आनंदाचा अविस्मरणीय अनुभव.
          </p>

          <a
            href="https://maps.app.goo.gl/5S8r6yxuvzSLfufd8?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-location"
          >
            <FaMapMarkerAlt />
            <span>Google Maps वर Location पहा</span>
          </a>

        </div>


        {/* Quick Links */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#about">About Us</a>
            </li>

            <li>
              <a href="#experiences">Experiences</a>
            </li>

            <li>
              <a href="#gallery">Gallery</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>

            <li>
              <a href="#booking">Book Now</a>
            </li>
          </ul>

        </div>


        {/* Contact */}
        <div className="footer-column">

          <h3>Contact Us</h3>

          <a
            href="tel:+919403884460"
            className="footer-contact"
          >
            <FaPhoneAlt />
            <span>+91 94038 84460</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact"
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>

          <a
            href="mailto:rahulbhosale8906@gmail.com"
            className="footer-contact"
          >
            <FaEnvelope />
            <span>rahulbhosale8906@gmail.com</span>
          </a>

        </div>


        {/* Social */}
        <div className="footer-column">

          <h3>Follow Us</h3>

          <p className="footer-social-text">
            आमच्या नवीन updates आणि
            experiences साठी follow करा.
          </p>

          <a
            href="https://www.instagram.com/hotel_desaii_wada/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-btn"
          >
            <FaInstagram />
            Instagram
          </a>

        </div>

      </div>


      {/* Bottom Footer */}
      <div className="footer-bottom">

        <p>
          © 2026 Hotel Desai Wada. All Rights Reserved.
        </p>

        <p>
          Designed with ❤️ using React
        </p>

      </div>

    </footer>
  )
}

export default Footer