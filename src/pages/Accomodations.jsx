import '../style/pages/Accomodation.scss'
import { useParams, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Slideshow from '../components/Slideshow'
import datas from '../datas/logements'
import Collapse from '../components/Collapse'
import greyStar from '../assets/greyStar.png'
import redStar from '../assets/redStar.png'

export default function Accomodation() {
  const { id } = useParams()

  const [sliderImages, setSliderImages] = useState([])

  const selectedLogement = datas.find((data) => data.id === id)

  
  useEffect(() => {
    if (selectedLogement) {
      setSliderImages(selectedLogement.pictures)
    }
  }, [selectedLogement])

  if (!selectedLogement) {
    // Redirigez l'utilisateur vers la page Error.js
    setTimeout(() => {
      window.location.reload()
    }, 1000)
    return <Navigate to="/Error" replace={true} />
  }

  const redStars = Math.round(selectedLogement.rating)
  const greyStars = 5 - redStars
  const name = selectedLogement.host.name.split(' ')
  const description = selectedLogement.description
  const equipments = selectedLogement.equipments

  return (
    <section className="container accomodation">
      <Slideshow slider={sliderImages} />
      <div className="accomodation_content">
        <div className="accomodation_content-information">
          <h1 className="accomodation_content-title">
            {selectedLogement.title}
          </h1>
          <h2 className="accomodation_content-location">
            {selectedLogement.location}
          </h2>
          <ul className="tag">
            {selectedLogement.tags.map((tag) => (
              <button className="tag_element" key={tag}>
                {tag}
              </button>
            ))}
          </ul>
        </div>
        <div className="accomodation_content-host">
          <div className="accomodation_content-host-star">
            {Array(redStars)
              .fill(null)
              .map((_, index) => (
                <img
                  key={index}
                  src={redStar}
                  alt="redStar"
                  className="star_icon"
                />
              ))}
            {Array(greyStars)
              .fill(null)
              .map((_, index) => (
                <img
                  key={index + redStars}
                  src={greyStar}
                  alt="greyStar"
                  className="star_icon"
                />
              ))}
          </div>
          <div className="accomodation_content-host-profil">
            <div className="accomodation_content-host-name">
              <p>{name[0]}</p>
              <p>{name[1]}</p>
            </div>
            <img
              src={selectedLogement.host.picture}
              alt="Hôte de ce logement"
              className="accomodation_content-host-picture"
            />
          </div>
        </div>
      </div>
      <div className="accomodation_collapse">
        <div className="accomodation_collapse-item">
          <Collapse title={'Description'} content={description} />
        </div>
        <div className="accomodation_collapse-item">
          <Collapse title={'Équipements'} content={equipments} />
        </div>
      </div>
    </section>
  )
}
