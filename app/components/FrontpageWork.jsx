var React = require('react');
var {Link, IndexLink} = require('react-router');

var FrontpageWork = () => {
    return (
      <div>
        <section className="topBottomMargins">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="section_header">Here's some of my work</h2>
                    </div>
                    <div className="col-sm-4">
                        <div className="appTile"><h3><Link to={'/independent'}>The Independent</Link></h3></div>
                    </div>
                    <div className="col-sm-4">
                      <div className="appTile"><h3><Link to={'/EveningStandard'}>London Evening Standard</Link></h3></div>
                    </div>
                    <div className="col-sm-4">
                        <div className="appTile"><h3><Link to={'/eve'}>Eve Alarm</Link></h3></div>
                    </div>
                </div>
            </div>
        </section>
        </div>
          );
};

module.exports = FrontpageWork;
