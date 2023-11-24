import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <div>
      <main>
        {/* Content Goes Here */}
      </main>
      <footer>
        <div id="footer_content">
          <div id="footer_contacts">
            <h1>Logo</h1>
            <p>It's all about your dreams.</p>

            <div id="footer_social_media">
              <a href="#" className="footer-link" id="instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="#" className="footer-link" id="facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a href="#" className="footer-link" id="whatsapp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <ul className="footer-list">
            <li>
              <h3>Usuário</h3>
            </li>
            <li>
              <a href="#" className="footer-link">Paciente</a>
            </li>
            <li>
              <a href="#" className="footer-link">Blog</a>
            </li>
            <li>
              <a href="#" className="footer-link">Sobre</a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <h3>Produtos</h3>
            </li>
            <li>
              <a href="#" className="footer-link">App</a>
            </li>
            <li>
              <a href="#" className="footer-link">Desktop</a>
            </li>
            <li>
              <a href="#" className="footer-link">Cloud</a>
            </li>
          </ul>

          <div id="footer_subscribe">
            <h3>Contato</h3>

            <p>
              Informe seu e-mail e entraremos em contato.
            </p>

            <div id="input_group">
              <input type="email" id="email" />
              <button>
                <i className="fa-regular fa-envelope"></i>
              </button>
            </div>
          </div>
        </div>

        <div id="footer_copyright">
          &#169;
          2023 all rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;