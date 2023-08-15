import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    webList: [],
    isActive: false,
    searchInput: '',
  }

  websiteLink = event => {
    this.setState({website: event.target.value})
  }

  onUsername = event => {
    this.setState({username: event.target.value})
  }

  onPassword = event => {
    this.setState({password: event.target.value})
  }

  onAddPassword = () => {
    const {website, username, password} = this.state
    const newWebList = {
      id: uuidV4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      webList: [...prevState.webList, newWebList],
      website: '',
      username: '',
      password: '',
    }))
  }

  onCheckbox = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  addOnInputs = () => {
    const {website, username, password} = this.state
    return (
      <div className="inputs-container">
        <div className="flex-end">
          <div className="flex-start">
            <h1 className="heading">Add New Password</h1>
            <div className="input">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="webLink"
                className="search-logo"
              />
              <input
                type="text"
                placeholder="Enter Website"
                onChange={this.websiteLink}
                className="search-input"
                value={website}
              />
            </div>
            <div className="input">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="webLink"
                className="search-logo"
              />
              <input
                type="text"
                placeholder="Enter Username"
                onChange={this.onUsername}
                className="search-input"
                value={username}
              />
            </div>
            <div className="input">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="webLink"
                className="search-logo"
              />
              <input
                type="password"
                placeholder="Enter Password"
                onChange={this.onPassword}
                className="search-input"
                value={password}
              />
            </div>
          </div>
          <button type="button" className="button" onClick={this.onAddPassword}>
            Add
          </button>
        </div>
      </div>
    )
  }

  deleteWebsite = id => {
    const {webList} = this.state
    const filterWebList = webList.filter(eachItem => eachItem.id !== id)
    this.setState({webList: filterWebList})
  }

  onSearchPassword = event => {
    this.setState({searchInput: event.target.value})
  }

  catchPassword = () => {
    const {webList, isActive, searchInput} = this.state
    const filterSearchInput = webList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="password-container">
        <div className="pass-search-container">
          <h1 className="pass-heading">
            Your Passwords <p className="pass-count">{webList.length}</p>
          </h1>
          <div className="search-pass">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="search-logo"
            />
            <input
              type="search"
              placeholder="Search"
              onChange={this.onSearchPassword}
              className="pass-search"
            />
          </div>
        </div>
        <hr />
        <div className="checkbox-container">
          <input type="checkbox" id="checkbox" onChange={this.onCheckbox} />
          <label htmlFor="checkbox">Show Passwords</label>
        </div>

        {filterSearchInput.length !== 0 ? (
          <ul>
            {filterSearchInput.map(eachItem => (
              <PasswordItem
                webDetails={eachItem}
                isActive={isActive}
                deleteWebsite={this.deleteWebsite}
                key={eachItem.id}
              />
            ))}
          </ul>
        ) : (
          <p className="no-pass-container non-active">
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no-password"
              className="no-pass-img"
            />
            <p className="no-pass-text">No Passwords</p>
          </p>
        )}
      </div>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="logo"
            className="pass-mana-logo"
          />
        </div>
        <div className="pass-container">
          <div className="pass-add-container">
            {this.addOnInputs()}
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="pass-manager"
                className="pass-manager"
              />
            </div>
          </div>
          <div className="pass-get-container">{this.catchPassword()}</div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
