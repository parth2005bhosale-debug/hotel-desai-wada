function Gallery() {
  return (
    <section className="gallery" id="gallery">

      <div className="section-heading">
        <p className="section-subtitle">
          GALLERY
        </p>

        <h2>
          आमच्या सुंदर आठवणींची झलक
        </h2>

        <p>
          हॉटेल, निसर्ग, साहसी उपक्रम आणि स्वादिष्ट
          भोजनाच्या काही खास क्षणांची झलक.
        </p>
      </div>

      <div className="gallery-grid">

        {/* Hotel */}
        <div className="gallery-item">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85"
            alt="Hotel"
          />
        </div>

        {/* Nature */}
        <div className="gallery-item">
          <img
            src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85"
            alt="Nature"
          />
        </div>

        {/* Adventure */}
        <div className="gallery-item">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85"
            alt="Adventure"
          />
        </div>

        {/* Food */}
        <div className="gallery-item">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=85"
            alt="Food"
          />
        </div>

        {/* Stay */}
        <div className="gallery-item">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=85"
            alt="Stay"
          />
        </div>

        {/* Memories */}
        <div className="gallery-item">
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=85"
            alt="Customer Memories"
          />
        </div>

      </div>

    </section>
  )
}

export default Gallery