var React = require('react');
var Scroll = require('react-scroll');
var Element = Scroll.Element;

var WhatIDo = () => {
  return(
    <section className="topBottomMargins lightColourBack element" name="whatIdo">
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="topborder">
                        <h1><strong>What I do</strong></h1>
                        <p>I am a product designer with development skills. I have designed and coded user interfaces and graphics for multiple apps on the iOS app store, many of which have been featured in Apple's human curated 'New &amp; Noteworthy' section.</p>
                    </div>
                  </div>
                    <div className="col-sm-4">
                        <img src="img/GraphicDesign.png" className="center-block"/>
                        <h2>Graphic Design</h2>
                        <p>I have many years experience designing engaging graphics, focused around creating a recognisable visual language for brands that is communicated through logo design and promotional materials. </p>
                    </div>
                    <div className="col-sm-4">
                        <img src="img/UIDesign.png" className="center-block"/>
                        <h2>UI Design</h2>
                        <p>I adopt a user-led approach to create engaging, simplified designs that streamline user interactions focused around meeting business goals. </p>
                    </div>
                    <div className="col-sm-4">
                        <img src="img/develop.png" className="center-block"/>
                        <h2>Development</h2>
                        <p>I have developed products from idea to release on iOS, Android &amp; the web using native technologies. I am comfortable writing code in swift, objective-C, javascript &amp; java.</p>
                    </div>
                </div>
        </div>
    </section>
  );
};

module.exports = WhatIDo;
