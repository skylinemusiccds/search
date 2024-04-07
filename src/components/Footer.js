import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <div className=''>
                <div className="footer">
                    {/* <div className="footerCredit">
                        <span>Made In India.</span>
                    </div> */}
                    <div className="footerLR my-5">
                        <div className='footerLeft'>
                            <Link to='/'>Made In India</Link>
                        </div>
                        {/* <div className='logo_123'>
                        <Link><i class="fa fa-instagram" aria-hidden="true"/></Link>
                        <Link><i class="fa fa-facebook-square" aria-hidden="true"></i></Link>
                        <Link><i class="fa fa-twitter-square" aria-hidden="true"></i></Link>
                        <Link><i class="fa fa-youtube-play" aria-hidden="true"></i></Link>
                        <Link><i class="fa fa-linkedin-square" aria-hidden="true"></i></Link>
                        </div> */}
                        <div className='footerRight'>
                            <Link to='/settings'>About</Link>
                            <Link to='/privacy'>Privacy</Link>
                            <Link to='/terms'>Terms</Link>
                            <Link to='/settings'>Settings</Link>
                          
                        </div>
                    </div>
                </div> 
        </div>
    );
}

export default Footer;