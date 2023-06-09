import '../style/components/Card.scss'
import { Link } from 'react-router-dom'


export default function Card({ id, cover, title }) {



  return (
    <Link to={`/accomodation/${id}`} className="gallery_card">
      <img src={cover} alt={title} />
      <h3> {title} </h3>
    </Link>
  )
}
