import React from 'react'
import './footer.css'
import FooterColumn from '../../components/footerSection/FooterColumn'
import TextWithIcon from '../../components/textWithIcon/TextWithIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlagUsa} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faXTwitter, faYoutube, faPlaystation, faXbox, faBitcoin, faAmazon } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  const about = ['Careers', 'Corporate Social Responsibility'];
  const shop = ['Games', 'Hardware', 'Merchandise', 'Sales & deals', 'Exclusives', 'Online service', 'Nintendo NY store'];
  const orders = ['Order details', 'Shipping info', 'Returns & exchanges', 'FAQ'];
  const support = ['Nintendo Switch', 'Nintendo Account', 'Other systems', 'Repairs', 'Nintendo product recycling'];
  const parents = ['Info for parents', 'Parental controls'];
  const community = ['Community guidelines', 'Online safety principles'];
  const privacy = ['Privacy policy', 'Cookies and interest-based ads'];
  const text1 = [<p>Change language</p>];

  return (
    <footer className='footer'>
      <div className='footer__top'>
        <div className='footer__top__left'>
          <FontAwesomeIcon icon={faPlaystation} />
          <FontAwesomeIcon icon={faXbox} />
          <FontAwesomeIcon icon={faBitcoin} />
          <FontAwesomeIcon icon={faAmazon} />
        </div>
        <div className='footer__top__right'>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>
      <div className='footer__middle'>
        <FooterColumn title={'About Nintendo'} items={about} span={2}/>
        <FooterColumn title={'Shop'} items={shop} span={2}/>
        <FooterColumn title={'My Nintendo Store orders'} items={orders} span={2}/>
        <FooterColumn title={'Support'} items={support} span={2}/>
        <FooterColumn title={'Parents'} items={parents} span={1}/>
        <FooterColumn title={'Privacy'} items={privacy} span={1}/>
        <FooterColumn title={'Community'} items={community} span={2}/>

      </div>
      <div className='footer__bottom'>
        <div>
          <p>© Nintendo. Games are property of their respective owners. Nintendo of America Inc. Headquarters are in Redmond, Washington, USA</p>
        </div>
        <div className='footer__info-section'>
          <p>Contact us</p>
          <p>Website feedback</p>
          <p>Terms of Use</p>
          <p>Documents & Policies</p>
          <TextWithIcon icon={faFlagUsa} text={text1}/>
        </div>
      </div>
    </footer>
  )
}

export default Footer
