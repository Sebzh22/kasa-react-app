import '../style/components/Slideshow.scss'
import { useState } from 'react'
import arrow from '../assets/Arrow.png'

function Slideshow({ slider }) {
    
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex(currentIndex + 1)
    if (currentIndex === slider.length - 1) setCurrentIndex(0)
  }

  const prevSlide = () => {
    setCurrentIndex(currentIndex - 1)
    if (currentIndex === 0) setCurrentIndex(slider.lenght - 1)
  }

  return (
    <section className="slideshow" style={{backgroundImage : `url(${slider[currentIndex]})`}}>
      {slider.length > 1 && (
        <>
          <img
            className="slideshow_arrow slideshow_arrow-right"
            src={arrow}
            alt="next slide"
            onClick={nextSlide}
          />
          <img
            className="slideshow_arrow slideshow_arrow-left"
            src={arrow}
            alt="previous slide"
            onClick={prevSlide}
          />
          <p className="slideshow_number">
            {currentIndex + 1} / {slider.length}
          </p>
        </>
      )}
    </section>
  )
}

export default Slideshow
