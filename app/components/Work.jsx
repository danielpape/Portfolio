var React = require('react');
var AppsCarousel = require('AppsCarousel');

var Work = React.createClass({
  getDefaultProps : function () {
    selectedApp: 0
  },
  handleSetPage: function(seconds){
    this.setState({
      selectedApp:selectedAppPage
    });
  },
  render:function(){
    return(

    <section className="topBottomMargins" id="work">
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="topborder">
                        <h1><strong>Featured Work</strong></h1>
                        <p>I have designed and coded user interfaces and graphics for many apps on the iOS app store, and had the pleasure of being featured in Apple's human curated 'New &amp; Noteworthy' section. To see all of my apps search the app store
                            for <strong><i>Daniel Pape</i></strong></p>
                    </div>
                  </div>
                  <AppsCarousel/>
              </div>
        </div>
    </section>
  )}
});

module.exports = Work;
