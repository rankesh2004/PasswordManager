import './index.css'

const PasswordItem = props => {
  const {webDetails, isActive, deleteWebsite} = props
  const {website, username, password, id} = webDetails
  console.log(isActive)

  const onDelete = () => {
    deleteWebsite(id)
  }

  return (
    <li className="Web-Details-container">
      <div className="web-text-container">
        <p className="web-first-letter orange">{website[0].toUpperCase()}</p>
        <p className="text-container">
          <span className="text">{website}</span>
          <span className="text">{username}</span>
          {isActive ? (
            <span className="text">{password}</span>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="password"
              className="star"
            />
          )}
        </p>
      </div>
      <button type="button" className="delete-btn" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}
export default PasswordItem
