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
                    <div className="col-sm-3 highlightBox">
                        <Image src={require('../images/GraphicDesign.png')} className="width100"/>
                        <h2>Eve Alarm</h2>
                        <p className="topborder">Eve Alarm is an app that helps you sleep better by reminding you when to go to bed.</p>
                        <p className="topMarginSmall"><strong>Role:</strong>Design & Development</p>
                        <p><strong>Platform:</strong>iOS</p>
                        <p><strong>Language:</strong>Objective-C</p>
                        <p className="topMarginSmall"><strong>Link:</strong><a href="https://itunes.apple.com/gb/app/eve-alarm-time-to-sleep/id633081958?mt=8">AppStore</a></p>

                    </div>
                    <div className="col-sm-9">
                        <EveDescription/>

                    </div>
                </div>
            </div>
        </section>
        <section className="topBottomMargins">
          <div className="container">
            <div className="col-sm-4"><Image src={require('../images/Eve-iPhone5.png')} className="width100"/></div>
            <div className="col-sm-8"> <p>This is an early screenshot of Eve Alarm. The wake time is set by dragging the clickwheel. When the clickwheel is rotated the sky ascends and descends to indicate the alarm time.</p></div>
          </div>
        </section>
        </div>
    );
};

module.exports = Eve;
