import React from 'react';

const Footer = () => {
    return (
        <footer className="p_20 color_primary bg_secondery text-center full_row">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-12">
                <div className="copyright">
                  <p>
                    Developed by {' '}
                    <a href="https://web.facebook.com/web.kawsarahmed" target="_blank"
                      > Kawsar Ahmed</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
    );
};

export default Footer;