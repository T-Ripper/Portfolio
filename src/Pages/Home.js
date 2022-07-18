import { Email, Instagram, Twitter } from '@material-ui/icons'
import React from 'react'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Hello, My name is Joseph</h2>
        <div className="prompt">
          <p> A website developer with a passion for learning and creating </p>
          <Twitter />
          <Instagram />
          <Email />
        </div>
      </div>
      <div className="skills">
        <h1> Skills </h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>Html, Css, Javascript,Reactjs, Redux, Wordpress</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span> MongoDB, Firebase, nodeJs, express </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Javascript</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
