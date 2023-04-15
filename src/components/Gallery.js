import Card from './Card'
import datas from '../datas/logements'
import '../style/components/Gallery.scss'

function Gallery() {
  const galleryCards = datas.map((data) => (
    <Card key={data.id} id={data.id} title={data.title} cover={data.cover} />
  ))

  return <div className="gallery">{galleryCards}</div>
}

export default Gallery
