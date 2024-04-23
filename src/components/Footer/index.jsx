import logo from "/public/logo.png";
import tw from '../../assets/tw.png';
import tel from '../../assets/tel.png';
import styles from "./index.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_content}>
        <img src={logo} alt="" className={styles.footer_logo} />
        <section className={styles.footer_section}>
          <div>
            <div className={styles.footer_section_title}>COMPANY</div>
            <div className={styles.footer_section_link}>
              <a href="">CAREERS</a>
              <a href="">ABOUT US</a>
              <a href="">PRESS KIT</a>
              <a href="">GITBOOK</a>
            </div>
          </div>
          <div style={{margin:'0 130rem'}}>
            <div className={styles.footer_section_title}>PARTICIPATE</div>
            <div className={styles.footer_section_link}>
              <a href="">PROJECTS</a>
              <a href="">QUEST</a>
              <a href="">PORTFOLIO</a>
            </div>
          </div>
          <div>
            <div className={styles.footer_section_title}>HELP</div>
            <div className={styles.footer_section_link}>
              <a href="">SUPPORT</a>
              <a href="">TERMS & CONDITIONS</a>
              <a href="">PRIVACY POLICY</a>
            </div>
          </div>
        </section>
        <div className={styles.footer_community}>
            <div>COMMUNITY</div>
            <div>
                <a href="https://twitter.com/btc_beta" style={{marginRight:'52rem'}}><img src={tw} alt="" /></a>
                <a href="https://t.me/BTCBetaOfficialGroup"><img src={tel} alt="" /></a>
            </div>
        </div>
      </div>
      <div className={styles.footer_copyright}>© 2024 BTC BETA ALL RIGHTS RESERVED.</div>
    </div>
  );
}

export default Footer;
