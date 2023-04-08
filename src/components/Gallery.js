import Card from './Card'
import datas from '../datas/logements'
import '../style/components/Gallery.scss'

const galleryCards = datas.map((data) => {
  return (
    <Card key={data.id} id={data.id} title={data.title} cover={data.cover} />
  )
})

function Gallery() {
  return (
    <div className='gallery'>
    { galleryCards }
    </div>
  )
}

export default Gallery
