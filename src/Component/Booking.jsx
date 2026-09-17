import { useState } from 'react'
import {
  FaPhoneAlt,
  FaWhatsapp,
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
      alert('Check-out date must be after check-in date.')
      return
    }

    const whatsappMessage = `
Hello Hotel Desai Wada,

I would like to make a booking enquiry.

Name: ${formData.name}
Phone: ${formData.phone}
Guests: ${formData.guests}
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut}
Experience: ${formData.experience}

Message:
${formData.message || 'No special requirements.'}
    `

    const whatsappUrl = `https://wa.me/919403884460?text=${encodeURIComponent(
      whatsappMessage
    )}`

    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="booking" id="booking">

      <div className="booking-container">

        {/* Booking Information */}
        <div className="booking-content">

          <p className="section-subtitle">
            BOOK YOUR EXPERIENCE
          </p>

          <h2>
            तुमचा खास अनुभव आजच बुक करा
          </h2>

          <p>
            तुमच्या कुटुंबासोबत, मित्रमंडळींसोबत किंवा
            ग्रुपसोबत हॉटेल देसाई वाडा येथे खास अनुभवासाठी
            चौकशी करा.
          </p>

          <div className="booking-highlights">

            <span>✓ आरामदायी मुक्काम</span>
            <span>✓ स्वादिष्ट भोजन</span>
            <span>✓ साहसी उपक्रम</span>
            <span>✓ निसर्गरम्य वातावरण</span>

          </div>


          {/* Direct Contact */}
          <div className="booking-contact">

            <p className="booking-contact-title">
              थेट संपर्क
            </p>

            <div className="booking-contact-links">

              {/* Call */}
              <a href="tel:+919403884460">
                <FaPhoneAlt />
                <span>Call</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919403884460"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>

              {/* Email */}
              <a href="mailto:rahulbhosale8906@gmail.com">
                <FaEnvelope />
                <span>Email</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/hotel_desaii_wada/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
                <span>Instagram</span>
              </a>

            </div>

          </div>

        </div>


        {/* Booking Form */}
        <form
          className="booking-form"
          onSubmit={handleSubmit}
        >

          {/* Name + Phone */}
          <div className="form-row">

            <div className="form-group">

              <label>
                Your Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label>
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter 10 digit number"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                maxLength="10"
                required
              />

            </div>

          </div>


          {/* Guests + Experience */}
          <div className="form-row">

            <div className="form-group">

              <label>
                Number of Guests
              </label>

              <input
                type="number"
                name="guests"
                placeholder="Number of guests"
                min="1"
                value={formData.guests}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label>
                Experience
              </label>

              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select Experience
                </option>

                <option value="Stay">
                  Stay
                </option>

                <option value="Package">
                  Package
                </option>

                <option value="Adventure">
                  Adventure
                </option>

                <option value="Group Booking">
                  Group Booking
                </option>

              </select>

            </div>

          </div>


          {/* Dates */}
          <div className="form-row">

            <div className="form-group">

              <label>
                Check-in Date
              </label>

              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label>
                Check-out Date
              </label>

              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                required
              />

            </div>

          </div>


          {/* Message */}
          <div className="form-group">

            <label>
              Message
            </label>

            <textarea
              name="message"
              rows="4"
              placeholder="Any special requirements?"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

          </div>


          {/* Submit */}
          <button
            type="submit"
            className="booking-btn"
          >
            <FaWhatsapp />
            Send Booking Request on WhatsApp
          </button>


          <p className="booking-note">
            तुमची booking request WhatsApp वर पाठवली जाईल.
            Booking confirmation साठी Hotel शी संपर्क साधा.
          </p>

        </form>

      </div>

    </section>
  )
}

export default Booking