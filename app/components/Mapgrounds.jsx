var React = require('react');
var Appheader = require('Appheader');
var EveDescription = require('EveDescription');
import {Image} from 'react-bootstrap';
var {Link} = require('react-router');
var Footer = require('Footer');

var Mapgrounds = () => {
    return (
        <div>
          <section className="appsSplash">
              <div className="container">
                  <div className="row">
                      <div className="col-sm-12">
                        <h1>Mapgrounds</h1>
                        <h2>Create beautiful wallpapers for your iPhone from the places that mean the most</h2>
                          <p className="topMarginSmall"><strong>Role:</strong> Design & Development</p>
                          <p><strong>Platform:</strong> iOS</p>
                          <p><strong>Language:</strong> Objective-C</p>
                          <p className="topMarginSmall"><strong>Link:</strong> <a href="https://itunes.apple.com/gb/app/eve-alarm-time-to-sleep/id633081958?mt=8">App Store</a></p>
                      </div>
                  </div>
              </div>
          </section>
            <section className="topBottomMargins">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                          <div className="appDescriptionBody">
                            <h2>Idea</h2>
                            <p>I came up with the idea for Mapgrounds after playing around with creating physical art from maps. I had produced this piece of art as a gift for my girlfriend which featured 9 places that had sentimental value to us. Everyone has places that are meaningful to them, so I wanted to help more people create similar artwork.</p>
                      </div>
                        </div>
                        <div className="col-sm-6">
                        </div>
                    </div>
                </div>
            </section>
            <section className="topBottomLargeMargins">
                <div className="container-fluid">
                    <div className="appDescriptionBody">
                        <div className="col-sm-8"><Image src={require('../images/eve_concept.jpg')} className="width100"/>
                        </div>
                        <div className="col-sm-4">
                          <h2>Design Concept</h2>
                            <p>I wanted the app to always be giving a preview of how the artwork would look. Rather than sending the user through many settings screens, the main interface acts as a preivew and the user can tap on an element to edit it. The app uses an embedded Apple Maps view to provide the map design.</p>
                      </div>
                    </div>
                </div>
            </section>
            <section className="topBottomLargeMargins colourBack">
                <div className="container">
                    <div className="appDescriptionBody">
                          <div className="col-sm-12">
                            <h2>UI & Graphic Design</h2>
                              <p>I used a soft, friendly tone of voice for the app as I was aiming at a female audience, there are simple bold buttons at the bottom of the interface to edit, share and save the design. </p>
                          </div>
                  </div>
                </div>
                <div className="container-fluid topMargin">
                      <div className="col-sm-6"><Image src={require('../images/eve_interface1.jpg')} className="width100"/></div>
                        <div className="col-sm-6"><Image src={require('../images/eve_interface2.jpg')} className="width100"/></div>
                </div>
            </section>
            <section className="topBottomLargeMargins">
                <div className="container">
                    <div className="appDescriptionBody">
                        <div className="col-sm-4">
                          <h2>Reception</h2>
                            <p>Eve Alarm was featured on the App Store "What's Hot" utilities section for over 6 months and download over 10,000 times within the first 6 weeks of release. It currently has a 5 star rating on the App Store.</p>
                        </div>
                        <div className="col-sm-8"><Image src={require('../images/eve_reception.jpg')} className="width1500"/></div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

module.exports = Mapgrounds;
