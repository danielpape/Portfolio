var React = require('react');

var Footer = () => {
  return(
    <section className="footer">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="col-sm-6">
                        <p>&copy; Daniel Pape 2017</p>
                        <p><a href="https://www.twitter.com/danielpape" target="_blank">Twitter</a></p>
                        <p><a href="https://www.github.com/danielpape" target="_blank">GitHub</a></p>
                        <p><a href="https://www.appstore.com/danielpape" target="_blank">App Store</a></p>
                    </div>
                    <div className="col-sm-6">
                        <p><a href="https://itunes.apple.com/gb/app/eve-alarm-time-to-sleep/id633081958?mt=8" target="_blank">Eve Alarm</a><i> App Store</i></p>
                        <p><a href="https://itunes.apple.com/us/app/progress-1000-by-london-evening/id931391607?mt=8" target="_blank">Evening Standard: Progress 1000</a><i> App Store</i></p>
                        <p><a href="https://itunes.apple.com/gb/app/mapgrounds/id792151906?mt=8" target="_blank">Mapgrounds</a> <i>App Store</i></p>
                        <p><a href="https://subscriptions.independent.co.uk" target="_blank">Independent Subscriptions</a></p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

module.exports = Footer;
