var React = require('react');
import {Image} from 'react-bootstrap';
var {Link, IndexLink} = require('react-router');

var FrontpageWork = () => {
    return (
        <div>
            <section className="topBottomMargins greyBack">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="appTile">
                                <div className="colourFlashIndependent"></div>
                                <p className="appTileTag">Client</p>
                                <h2>
                                    <Link to={'/independent'}>The Independent</Link>
                                </h2>
                                <p className="appTileTag">Project</p>
                                <h3>
                                    Subscriptions Page
                                </h3>
                                <button>View Project</button>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <Link to={'/EveningStandard'}><div className="appTile">
                                <div className="colourFlashStandard"></div>
                                <p className="appTileTag">Client</p>
                                <h2>
                                    <Link to={'/EveningStandard'}>Evening Standard</Link>
                                </h2>
                                <p className="appTileTag">Project</p>
                                <h3>
                                    2017 Site Redesign
                                </h3>
                                <button>View Project</button>
                            </div></Link>
                        </div>
                        <div className="col-sm-4">
                            <div className="appTile">
                                <div className="colourFlashNewsletter"></div>
                                <p className="appTileTag">Client</p>
                                <h2>
                                    <Link to={'/eve'}>Evening Standard</Link>
                                </h2>
                                <p className="appTileTag">Project</p>
                                <h3>
                                    Email Sign Up Form
                                </h3>
                                <button>View Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

module.exports = FrontpageWork;
