import { useState } from 'react'
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram
} from 'react-icons/fa'

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '',
    checkIn: '',
    checkOut: '',
    experience: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.checkOut <= formData.checkIn) {
      alert('Check-out date must be after Check-in date.')
      return
    }

    const whatsappMessage = `
Hello Hotel Desai Wada,

I would like to make a booking request.

Name: ${formData.name}
Phone: ${formData.phone}
Guests: ${formData.guests}
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut}
Experience: ${formData.experience}
Message: ${formData.message}
    `

    const whatsappURL = `https://wa.me/919403884460?text=${encodeURIComponent(
      whatsappMessage
    )}`

    window.open(whatsappURL, '_blank')
  }

  return (
    <section className="booking" id="booking">

      <div className="section-heading">
        <p className="section-subtitle">BOOK YOUR EXPERIENCE</p>

        <h2>तुमचा खास अनुभव आजच बुक करा</h2>

        <p>
          तुमची माहिती भरून Booking Request पाठवा.
          आमची टीम तुमच्याशी लवकरच संपर्क करेल.
        </p>

        <div className="booking-highlights">

          <span>✓ आरामदायी मुक्काम</span>

          <span>✓ स्वादिष्ट भोजन</span>

          <span>✓ साहसी उपक्रम</span>

          <span>✓ निसर्गरम्य वातावरण</span>

        </div>
      </div>

      <div className="booking-container">

        <form className="booking-form" onSubmit={handleSubmit}>

          <div className="form-row">

            <div className="form-group">
              <label>नाव</label>

              <input
                type="text"
                name="name"
                placeholder="तुमचे नाव"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>मोबाईल नंबर</label>

              <input
                type="tel"
                name="phone"
                placeholder="मोबाईल नंबर"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="form-row">

            <div className="form-group">
              <label>एकूण पाहुणे</label>

              <input
                type="number"
                name="guests"
                placeholder="उदा. 4"
                min="1"
                value={formData.guests}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Experience</label>

              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
              >
                <option value="" hidden>
                  Select Experience
                </option>

                <option value="Stay & Boating">
                  Stay & Boating
                </option>

                <option value="Vasota Trekking">
                  Vasota Trekking
                </option>
              </select>

            </div>

          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Check-in</label>

              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Check-out</label>

              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="form-group">
            <label>अधिक माहिती</label>

            <textarea
              name="message"
              rows="5"
              placeholder="तुमच्या आवश्यकतेबद्दल माहिती द्या..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="booking-btn"
          >
            <FaWhatsapp />
            Send Booking Request
          </button>

        </form>

        <div className="booking-contact">

          <h3>थेट संपर्क करा</h3>

          <p>
            Booking किंवा अधिक माहितीसाठी
            खालीलपैकी कोणत्याही माध्यमातून संपर्क करा.
          </p>

          <div className="contact-buttons">

            <a
              href="tel:+919403884460"
              className="contact-btn"
            >
              <FaPhoneAlt />
              Call Us
            </a>

            <a
              href="https://wa.me/919403884460"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <a
              href="mailto:rahulbhosale8906@gmail.com"
              className="contact-btn"
            >
              <FaEnvelope />
              Email
            </a>

            <a
              href="https://www.instagram.com/hotel_desaii_wada/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              <FaInstagram />
              Instagram
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Booking