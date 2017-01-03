var React = require('react');
var Appheader = require('Appheader');
import {Image} from 'react-bootstrap';
var Footer = require('Footer');

var EveningStandard = () => {
    return (
      <div>
        <section className="appsSplash">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                      <h1>London Evening Standard</h1>
                      <h2>The Progress 1000 is an annual celebration of the most influential people in the capital</h2>
                        <p className="topMarginSmall"><strong>Project:</strong> The Progress 1000 Event App</p>
                        <p><strong>Role:</strong> Design & Development</p>
                        <p><strong>Platforms:</strong> iPhone, iPad</p>
                        <p><strong>Language:</strong> Objective-C</p>
                        <p className="topMarginSmall"><strong>Link:</strong> <a href="https://itunes.apple.com/gb/app/progress-1000-by-london-evening/id931391607?mt=8">App Store</a></p>
                    </div>
                </div>
            </div>
        </section>
        <section className="topBottomMargins">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                      <div className="appDescriptionBody">
                        <h2>Background</h2>
                        <blockquote>There are so many inspiring, dedicated and heroic people on the Progress 1000 list. From giants of industry and successful entrepreneurs, to sporting heroes and Olympic medalists.</blockquote>
                        <p>The Progress 1000 is an annual event that is organised and curated by London Evening Standard. It celebrates the most influential people in the capital from all walks of life. I created a bespoke platform that has been used for iPhone & iPad apps over the past 3 years, which features all 1000 entries in the list.</p>
                  </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="topBottomLargeMargins">
          <div className="container">
                <div className="appDescriptionBody">
                    <div className="col-sm-4">
                      <h2>Software Design</h2>
                        <p>Because of the large amount of entries that are displayed in the app, I created a universal build which uses the same view controllers and database for both the iPhone & iPad apps.</p>
                </div>
                  <div className="col-sm-8"><Image src={require('../images/independentsubs_interface.jpg')} className="width100"/>
                  </div>
                </div>
              </div>
        </section>
        <section className="topBottomLargeMargins">
          <div className="container">
                <div className="appDescriptionBody">
                  <div className="col-sm-8"><Image src={require('../images/independentsubs_devices.jpg')} className="width100"/>
                  </div>
                  <div className="col-sm-4">
                    <h2>UI Design</h2>
                      <p>A clear and simple to understand card is used to communicate the subscription options available, with anchor links in the lower sections that return the user to these options.</p>
              </div>
                </div>
              </div>
        </section>
        <Footer/>
        </div>
          );
};

module.exports = EveningStandard;
