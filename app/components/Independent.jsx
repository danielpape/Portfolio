var React = require('react');
import {Image} from 'react-bootstrap';

var Independent = () => {
    return (
      <div>
        <section className="appsSplash">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                      <h1>The Independent</h1>
                      <h2>The first UK daily national newspaper to go digital</h2>
                        <p className="topMarginSmall"><strong>Project:</strong> Independent Daily Edition subscription page</p>
                        <p><strong>Role:</strong> Product designer</p>
                        <p><strong>Platforms:</strong> Website, iOS app, Android app</p>
                        <p className="topMarginSmall"><strong>Link:</strong> <a href="https://subscriptions.independent.co.uk">subscriptions.independent.co.uk</a></p>
                    </div>
                </div>
            </div>
        </section>
        <section className="topBottomMargins">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                      <div className="appDescriptionBody">
                        <h2>Idea</h2>
                        <blockquote>The Independent Daily Edition is not an app, it is a collection of topical knowledge from trusted sources.</blockquote>
                        <p>This was the idea that formed the backbone of the Independent Daily Edition subscriptons page. Previously we had always marketed The Independent Daily Edition with images of the app on devices, but it became apparent that this strategy was wrong. Subscribers are buying into the content contained within the app from trusted reporters, something that isn't available anywhere else. In the run up to Christmas 2016 I worked as the product designer for The Independent Daily Edition's subscription page.</p>
                  </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="topBottomLargeMargins">
          <div className="container">
                <div className="appDescriptionBody">
                    <div className="col-sm-4">
                      <h2>Design Concept</h2>
                        <p>To emphasise the content that is to be found in the app I used dramatic looking imagery in the header. The copy and imagery focus on communicating the contributers and content to be found in the app.</p>
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
        </div>
          );
};

module.exports = Independent;
