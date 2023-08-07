import React from 'react'
import './skills.css'

const Dev = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Full Stack Developer</h3>
    <div className="skills__box">
      <div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Html</h3>
              <span className="skills__level">Expert</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Css</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Javascript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">ReactJs</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dev