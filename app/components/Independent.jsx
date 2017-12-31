var React = require('react');
import {Image} from 'react-bootstrap';

var Independent = () => {
    return (
      <div className="independentBackground topBottomLargeMarginsAndPadding">
          <section>
              <div className="container">
                <div className="col-sm-6">
                    <Image src={require('../images/IND_device.jpg')} className="width100"/>
                </div>
                  <div className="col-sm-6">
                    <p>Project No. 2</p>
                      <h2 className="FourRemBottomMargin">THE INDEPENDENT</h2>
                      <p>The London Evening Standard has been published since 1827 and has constantly adapted to stay relevant in the publishing industry. In 2017 the standard.co.uk underwent a replatforming where I was lead designer.</p>
                      <p>The main focus of the redesign was a change in tone of voice from reporting mainly on crime & politics to a more lifestyle and celebrity focused output. I used this change of tone to work with senior stakeholders on a 3 month project that launched in October 2017.</p>
                  </div>
              </div>
          </section>
      </div>
          );
};

module.exports = Independent;
