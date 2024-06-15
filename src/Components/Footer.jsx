import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div id='footer'>
            <div class='container'>
                <div class='row'>
                    <div class='col'>
                        <h4>Kurumsal</h4>
                        <ul>
                          <li><a href='main'>Spor Salonu Bul</a></li>
                            <li><a href='features'>Ozellikler</a></li>
                            <li><a href='presentaion'>Kisisel Egitim</a></li>
                            <li><a href='about'>Hakkimizda</a></li>
                            <li><a href='contact'>Iletisim</a></li>
                        </ul>
                    </div>
                    <div class='col'>
                        <h4>Yardim Al</h4>
                        <ul>
                          <li><a href='#'>SSS</a></li>
                          <li><a href='#'>Salonumuz</a></li>
                          <li><a href='#'>Iade</a></li>
                          <li><a href='#'>Fiyat</a></li>
                        </ul>
                    </div>
                    <div class='col'>
                        <h4>Malzemelerimiz</h4>
                        <ul>
                         <li><a href='#'>Dambil</a></li>
                         <li><a href='#'>Halter</a></li>
                         <li><a href='#'>Atlama ipi</a></li>
                         <li><a href='#'>Trambolin</a></li>
                         <li><a href='#'>Direnc Bantlari</a></li>
                         <li><a href='#'>El ve Gogus Yayi</a></li>
                        </ul>
                    </div>
                    <div class='col'>
                        <h4>Bizi Takip Edin</h4>
                        <div class='social-links'>
                            <a href='#'><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href='#'><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href='#'><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href='#'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
//npm install @fortawesome/react-fontawesome@latest bu komut font awesome kütüphanesini yükler 
//ve kütüphaneyi yükledikten sonra ilgili sayfaya import iþlemi ediyorum

export default Footer;