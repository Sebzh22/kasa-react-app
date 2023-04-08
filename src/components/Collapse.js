import '../style/components/Collapse.scss'
import { useState } from 'react'
import arrow from '../assets/Arrow.png'

function Collapse({ title, content }) {

  //Déclaration de la variable "toggle" d'état que l'on va initialiser a false et qui renvoie une fonction setToggle
  const [toggle, setToggle] = useState(false)

  return (
    <div className="collapse">
        {/* Rajout d'un changement d'état au click avec "setToggle" qui prend l'état inverse de "Toggle" */}
      <div onClick={() => setToggle(!toggle)} className="collapse_title">
        <h3>{title}</h3>
        <img
          className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'}
          src={arrow}
          alt="show content"
        />
      </div>
      <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
        {Array.isArray(content)
          ? content.map((item, index) => {
              return <p key={index}>{item}</p>
            })
          : content}
      </div>
    </div>
  )
}

export default Collapse
