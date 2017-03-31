var React = require('react');
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
        <section className="topBottomMargins darkBack">
            <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <Image src={require('../images/progress_event.jpg')} className="width100"/>
                  </div>
                  <div className="col-sm-6">
                      <h2>Background</h2>
                        <p>The Progress 1000 is an annual event that is organised and curated by London Evening Standard. It celebrates the most influential people in the capital from all walks of life. I created a bespoke platform that has been used for iPhone & iPad apps over the past 3 years, which features all 1000 entries in the list.</p>
                          <blockquote className="topMargin">There are so many inspiring, dedicated and heroic people on the Progress 1000 list. From giants of industry and successful entrepreneurs, to sporting heroes and Olympic medalists.</blockquote>
                          <p className="centerAlign"><strong>Sadiq Khan</strong> Mayor of London</p>
                </div>
                </div>
            </div>
        </section>
        <section className="topBottomLargeMargins">
          <div className="container centerAlign">
            <div className="appDescriptionBody">
                  <div className="col-sm-8 col-sm-offset-2">
                    <h2>Information Architecture</h2>
                      <p>Organising 1000 entries is a challenge to manage from a interface design and software architecture aspect. The information is presented to the user grouped by section, which the user can browse through from any screen in the app.   To optimise the bundle size both the iPhone and iPad views to use the same view controllers which I write to be GUI-neutral. Both versions of the app also use the same JSON database which contains the 1000 entries in the list.</p>
              </div>
            </div>
              </div>
        </section>
        <section className="topMargin">
          <div className="container">
                <div className="appDescriptionBody">
                  <div className="col-sm-6">
                    <h2>User Interface Design</h2>
                      <p>To allow the user to explore the entries in the list, a persistant menu button is always present in the top-left corner with a prompt to interact with it when the app is first opened. The app uses a collection view to present the entries in each category. Once selected, an entry is presented as a popover to improve readability. On mobile the popover takes up the whole screen. To increase engagement the entries are paginated, making it simple for the user to swipe between each page.</p>
              </div>
              <div className="col-sm-6">
                <Image src={require('../images/progressUI.jpg')} className="width100"/>
              </div>
                </div>
              </div>
        </section>
        <section className="topBottomLargeMargins colourBack">
            <div className="container">
                <div className="appDescriptionBody">
                      <div className="col-sm-12">
                        <h2>Graphic Design</h2>
                          <p>I used a design for the app which seeks to convey the modernity and understated style that defines the people that have made the list.</p>
                      </div>
              </div>
            </div>
            <div className="container-fluid topMargin">
                  <div className="col-sm-6"><Image src={require('../images/progress_interface1.jpg')} className="width100"/></div>
                    <div className="col-sm-6"><Image src={require('../images/progress_interface2.jpg')} className="width100"/></div>
            </div>
        </section>
        </div>
          );
};

module.exports = EveningStandard;
