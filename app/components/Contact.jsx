var React = require('react');

var Contact = React.createClass({
  render: function (){

    $(function() {
        // Get the form.
        var form = $('#ajax-content');

        // Get the messages div.
        var formMessages = $('#form-messages');

        // Set up an event listener for the contact form.
        $(form).submit(function(event) {
            // Stop the browser from submitting the form.
            event.preventDefault();

            // Serialize the form data.
            var formData = $(form).serialize();
            // Submit the form using AJAX.
            $.ajax({
                    type: 'POST',
                    url: "https://formspree.io/danielwpape@gmail.com",
                    // url: $(form).attr('action'),
                    data: formData,
                    dataType: "json"
                })
                .done(function(response) {
                    // Make sure that the formMessages div has the 'success' class.
                    // $(formMessages).removeClass('error');
                    // $(formMessages).addClass('success');
                    $(success_message).css('display', 'block');
                    $(contactForm).css('display', 'none');

                    // Set the message text.
                    // $(formMessages).text('Thanks for sending a message');

                    // Clear the form.
                    $('#name').val('');
                    $('#email').val('');
                    $('#productname').val('');
                    $('#productwebsite').val('');
                })
                .fail(function(data) {
                    // Make sure that the formMessages div has the 'error' class.
                    $(formMessages).removeClass('success');
                    $(formMessages).addClass('error');

                    // Set the message text.
                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text('Oops! An error occured and your message could not be sent.');
                    }
                });
        });
    });

    return(
    <section className="colourBack" id="contact">
        <div className="container-fluid">
          <form className="form-horizontal" action="https://formspree.io/danielwpape@gmail.com" method="POST" id="ajax-content">
                <fieldset>
                  <div id="contactForm" className="topborder">
                        <h1><strong>Contact</strong></h1>
                        <p>Please get in touch if you'd like to talk about how we can work together to make your project awesome.</p>
                        <div className="form-group topMargin">
                            <div className="col-sm-6 inputGroupContainer">
                                <div className="input-group width100">
                                    <input name="name" placeholder="Name" className="form-control formStyle" type="text"/>
                                </div>
                            </div>
                            <div className="col-sm-6 inputGroupContainer">
                                <div className="input-group width100">
                                    <input name="email" placeholder="E-Mail" className="form-control formStyle" type="text"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-6 inputGroupContainer">
                                <div className="input-group width100">
                                    <input name="productname" placeholder="Business/Product Name" className="form-control formStyle" type="text"/>
                                </div>
                            </div>

                            <div className="col-sm-6 inputGroupContainer">
                                <div className="input-group width100">
                                    <input name="productwebsite" placeholder="Business/Product Website" className="form-control formStyle" type="text"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-8 control-label"></label>
                            <div className="col-sm-8">
                                <button type="submit" className="btn btn-default btnBottom">Send</button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
            <div id="success_message" className="topborder">
                <h1><strong>Speak soon!</strong></h1>
                <p>Thanks for getting in touch, I'll be in contact soon to talk about how I can help your project.</p>
            </div>
        </div>
    </section>
  )
  }
});

module.exports = Contact;
