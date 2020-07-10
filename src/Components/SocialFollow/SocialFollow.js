import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import '../SocialFollow/SocialFollow.css'

function SocialFollow(props) {
    return(
        <div className="social-container">
            <a href="https://www.facebook.com/randi.clemens" className="facebook social" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.instagram.com/randi_c_/?igshid=4ziuxur0oux3" className="instagram social" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://twitter.com/randiclem?lang=en" className="twitter social" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/randi-clemens-47aa3a108" className="linkedin social" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
        </div>
    )
}

export default SocialFollow;