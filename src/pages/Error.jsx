import "../style/pages/Error.scss"

function Error() {
  return (
    <div className="error container">
      <h1 className="error-title">404</h1>
      <h2 className="error-subtitle">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <a href="http://localhost:3000" className="error-linkToHome">
        Retourner sur la page d'accueil
      </a>
    </div>
  )
}

export default Error
