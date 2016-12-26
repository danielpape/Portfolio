var React = require('react');
import {Image} from 'react-bootstrap';

var EveDescription = () => {
    return (
      <div className="appDescriptionBody">
        <h2>Idea</h2>
        <blockquote>If you go to bed early and get a restful night's sleep then you shouldn't need an alarm in the morning.</blockquote>
        <p>This was the idea behind Eve Alarm. Most people can't choose that time at which they wake up, but they can choose when to go to bed. Eve Alarm is an alarm app that uses this thinking to flip a tradition alarm on its head: <em>a bed time alarm</em> rather than a wake time alarm.</p>
  </div>
    );
};

module.exports = EveDescription;
