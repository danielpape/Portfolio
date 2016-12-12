var React = require('react');
var Appheader = require('Appheader');
import {Image} from 'react-bootstrap';

var Alta = () => {
    return (
      <div>
      <Appheader/>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 highlightBox">
                        <Image src={require('../images/GraphicDesign.png')} className="width100"/>
                        <h2>Eve Alarm</h2>
                        <p className="topborder">Eve Alarm is an app that helps you sleep better by reminding you when to go to bed.</p>
                        <p  className="topMarginSmall"><strong>Role:</strong>Design & Development</p>
                        <p><strong>Platform:</strong>iOS</p>
                        <p><strong>Language:</strong>Objective-C</p>
                    </div>
                    <div className="col-sm-8">
                        <p>I design user journeys for humans, focused around creating the best experience for users while meeting business objectives.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </div>
          );
};

module.exports = Alta;
