var React = require('react');
import {Image} from 'react-bootstrap';
var {Link} = require('react-router');

var EveDescription = () => {
    return (
      <div>
        <section className="topBottomLargeMargins appSection eveTile">
          <div className="container">
            <div className="col-sm-4 col-sm-offset-2">
            </div>
              <div className="col-sm-4">
                  <h1><strong>Eve Alarm</strong></h1><h2>An alarm app that reminds you when to go to bed</h2>
              </div>
              </div>
        </section>
        <section className="topBottomLargeMargins appSection indTile">
          <div className="container">
            <div className="col-sm-4 col-sm-offset-2">
            </div>
              <div className="col-sm-4">
                  <h1><strong>Independent</strong></h1><h2>Subscriptions website</h2>
              </div>
              </div>
        </section>
        <section className="topBottomLargeMargins appSection altTile">
          <div className="container">
            <div className="col-sm-4 col-sm-offset-2">
            </div>
              <div className="col-sm-4">
                  <h1><strong>London Evening Standard</strong></h1><h2>Progress 1000 app</h2>
              </div>
              </div>
        </section>
        </div>
    );
};

module.exports = EveDescription;
