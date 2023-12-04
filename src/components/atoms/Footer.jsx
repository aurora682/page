import React from 'react';
import '../atoms/Footer.css'

function Footer() {
  return (
    <footer className="Footer">
      <div className="company-info">
        <h3>LoliPop</h3>
        <p>Tuxtla Gutiérrez, Chiapas</p>
        <p>Teléfono: +52  961 370 1357</p>
        <p>Email: loliPop@gmail.com</p>
      </div>
      <div className="social-links">
        <p>Facebook <h4>@LoliPop Official</h4></p>
        <p>Instagram <h4>@Loli_Pop_Official</h4></p>
      </div>
    </footer>
  );
}

export default Footer;