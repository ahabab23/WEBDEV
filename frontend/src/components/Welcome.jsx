import React from "react";

export default function Welcome() {
  return (
    <div>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-367e59d ot-traditional elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="367e59d"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-19b873b ot-flex-column-vertical"
            data-id="19b873b"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-a50a81d elementor-widget elementor-widget-slider_revolution"
                data-id="a50a81d"
                data-element_type="widget"
                data-widget_type="slider_revolution.default"
              >
                <div className="elementor-widget-container">
                  <div className="wp-block-themepunch-revslider">
                    {/* Revolution Slider */}
                    <rs-fullwidth-wrap
                      id="rev_slider_1_1_forcefullwidth"
                      style={{ marginTop: 0, marginBottom: 0 }}
                    >
                      <rs-module-wrap
                        id="rev_slider_1_1_wrapper"
                        style={{
                          background: "transparent",
                          padding: 0,
                          margin: "0 auto",
                          height: 809,
                          width: 1594,
                          position: "absolute",
                          overflow: "visible",
                          left: -197,
                          transform: "translate(0, 0)",
                          top: 0,
                        }}
                      >
                        {/* Slider Content */}
                        <rs-module
                          id="rev_slider_1_1"
                          style={{ height: 809, width: 1594, maxHeight: 809 }}
                          data-version="6.6.11"
                        >
                          {/* Slides */}
                          {[1, 2, 3].map((slideNum) => (
                            <rs-slide
                              key={slideNum}
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                zIndex: slideNum === 2 ? 20 : 10,
                                opacity: slideNum === 2 ? 1 : 0,
                              }}
                              data-key={`rs-${slideNum}`}
                            >
                              {/* Slide Background */}
                              <rs-sbg-px>
                                <rs-sbg-wrap
                                  data-owidth={1920}
                                  data-oheight={809}
                                >
                                  <rs-sbg
                                    data-lazyload={`//kangarosolutions.com/wp-content/uploads/2023/03/Slide${
                                      slideNum === 2 ? "11" : "4"
                                    }.jpg`}
                                    style={{ width: "100%", height: "100%" }}
                                  />
                                </rs-sbg-wrap>
                              </rs-sbg-px>

                              {/* Slide Content */}
                              <rs-layer-wrap
                                style={{
                                  position: "absolute",
                                  left: 337.5,
                                  top: 240,
                                  zIndex: 9,
                                }}
                              >
                                <rs-layer
                                  className="rs_splitted_lines"
                                  data-type="text"
                                  style={{
                                    fontFamily: "Montserrat",
                                    color: "#fff",
                                    fontSize: 72,
                                    fontWeight: 900,
                                    lineHeight: "80px",
                                  }}
                                >
                                  {slideNum === 1 && "FROM IDEA TO PRODUCT"}
                                  {slideNum === 2 && "END-TO-END DEVELOPMENT"}
                                  {slideNum === 3 && "SOFTWARE IT OUTSOURCING"}
                                </rs-layer>
                              </rs-layer-wrap>

                              {/* Additional layers... */}
                            </rs-slide>
                          ))}

                          {/* Navigation Arrows */}
                          <rs-arrow
                            className="tp-leftarrow tparrows nav-home-1"
                            style={{
                              opacity: 1,
                              transform: "translate(197px, -100px)",
                            }}
                          />
                          <rs-arrow
                            className="tp-rightarrow tparrows nav-home-1"
                            style={{
                              opacity: 1,
                              transform: "translate(297px, -100px)",
                            }}
                          />

                          {/* Pagination */}
                          <rs-bullets
                            className="tp-bullets bullet-home-1"
                            style={{ opacity: 1, width: 74.875, height: 18 }}
                          >
                            {[1, 2, 3].map((bulletNum) => (
                              <rs-bullet
                                key={bulletNum}
                                className={`tp-bullet ${
                                  bulletNum === 2 ? "selected" : ""
                                }`}
                              />
                            ))}
                          </rs-bullets>
                        </rs-module>
                      </rs-module-wrap>
                    </rs-fullwidth-wrap>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
