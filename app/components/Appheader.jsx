var React = require('react');
import {Col,Image} from 'react-bootstrap';

var Appheader = () => {
    return (
        <section className="topBottomMargins">
            <div className="container-fluid">
                <div className="row">
                    <Col xs={12}>
                            <h1>
                                <strong>Eve Alarm</strong>
                            </h1>
                            <Image src={require('../images/GraphicDesign.png')} className="width100"/>
                    </Col>
                </div>
            </div>
        </section>
    );
};

module.exports = Appheader;
