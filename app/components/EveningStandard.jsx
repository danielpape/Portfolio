var React = require('react');
import {Image} from 'react-bootstrap';

var EveningStandard = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="col-sm-4 col-sm-offset-1 appsSplash">
                        <Image src={require('../images/ES_icon.png')} className="width16rem innerCorners"/>
                        <div className="2remMargins">
                            <h1>Evening Standard</h1>
                            <p className="topMarginSmall">
                                <strong>Project:</strong> 2017 Site Design</p>
                            <p>
                                <strong>Role:</strong> Lead Designer</p>
                            <p>
                                <strong>Link:</strong> <a href="https://standard.co.uk">standard.co.uk</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-5">
                      <p className="1remBottomMargin"><strong className="1remBottomMargin">INTRO</strong></p>
                        <p>The London Evening Standard has been published since 1827 and has constantly adapted to stay relevant in the publishing industry. In 2017 the standard.co.uk underwent a replatforming where I was lead designer.</p>
                        <p className="topMargin"><strong className="1remBottomMargin">THE BRIEF</strong></p>
                        <p>The main focus of the redesign was a change in tone of voice from reporting mainly on crime & politics to a more lifestyle and celebrity focused output. I used this change of tone to work with senior stakeholders on a 3 month project that launched in October 2017.</p>
                  </div>
                </div>
            </section>
            <section>
                <div className="col-sm-12 noPadding">
                    <Image src={require('../images/IND_writers.jpg')} className="width100"/>
                </div>
            </section>
            <section className="topBottomMargins">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        <p>The redesign also offered an opportunity to address limitations & frustrations from the editorial and commercial teams. I spent 3 weeks interviewing the people that work on the site and identified a number of issues. Because of the responsive nature of the website images were often cropped in an odd way, cropping people who were at the edges of an image for example. I designed the site so that in almost all cases images retain their original 6x4 ratio. This rule is broken to give emphasis to higher priority elements such as the highest priority “hero” component and the full width comment highlights.</p>
                    </div>
                </div>
            </section>
            <section className="topBottomMargins">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        <p>I designed a library of component that can be curated by editors to build up the structure of the page. These components have varying levels of information density which is intended to give the page rhythm which can be use to clearly guide the user through the page. The components are based on a 12 column grid, although the bounds of the columns are strategically broken in order to add emphasis to certain elements and to add depth. Once example of this are the blocks that appear to emphasise the on the hero elements.</p>
                    </div>
                </div>
            </section>
            <section className="topBottomMargins">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        <p>These blocks break the grid be being offset by half of the margin width vertically and horizontally. This places them partly within the margins of the design, reinforcing the floating, airy nature of the design. The parallax effect is used sparingly, but gives the same dynamic aesthetic to the comment piece highlights.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

module.exports = EveningStandard;
