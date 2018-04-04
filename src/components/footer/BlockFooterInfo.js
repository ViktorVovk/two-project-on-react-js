import React from 'react';

class BlockFooterInfo extends React.Component{
  render(){
    return(
      <div className="footer__block footer__block_info">
          <div className="block__title">
              <h2>Store information</h2>
          </div>

            <div className="footer__contact font-ubuntu-light">
              <p><i className="fa fa-map-marker" aria-hidden="true"></i>Company Inc., 8901 Marmora Road, Glasgow, D04 89GR</p>
            </div>
            <div className="footer__contact footer__contact_tell font-ubuntu-light">
                  <p><i className="fa fa-phone" aria-hidden="true"></i>Call us now toll free:&nbsp;</p>
                  <a href="tel:80023456789" className="font-ubuntu-light">(800) 2345-6789</a>
            </div>
            <div className="footer__contact footer__contact_email font-ubuntu-light">
                  <p><i className="fa fa-envelope-o" aria-hidden="true"></i>Customer support:&nbsp;</p>
                  <a href="mailto:support@example.com" className="font-ubuntu-light"> support@example.com</a><br/>
                  <p>Press:&nbsp;</p>
                  <a href="mailto:support@example.com" className="font-ubuntu-light"> pressroom@example.com</a>
            </div>
            <div className="footer__contact contact-skype font-ubuntu-light">
                <p><i className="fa fa-skype" aria-hidden="true"></i>Skype:&nbsp;</p>
                <a href="skype:sample-username" className="font-ubuntu-light">sample-username</a>
            </div>

      </div>
    )
  }
}

export default BlockFooterInfo
