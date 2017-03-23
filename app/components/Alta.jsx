var React = require('react');
var Appheader = require('Appheader');
import {Image} from 'react-bootstrap';

var Alta = () => {
    return (
      <div>
        <section className="appsSplash">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                      <h1>Alta</h1>
                      <h2>A social network for people who love weather & photography</h2>
                        <p className="topMarginSmall"><strong>Role:</strong> Design & Development</p>
                        <p><strong>Platform:</strong> web</p>
                        <p><strong>Framework:</strong> React</p>
                        <p className="topMarginSmall"><strong>Coming Soon</strong></p>
                    </div>
                </div>
            </div>
        </section>
        <section className="topBottomMargins">
            <div className="container-fluid">
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 topBottomMargins">
                      <div className="appDescriptionBody">
                        <h2>Idea</h2>
                        <p>I love landscape photography. My dad tought me from an early age how to frame a shot and I've been hooked ever since, as you can see from <a href="https://instagram.com/_danielpape">my Instagram feed</a>. My idea was to create a social network for people who love landscape photography, but put the images into context by incorporating elements of the weather into the metadata of the images.</p>
                  </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
          );
};

module.exports = Alta;
