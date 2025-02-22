import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div>
    <Header />

    <div className="not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
        alt="not found"
        className="not-found-img"
      />
    </div>
  </div>
)

export default NotFound
