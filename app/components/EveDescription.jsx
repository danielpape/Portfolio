var React = require('react');
import {Image} from 'react-bootstrap';
var {Link} = require('react-router');

var EveDescription = () => {
    return (
        <section className="homeTiles">
            <div className="container homeTiles">
                <div>
                  <Link to="/eve">
                    <div className="col-xs-12 col-sm-12 col-lg-4 appTile eveTile">
                        <h3>Eve Alarm</h3>
                        <h4>An alarm app for iPhone</h4>
                    </div>
                    </Link>
                    <Link to="/independent">
                    <div className="col-xs-12 col-sm-6 col-lg-4 appTile indTile">
                        <h3>Independent</h3>
                        <h4>Subscriptions website</h4>
                    </div>
                  </Link>
                  <Link to="/alta">
                    <div className="col-xs-12 col-sm-6 col-lg-4 appTile altTile">
                        <h3>London Evening Standard</h3>
                        <h4>The Progress 1000 app</h4>
                    </div>
                  </Link>
                </div>
            </div>
        </section>
    );
};

module.exports = EveDescription;
