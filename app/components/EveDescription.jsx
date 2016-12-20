var React = require('react');
import {Image} from 'react-bootstrap';

var EveDescription = () => {
    return (
      <div className="appDescriptionBody">
        <p>I'm immensely proud of Eve Alarm: it was the first iPhone app I wrote and my first time writing in Objective-C and using XCode. I spent a lot of time refining the user interface to make the app both intuitive and beautiful which gave me real focus when it came to learning how to turn it into a functional product.</p>
        <p>The idea for the app came from an advertising campaign I had worked on for a bed company:</p><blockquote>If you go to bed early and get a restful night's sleep then you shouldn't need an alarm in the morning.</blockquote>
        <p>Using this proposition I designed the alarm the opposite way around to most alarm apps. Rather than tell you when to wake up the app reminds you when to go to bed to ensure you get a full night's sleep.</p>
        <Image src={require('../images/Eve-iPhone5.png')} className="width30 rightEmbed"/>
        <p>This is an early screenshot of Eve Alarm. The wake time is set by dragging the clickwheel. When the clickwheel is rotated the sky ascends and descends to indicate the alarm time.</p>
  </div>
    );
};

module.exports = EveDescription;
