import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features25-container2 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 0 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2>
                {props.feature1Title ?? (
                  <Fragment>
                    <h2 className="features25-text6 thq-heading-2">
                      Crunchy Masala / Hot &amp; Spicy
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features25-text2 thq-body-small">
                      Indulge in our signature Crunchy Masala chicken, perfectly
                      seasoned and fried to crispy perfection. For those who
                      love a bit of heat, try our Hot &amp; Spicy variant for a
                      fiery kick!
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 1 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2>
                {props.feature2Title ?? (
                  <Fragment>
                    <h2 className="features25-text4 thq-heading-2">
                      Chicken Pops, Popcorn, Nuggets, Fingers, Sausage, Fried
                      Strips
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features25-text1 thq-body-small">
                      Enjoy a variety of chicken snacks including Chicken Pops,
                      Popcorn, Nuggets, Fingers, Sausage, and Fried Strips. Each
                      bite is packed with flavor and satisfaction.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal3"
          >
            <div className="features25-divider-container3">
              {activeTab === 2 && <div className="features25-container5"></div>}
            </div>
            <div className="features25-content3">
              <h2>
                {props.feature3Title ?? (
                  <Fragment>
                    <h2 className="features25-text3 thq-heading-2">Burger</h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features25-text5 thq-body-small">
                      Sink your teeth into our juicy and flavorful chicken
                      burger. Made with fresh ingredients and served with your
                      choice of toppings, it&apos;s a meal that will leave you
                      craving for more!
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature2Description: undefined,
  feature1Description: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1615322712569-8eb81aa62f80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDYxNzU5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgAlt: 'Crunchy Masala / Hot & Spicy Chicken Image',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1670819917011-0f0db9454d93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDYxNzU5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgAlt: 'Chicken Burger Image',
  feature3Title: undefined,
  feature2ImgAlt: 'Assorted Chicken Snacks Image',
  feature2Title: undefined,
  feature3Description: undefined,
  feature1Title: undefined,
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDYxNzU5NXw&ixlib=rb-4.0.3&q=80&w=1080',
}

Features25.propTypes = {
  feature2Description: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
}

export default Features25
