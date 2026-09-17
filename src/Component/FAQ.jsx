import { useState } from 'react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'हॉटेलमध्ये Booking कशी करायची?',
      answer:
        'Website वरील Booking Form भरून तुमची माहिती submit करा. त्यानंतर WhatsApp द्वारे booking request पाठवता येईल.'
    },
    {
      question: 'Group Booking करता येते का?',
      answer:
        'हो, Family, Friends आणि मोठ्या Groups साठी Booking करता येते. Group Booking साठी विशेष सवलतीसाठी आमच्याशी संपर्क करा.'
    },
    {
      question: 'हॉटेलमध्ये Food उपलब्ध आहे का?',
      answer:
        'हो, आमच्याकडे स्वादिष्ट Veg आणि Non-Veg Food उपलब्ध आहे.'
    },
    {
      question: 'Rooms उपलब्ध आहेत का?',
      answer:
        'हो, आरामदायी मुक्कामासाठी Rooms उपलब्ध आहेत. Availability आणि Booking साठी WhatsApp वर संपर्क करा.'
    },
    {
      question: 'Vasota Trekking करता येते का?',
      answer:
        'हो, Vasota Trekking आणि इतर Adventure Experiences साठी आमच्याशी संपर्क करू शकता.'
    },
    {
      question: 'Hotel पर्यंत कसे पोहोचायचे?',
      answer:
        'Website वरील Contact Section मध्ये Google Maps Location दिले आहे. त्यावर क्लिक करून थेट Directions मिळवता येतील.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq" id="faq">

      <div className="section-heading">
        <p className="section-subtitle">FAQ</p>

        <h2>तुमच्या प्रश्नांची उत्तरे, एका ठिकाणी</h2>

        <p>
          Booking, Rooms, Food आणि आमच्या Experiences विषयी
          आवश्यक माहिती येथे सहज मिळवा.
        </p>
      </div>

      <div className="faq-container">

        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${
              openIndex === index ? 'active' : ''
            }`}
            key={index}
          >

            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>

              <span className="faq-icon">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>

            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}

          </div>
        ))}

      </div>

    </section>
  )
}

export default FAQ