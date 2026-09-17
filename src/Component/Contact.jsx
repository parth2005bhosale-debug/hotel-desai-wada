import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram
} from 'react-icons/fa'

function Contact() {
  const phoneNumber = '919403884460'

  // WhatsApp
  const whatsappMessage =
    'Hello Hotel Desai Wada, I would like to know more about your services and booking.'

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`

  // Email
  const emailUrl =
    'mailto:rahulbhosale8906@gmail.com?subject=Booking%20Enquiry%20-%20Hotel%20Desai%20Wada&body=Hello%20Hotel%20Desai%20Wada%2C%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20booking%20and%20services.%0A%0AThank%20you.'

  // Instagram
  const instagramUrl =
    'https://www.instagram.com/hotel_desaii_wada/'

  // Google Maps
  const googleMapsUrl =
    'https://maps.app.goo.gl/5S8r6yxuvzSLfufd8?g_st=aw'

  return (
    <section className="contact" id="contact">

      {/* Section Heading */}
      <div className="section-heading">

        <p className="section-subtitle">
          CONTACT US
        </p>

        <h2>
          आमच्याशी संपर्क साधा
        </h2>

        <p>
          बुकिंग, पॅकेजेस किंवा इतर माहितीसाठी
          आमच्याशी थेट संपर्क साधा.
        </p>

      </div>


      <div className="contact-container">

        {/* Contact Information */}
        <div className="contact-info">

          {/* PHONE */}
          <a
            href="tel:+919403884460"
            className="contact-card"
          >
            <div className="contact-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <h3>फोन</h3>
              <p>+91 94038 84460</p>
              <small>Call करण्यासाठी येथे क्लिक करा</small>
            </div>
          </a>


          {/* WHATSAPP */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              <FaWhatsapp />
            </div>

            <div>
              <h3>WhatsApp</h3>
              <p>+91 94038 84460</p>
              <small>WhatsApp वर मेसेज करा</small>
            </div>
          </a>


          {/* EMAIL */}
          <a
            href={emailUrl}
            className="contact-card"
          >
            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div>
              <h3>Email</h3>
              <p>rahulbhosale8906@gmail.com</p>
              <small>Email करण्यासाठी येथे क्लिक करा</small>
            </div>
          </a>


          {/* INSTAGRAM */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              <FaInstagram />
            </div>

            <div>
              <h3>Instagram</h3>
              <p>@hotel_desaii_wada</p>
              <small>Instagram वर DM करा</small>
            </div>
          </a>


          {/* GOOGLE MAPS */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3>पत्ता</h3>
              <p>Hotel Desai Wada</p>
              <small>Google Maps वर Location पहा</small>
            </div>
          </a>

        </div>


        {/* WHATSAPP ACTION */}
        <div className="contact-action">

          <h3>
            बुकिंग किंवा चौकशीसाठी
            WhatsApp वर संपर्क करा
          </h3>

          <p>
            तुमची चौकशी थेट WhatsApp वर पाठवा
            आणि Hotel Desai Wada टीमशी संपर्क साधा.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <FaWhatsapp />
            WhatsApp वर संपर्क करा
          </a>

        </div>

      </div>

    </section>
  )
}

export default Contact