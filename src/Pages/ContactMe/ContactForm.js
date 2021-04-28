import React from 'react'

function ContactForm() {
    return (
        <div className="Contact-me-for-container">
            <div className="Contact-kazeem-text">
                <div>Connect with Kazeem <span className="iconify" data-icon="fontelico:emo-happy" data-inline="false"></span></div>
                <div><span className="mouse-icon iconify" data-icon="emojione-monotone:computer-mouse" data-inline="false"></span></div>
            </div>
            <form className="Con-Form-wrapper">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label for="firstName">First Name</label>
                            <input type="firstName" className="form-control" value="" placeholder="K..........." required></input>
                        </div>

                        <div className="form-group">
                            <label for="exampleInputEmail1">Email Address</label>
                            <input type="email" className="form-control" value="" aria-describedby="emailHelp" placeholder="@..........." required></input>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label for="lastName">Last Name</label>
                            <input type="lastName" className="form-control" value="" placeholder="E..........." required></input>
                        </div>
                        <div className="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="phone" className="form-control" value="" placeholder="+ .... .... ..." required></input>
                        </div>
                    </div>
                    <small id="emailHelp" className="form-text email_note"><span className="shield-icon iconify" data-icon="dashicons:shield" data-inline="false"></span>We'll never share your email with anyone else.</small>
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Message Kazeem...</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <button className="contact-me-submit">Submit<span className="iconify" data-icon="bx:bx-mail-send" data-inline="false"></span></button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
