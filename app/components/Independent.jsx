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
                    <div className="col-sm-6">
                      <div className="appDescriptionBody">
                        <h2>Challenge</h2>
                        <p>The main challenge I found when designing <em>The Independent</em> subscriptions site was that testing indicated users were unable to differentiate between the core Independent products: The Daily Edition app, the printed newspaper and independent.co.uk.</p>
                  </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="topBottomLargeMargins writersSection">
          <div className="container">
                <div className="appDescriptionBody">
                    <div className="col-sm-4">
                      <h2>Solution</h2>
                        <p>The Independent Daily Edition contains all of the same writers, features and extras that were available previously in the printed newspaper, but with the enhancements that a digital product can offer. To communicate this to users I made the decision to retain the visual motifs of the newspaper, but chose to update them with web visual language such as a card based interface, depth of field, and dark background colours.</p>
                </div>
                  <div className="col-sm-8"><Image src={require('../images/IND_writers.jpg')} className="width100"/>
                  </div>
                </div>
              </div>
        </section>
        <section className="topBottomLargeMargins">
          <div className="container">
                <div className="appDescriptionBody">
                  <div className="col-sm-4">
                      <p>I placed an emphasis on retaining the motifs of the print newspaper because the target audience were those people who had previously read the print product. I also included positive user testimonials to reaffirm the benefits of the app to potential users.</p>
                  </div>
                  <div className="col-sm-4"><Image src={require('../images/IND_card1.jpg')} className="width100"/></div>
                  <div className="col-sm-4"><Image src={require('../images/IND_card2.jpg')} className="width100"/></div>
                </div>
              </div>
        </section>
        <section className="topBottomLargeMargins">
          <div className="container">
                <div className="appDescriptionBody">
                  <div className="col-sm-4">
                    <h2>Outcome</h2>
                      <p>The site performed well with users clearer on the features of the product, which led to an improvement in key metrics such as conversion and bounce rate.</p>
                  </div>
                  <div className="col-sm-4"><Image src={require('../images/IND_card1.jpg')} className="width100"/></div>
                  <div className="col-sm-4"><Image src={require('../images/IND_card2.jpg')} className="width100"/></div>
                </div>
              </div>
        </section>
        <section>
          <div className="container">
                  <div className="col-sm-12">
                    <Image src={require('../images/IND_device.jpg')} className="width100"/>
                  </div>
                </div>
        </section>
        </div>
          );
};

module.exports = Independent;
