import React from 'react'
import facebook from './../images/facebook.png';
import instagram from './../images/instagram.png';
import twitter from './../images/twitter.png';
import tiktok from './../images/tiktok.png';
import pinterest from './../images/pinterest.png';
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="socials">
          <a href={process.env.TWITTER_LINK} target="_blank" rel="noopener noreferrer">
            <Image src={twitter} alt="Twitter" width={30} height={30} />
          </a>
          <a href={process.env.INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
            <Image src={instagram} alt="Instagram" width={30} height={30} />
          </a>
          <a href={process.env.FACEBOOK_LINK} target="_blank" rel="noopener noreferrer">
            <Image src={facebook} alt="Facebook" width={30} height={30} />
          </a>
          <a href={process.env.PINTEREST_LINK} target="_blank" rel="noopener noreferrer">
            <Image src={pinterest} alt="Pinterest" width={30} height={30} />
          </a>
          <a href={process.env.TIKTOK_LINK} target="_blank" rel="noopener noreferrer">
            <Image src={tiktok} alt="Tiktok" width={30} height={30} />
          </a>
        </div>
        <div className="footer-links">
          
          <Link href="/">Home</Link>
          <span style={{ margin: '0 10px', borderLeft: '2px solid #fff', height: '12px', display: 'inline-block' }}></span>
          <Link href="/about-us">About Us</Link>
          <span style={{ margin: '0 10px', borderLeft: '2px solid #fff', height: '12px', display: 'inline-block' }}></span>
          <Link href="/terms-and-conditions">Terms and Conditions</Link>
          <span style={{ margin: '0 10px', borderLeft: '2px solid #fff', height: '12px', display: 'inline-block' }}></span>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
          <p style={{
            color: '#fff', 
            fontSize: '14px', 
            textAlign: 'center', 
            paddingTop: 10,
            width: '100%',
            position: 'relative',
          }}>
            © Talk to Krishna 
            <span style={{ margin: '0 10px', borderLeft: '2px solid #fff', height: '12px', display: 'inline-block' }}></span>
            All rights reserved.
          </p>
      </div>
      <div className="name-widget"><a target='_blank' rel="noopener noreferrer nofollow" href="https://surendarkumar.com/" class="w-link w-link-35"><div class="w-made-by"><div class="w-text-1 w-text-131">Made By Kumar <span class="w-text-132">❤️</span></div></div></a></div>
    </div>
  )
}

export default Footer