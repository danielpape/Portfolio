var React = require('react');

var Footer = () => {
  return(
    <section className="footer">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="col-sm-6">
                        <p>&copy; Daniel Pape 2016</p>
                        <p><a href="https://www.twitter.com/danielpape">Twitter</a></p>
                        <p><a href="https://www.github.com/danielpape">GitHub</a></p>
                    </div>
                    <div className="col-sm-6">
                        <p><a href="https://itunes.apple.com/gb/app/eve-alarm-time-to-sleep/id633081958?mt=8">Eve Alarm</a><i> App Store</i></p>
                        <p><a href="https://itunes.apple.com/us/app/progress-1000-by-london-evening/id931391607?mt=8">Evening Standard: Progress 1000</a><i> App Store</i></p>
                        <p><a href="https://itunes.apple.com/gb/app/mapgrounds/id792151906?mt=8">Mapgrounds</a> <i>App Store</i></p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

module.exports = Footer;
