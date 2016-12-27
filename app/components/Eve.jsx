var React = require('react');
var Appheader = require('Appheader');
var EveDescription = require('EveDescription');
import {Image} from 'react-bootstrap';
var {Link} = require('react-router');

var Eve = () => {
    return (
        <div>
            <Appheader/>
            <section className="topBottomMargins">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <EveDescription/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="topBottomMargins">
                <div className="container">
                    <div className="appDescriptionBody">
                        <div className="col-sm-12 bottomMarginMedium">
                            <h2>Design Concept</h2>
                        </div>
                        <div className="col-sm-6"></div>
                        <div className="col-sm-6">
                            <p>It's important to me that a user interface is easy to understand and related to the subject of the product. I experimented and came up with the concept of a clickwheel based design which mirrors the shape of the sun. When the clickwheel is rotated the whole background of the app slides up and down to create a sunrise and sunset.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="topBottomMargins">
                <div className="container">
                    <div className="appDescriptionBody">
                        <div className="col-sm-12 bottomMarginMedium">
                            <h2>UI & Graphic Design</h2>
                        </div>
                        <div className="col-sm-4">
                            <p>I used mainly gradients and flat colours in the user interface. This app was designed before iOS 7 was released so the design was aiming to be future proof. </p>
                        </div>
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4"></div>
                    </div>
                </div>
            </section>
            <section className="topBottomMargins">
                <div className="container">
                    <div className="appDescriptionBody">
                        <div className="col-sm-12 bottomMarginMedium">
                            <h2>Development</h2>
                        </div>
                        <div className="col-sm-6"><Image src={require('../images/eve_xcode.jpg')} className="width100"/></div>
                        <div className="col-sm-6">
                            <p>Eve was originally programmed in 2013 in objectve-C. I used the project to learn the principals of software structure, as well as object-oriented programming and building interfaces in Xcode.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="topBottomMargins">
                <div className="container">
                    <div className="appDescriptionBody">
                        <div className="col-sm-12 bottomMarginMedium">
                            <h2>Reception</h2>
                        </div>
                        <div className="col-sm-6">
                            <p>Eve Alarm was featured on the App Store "New & Noteworthy" section for over 6 months and download over 10,000 times within the first 6 weeks of release. It currently has a 5 star rating on the App Store.</p>
                        </div>
                        <div className="col-sm-6"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

module.exports = Eve;
