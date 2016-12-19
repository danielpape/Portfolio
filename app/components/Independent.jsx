var React = require('react');
var Appheader = require('Appheader');
import {Image} from 'react-bootstrap';

var Independent = () => {
    return (
      <div>
      <Appheader/>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 highlightBox">
                        <Image src={require('../images/GraphicDesign.png')} className="width100"/>
                        <h2>Independent</h2>
                        <p className="topborder">The Independent is the UK's first daily national newspaper to go digital-only.</p>
                        <p  className="topMarginSmall"><strong>Role:</strong>Product Designer</p>
                        <p><strong>Platform:</strong>web</p>
                    </div>
                    <div className="col-sm-8">
                      <p>This is the description</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
          );
};

module.exports = Independent;
