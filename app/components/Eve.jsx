var React = require('react');

var Eve = () => {
    return (
        <section className="topBottomMargins lightColourBack element" id="whatIdo">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="topborder">
                            <h1>
                                <strong>What I do</strong>
                            </h1>
                            <p>I am a product designer with development skills. I have designed and coded user interfaces and graphics for multiple apps on the iOS app store, many of which have been featured in Apple's human curated 'New &amp; Noteworthy' section.</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <img src={require('../images/GraphicDesign.png')} className="center-block"/>
                        <h2>Graphic Design</h2>
                        <p>I have many years experience designing engaging graphics, focused around creating a recognisable visual language for brands that is communicated through different mediums.
                        </p>
                    </div>
                    <div className="col-sm-4">
                        <img src={require('../images/UIDesign.png')} className="center-block"/>
                        <h2>UI Design</h2>
                        <p>I design user journeys for humans, focused around creating the best experience for users while meeting business objectives.
                        </p>
                    </div>
                    <div className="col-sm-4">
                        <img src={require('../images/develop.png')} className="center-block"/>
                        <h2>Development</h2>
                        <p>I develop products from idea to release on iOS &amp; the web using native technologies. I am confident writing code in swift, objective-C &amp; javascript, and I'm currently learning React development. In fact this website is written in React!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

module.exports = Eve;
