var React = require('react');

var AppsCarousel = React.createClass({
    getInitialState() {
        return {selectedApp: 0};
    },
    componentDidUpdate: function() {},
    scrollThroughApps: function() {
        this.timer = setInterval(() => {
            var newSelectedApp = (this.state.selectedApp + 1) % 3;
            this.setState({selectedApp: newSelectedApp});
        }, 5000);
    },
    componentDidMount: function() {
        this.scrollThroughApps();
    },
    componentWillUnmount: function() {
        clearInterval(this.timer);
    },
    render: function() {
        var selectedApp = this.state.selectedApp;

        if (selectedApp == 0) {
            var appBoxClassArray = ['highlighted', 'notHighlighted', 'notHighlighted'];
            var bobbleClassArray = ['highlightedBobble', 'notHighlightedBobble', 'notHighlightedBobble'];
            var displayClassArray = ['displayImage', 'hideImage', 'hideImage'];
        } else if (selectedApp == 1) {
            var appBoxClassArray = ['notHighlighted', 'highlighted', 'notHighlighted'];
            var bobbleClassArray = ['notHighlightedBobble', 'highlightedBobble', 'notHighlightedBobble'];
            var displayClassArray = ['hideImage', 'displayImage', 'hideImage'];
        } else if (selectedApp == 2) {
            var appBoxClassArray = ['notHighlighted', 'notHighlighted', 'highlighted'];
            var bobbleClassArray = ['notHighlightedBobble', 'notHighlightedBobble', 'highlightedBobble'];
            var displayClassArray = ['hideImage', 'hideImage', 'displayImage'];
        }

        var eveDescription = "Eve is an alarm app for iPhone that uses a sunrise-based interface to remind you when you go to bed. The interface is custom written and the app uses local notifications to trigger the alarm and reminder.";
        var progress1000Descripton = "The Evening Standard Progress 1000 is an annual event that celebrates the most influential people in London. I built a responsive iPhone & iPad app to present all 1000 entries with offline caching.";
        var MapgroundDescription = "Mapgrounds is an app for iPhone that creates beautiful wallpapers for your phone. It uses embedded Apple Maps and allows the user to buy new themes through in-app purchases";

        return (
            <div>
            <div className="col-sm-6 noBottomMargin">
                <div id="eveAlarmBox" className={appBoxClassArray[0] + ' appBox'}>
                    <h2>Eve Alarm</h2>
                    <p className="appDescription">{eveDescription}</p>
                    <a href="" className="download">Download</a>
                </div>
                <div id="progress1000Box" className={appBoxClassArray[1] + ' appBox'}>
                    <h2>Progress 1000</h2>
                    <p className="appDescription">{progress1000Descripton}</p>
                    <a href="" className="download">Download</a>
                </div>
                <div id="mapgroundsBox" className={appBoxClassArray[2] + ' appBox'}>
                    <h2>Mapgrounds</h2>
                    <p className="appDescription">{MapgroundDescription}</p>
                    <a href="" className="download">Download</a>
                </div>
                <div className="bobbles">
                    <span className={bobbleClassArray[0]}>
                        &#9679;
                    </span>
                    <span className={bobbleClassArray[1]}>
                        &#9679;
                    </span>
                    <span className={bobbleClassArray[2]}>
                        &#9679;
                    </span>
                </div>
            </div>
            <div className="col-sm-6 noBottomMargin">
                <img src={require('../images/Eve-iPhone.png')} className={displayClassArray[0]}/>
                <img src={require('../images/Progress-iPhone.png')} className={displayClassArray[1]}/>
                <img src={require('../images/Mapgrounds-iPhone.png')} className={displayClassArray[2]}/>
            </div>

        </div>
        );
    }
});

module.exports = AppsCarousel;
