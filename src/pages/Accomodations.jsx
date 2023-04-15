import '../style/pages/Accomodation.scss'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Slideshow from '../components/Slideshow'
import datas from '../datas/logements'
import Collapse from '../components/Collapse'
import greyStar from '../assets/greyStar.png'
import redStar from '../assets/redStar.png'



function Accomodation() {
  const { id } = useParams();
  const logement = datas.find((logement) => logement.id === id);
  const [sliderImages, setSliderImages] = useState([]);

  useEffect(() => {
		const selectedLogement = datas.filter(data => data.id === id);
		setSliderImages(selectedLogement[0].pictures);
	}, [id]);

  const redStars = Math.round(logement.rating)
  const greyStars = 5 - redStars
  const name = logement.host.name.split(' ')
  const description = logement.description;
  const equipments = logement.equipments;

  return (
      <section className="container accomodation">
        <Slideshow slider={sliderImages}/>
        <div className="accomodation_content">
          <div className="accomodation_content-information">
            <h1 className="accomodation_content-title">{logement.title}</h1>
            <h2 className="accomodation_content-location">
              {logement.location}
            </h2>
            <ul className="tag">
              {logement.tags.map((tag) => (
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
                src={logement.host.picture}
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

export default Accomodation
