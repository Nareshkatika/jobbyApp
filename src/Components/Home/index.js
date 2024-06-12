import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div>
      <Header />
      <div className="arrangeEl23">
        <div className="arrangeEl98">
          <h1 className="headingEl1">Find The Job That Fits Your Life</h1>
          <p className="para1">
            Millions of people are searching for jobs,salary information,company
            reviews.Find the job that fits your abilities and potential.
          </p>
          <Link to="/jobs">
            <button type="button">Find Jobs</button>
          </Link>
        </div>
        <div>
          <img
            alt="searchElPic"
            className="imageEl234"
            src="https://assets.ccbp.in/frontend/react-js/home-lg-bg.png"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
