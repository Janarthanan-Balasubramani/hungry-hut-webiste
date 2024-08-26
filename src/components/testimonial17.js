import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="testimonial17-text27 thq-heading-2">
                  Customer Testimonials
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text37 thq-body-small">
                  Check out what our customers have to say about our delicious
                  fried chicken and other mouth-watering items!
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong>
                      {props.author1Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text30 thq-body-large">
                            John Doe
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text36 thq-body-small">
                            Food Critic
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text24 thq-body-small">
                        The Crunchy Masala fried chicken is the best I&apos;ve
                        ever had! The perfect blend of spices and crispiness.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong>
                      {props.author2Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text32 thq-body-large">
                            Jane Smith
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text33 thq-body-small">
                            Food Blogger
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text26 thq-body-small">
                        The Chicken Pops are addictive! I can&apos;t get enough
                        of them. Highly recommended.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong>
                      {props.author3Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text35 thq-body-large">
                            Mike Johnson
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text28 thq-body-small">
                            Regular Customer
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text25 thq-body-small">
                        The Chicken Nuggets are a hit with my kids. They love
                        the taste and always ask for more!
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong>
                      {props.author4Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text31 thq-body-large">
                            Sarah Lee
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text34 thq-body-small">
                            Local Resident
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text29 thq-body-small">
                        I always order the Fried Strips whenever I visit. They
                        never disappoint in flavor and quality.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author1Src:
    'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDYxNzU5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  review1: undefined,
  review3: undefined,
  review2: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1655699392397-d5daaa1c9462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDYxNzU5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Src:
    'https://images.unsplash.com/photo-1517364350421-1d6871888e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDYxNzU5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1516906736502-5d3fedc3019a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDYxNzU5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Position: undefined,
  review4: undefined,
  author1Name: undefined,
  author4Alt: 'Sarah Lee Image Alt Text',
  author4Name: undefined,
  author2Name: undefined,
  author3Alt: 'Mike Johnson Image Alt Text',
  author2Position: undefined,
  author2Alt: 'Jane Smith Image Alt Text',
  author4Position: undefined,
  author1Alt: 'John Doe Image Alt Text',
  author3Name: undefined,
  author1Position: undefined,
  content1: undefined,
}

Testimonial17.propTypes = {
  author1Src: PropTypes.string,
  review1: PropTypes.element,
  review3: PropTypes.element,
  review2: PropTypes.element,
  author3Src: PropTypes.string,
  author2Src: PropTypes.string,
  heading1: PropTypes.element,
  author4Src: PropTypes.string,
  author3Position: PropTypes.element,
  review4: PropTypes.element,
  author1Name: PropTypes.element,
  author4Alt: PropTypes.string,
  author4Name: PropTypes.element,
  author2Name: PropTypes.element,
  author3Alt: PropTypes.string,
  author2Position: PropTypes.element,
  author2Alt: PropTypes.string,
  author4Position: PropTypes.element,
  author1Alt: PropTypes.string,
  author3Name: PropTypes.element,
  author1Position: PropTypes.element,
  content1: PropTypes.element,
}

export default Testimonial17
