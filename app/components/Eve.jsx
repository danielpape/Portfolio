var React = require('react');
var Appheader = require('Appheader');
var EveDescription = require('EveDescription');
import {Image} from 'react-bootstrap';
var {Link} = require('react-router');

var Eve = () => {
    return (
        <div>
            <Appheader/>
            <section className="topBottomMargins">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <EveDescription/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="topBottomMargins colourBack">
                <div className="container">
                    <div className="appDescriptionBody">
                        <div className="col-sm-12 bottomMarginMedium">
                            <h2>Concept</h2>
                        </div>
                        <div className="col-sm-6"></div>
                        <div className="col-sm-6">
                            <p>This was the idea behind Eve Alarm. Most people can't choose that time at which they wake up, but they can choose when to go to bed. Eve Alarm is an alarm app that uses this thinking to flip a tradition alarm on its head:
                                <em>a bed time alarm</em>
                                rather than a wake time alarm.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="topBottomMargins">
                <div className="container">
                    <div className="appDescriptionBody">
                        <div className="col-sm-12 bottomMarginMedium">
                            <h2>Design</h2>
                        </div>
                        <div className="col-sm-6">
                            <p>This was the idea behind Eve Alarm. Most people can't choose that time at which they wake up, but they can choose when to go to bed. Eve Alarm is an alarm app that uses this thinking to flip a tradition alarm on its head:
                                <em>a bed time alarm</em>
                                rather than a wake time alarm.</p>
                        </div>
                        <div className="col-sm-6"></div>
                    </div>
                </div>
            </section>
            <section className="topBottomMargins colourBack">
                <div className="container">
                    <div className="appDescriptionBody">
                        <div className="col-sm-12 bottomMarginMedium">
                            <h2>Development</h2>
                        </div>
                        <div className="col-sm-6"></div>
                        <div className="col-sm-6">
                            <p>This was the idea behind Eve Alarm. Most people can't choose that time at which they wake up, but they can choose when to go to bed. Eve Alarm is an alarm app that uses this thinking to flip a tradition alarm on its head:
                                <em>a bed time alarm</em>
                                rather than a wake time alarm.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="topBottomMargins">
                <div className="container">
                    <div className="appDescriptionBody">
                        <div className="col-sm-12 bottomMarginMedium">
                            <h2>Reception</h2>
                        </div>
                        <div className="col-sm-6">
                            <p>This was the idea behind Eve Alarm. Most people can't choose that time at which they wake up, but they can choose when to go to bed. Eve Alarm is an alarm app that uses this thinking to flip a tradition alarm on its head:
                                <em>a bed time alarm</em>
                                rather than a wake time alarm.</p>
                        </div>
                        <div className="col-sm-6"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

module.exports = Eve;
