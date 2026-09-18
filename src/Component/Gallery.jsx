import Wada1 from '../assets/Wada1.jpg'
import Wada from '../assets/Wada.jpeg'
import BoatRide from '../assets/Boat Ride.jpg'
import FamilyBoating from '../assets/family Boating.jpg'
import Family from '../assets/Family.jpg'
import Fish from '../assets/Fish.jpg'
import GroupTea from '../assets/Group Tea.jpg'
import NonVegThali from '../assets/Non-Veg Thali.jpg'
import Room from '../assets/Room.jpg'
import Starter from '../assets/Starter.jpg'
import VegThali from '../assets/Veg Thali 1.jpg'
import BangdaFry from '../assets/Bangda Fry.jpg'

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
            src={Wada1}
            alt="Hotel Desai Wada"
          />
        </div>

        {/* Tea */}
        <div className="gallery-item">
          <img
            src={GroupTea}
            alt="Group Tea"
          />
        </div>

        {/* Boating */}
        <div className="gallery-item">
          <img
            src={BoatRide}
            alt="Boat Ride"
          />
        </div>

        {/* Stay */}
        <div className="gallery-item">
          <img
            src={Room}
            alt="Hotel Room"
          />
        </div>

        {/* Food */}
        <div className="gallery-item">
          <img
            src={BangdaFry}
            alt="Bangda Fry"
          />
        </div>

        {/* Memories */}
        <div className="gallery-item">
          <img
            src={Family}
            alt="Family Memories"
          />
        </div>

        {/* Wada */}
        <div className="gallery-item">
          <img
            src={Wada}
            alt="Traditional Wada"
          />
        </div>

        {/* Fish */}
        <div className="gallery-item">
          <img
            src={Fish}
            alt="Fish Food"
          />
        </div>

        {/* Family Boating */}
        <div className="gallery-item">
          <img
            src={FamilyBoating}
            alt="Family Boating"
          />
        </div>

        {/* Starter */}
        <div className="gallery-item">
          <img
            src={Starter}
            alt="Food Starter"
          />
        </div>

        {/* Non-Veg Food */}
        <div className="gallery-item">
          <img
            src={NonVegThali}
            alt="Non-Veg Thali"
          />
        </div>

        {/* Veg Food */}
        <div className="gallery-item">
          <img
            src={VegThali}
            alt="Veg Thali"
          />
        </div>

      </div>

    </section>
  )
}

export default Gallery