var React = require('react');

var AppsCarousel = React.createClass({
  getInitialState() {
    return {
      selectedApp:0
    };
  },
  componentDidUpdate: function(){

  },
  scrollThroughApps:function(){
    this.timer = setInterval(() => {
      var newSelectedApp = (this.state.selectedApp+1)% 3;
      this.setState({
        selectedApp : newSelectedApp
      });
      console.log('selected app is'+this.state.selectedApp);
    },3000);
  },
  componentDidMount: function(){
    this.scrollThroughApps();
},
  componentWillUnmount: function(){
    clearInterval(this.timer);
    },
  render: function(){
    var selectedApp = this.state.selectedApp;

    if (selectedApp == 0){
      var appBoxClassArray = ['highlighted','notHighlighted','notHighlighted']
    }else if (selectedApp == 1) {
      var appBoxClassArray = ['notHighlighted','highlighted','notHighlighted']
    }else if (selectedApp == 2) {
      var appBoxClassArray = ['notHighlighted','notHighlighted','highlighted']
    }

      return(
        <div>
          <div className="col-sm-6 topMargin">
            <div id="eveAlarmBox" className={appBoxClassArray[0]+' appBox'}>
              <h2>Eve Alarm</h2>
              <p>Eve Alarm is an alarm app that uses a custom clickwheel control to interact with the sunset-based user-interface. It was featured in the US &amp; UK app stores for over 6 months.</p>
            </div>
            <div id="progress1000Box" className={appBoxClassArray[1]+' appBox'}>
              <h2>Progress 1000</h2>
              <p>The Progress 1000 by London Evening Standard is an annual event featuring the 1000 most influential people in London. I created a platform for the app from scratch which is responsive to all sizes of iPhone &amp; iPad, and automatically
                  lays out section pages and paginated profile pages with offline image caching.</p>
            </div>
            <div  id="mapgroundsBox" className={appBoxClassArray[2]+' appBox'}>
              <h2>Mapgrounds</h2>
              <p>Mapgrounds is an app that created beautiful wallpapers for your iPhone, with social sharing and in-app purchases to add new styles.</p>
            </div>
          </div>
          <div className="col-sm-6 topMargin">
              <img src={require("../img/eveAlarm.png")}/>
          </div>
        </div>
      );
    }
});

module.exports = AppsCarousel;
