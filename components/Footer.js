import Link from 'next/link'
import styles from '../styles/Footer.module.css'
function Footer() {
    return (<>    
      <footer className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5 className={styles.footerHead}>SaFood</h5>
              <p>
                We’re a catering business serving the Greater area, and making
                sure your event is remembered for all the delicious food.
              </p>
              <div className="social mt-4">
                <ul className="list-unstyled d-flex justify-content-start align-items-center">
                  <li className="me-4">
                    <a className={styles.menuLink}>
                      <i className="fa-brands fa-facebook-f lg"></i>
                    </a>
                  </li>
                  <li className="me-4">
                    <a className={styles.menuLink}>
                      <i className="fa-brands fa-twitter lg"></i>
                    </a>
                  </li>
                  <li className="me-4">
                    <a className={styles.menuLink}>
                      <i className="fa-brands fa-linkedin-in lg"></i>
                    </a>
                  </li>
                  <li className="me-4">
                    <a className={styles.menuLink}>
                      <i className="fa-brands fa-instagram lg"></i>
                    </a>
                  </li>
                  <li className="me-4">
                    <a className={styles.menuLink}>
                      <i className="fa-brands fa-pinterest-p lg"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-2">
                  <h5 className={styles.footerHead}>Quick links</h5>
                  <ul className="list-unstyled">
                    <li className={styles.line}>
                      <Link href="/home">
                        <a className={styles.menuLink}>Home</a>
                      </Link>
                    </li>
                    <li className={styles.line}>
                      <Link href="/about">
                        <a className={styles.menuLink}>About</a>
                      </Link>
                    </li>
                    <li className={styles.line}>
                      <Link href="/menu">
                        <a className={styles.menuLink}>Menu</a>
                      </Link>
                    </li>
                    <li className={styles.line}>
                      <Link href="/menu/category">
                        <a className={styles.menuLink}>Category</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-5">
                  <h5 className={styles.footerHead}>Contact us</h5>
                  <ul className="list-unstyled">
                    <li className="d-flex justify-content-space-between">
                      <div className="me-3">
                        <i className="fa-solid fa-location-dot"></i>
                      </div>
                      <p>
                        203 Fake St. Mountain View, 10th of Ramadan City, Egypt
                      </p>
                    </li>
                    <li className="d-flex">
                      <div className="me-3">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                      <p> +2 34 567 (8910)</p>
                    </li>
                    <li className="d-flex">
                      <div className="me-3">
                        <i className="fa-solid fa-envelope"></i>
                      </div>
                      <Link href="#">
                        <a className={styles.menuLink}>info@asmaaadel.com</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-5">
                  <h5 className={styles.footerHead}>Subscribe newsletter</h5>
                  <p>
                    Subscribe newsletter to get all updates about discount and
                    offers.
                  </p>
                  <div>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="Email Address"
                    />
                    <div className={styles.sendMail}>
                      <i className="fa-solid fa-paper-plane"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center text-center align-items-sm-center mt-5">
            <p>
              Copyright &copy; 2022 All rights reserved | This template is made
              by <span className={styles.heartShape}></span>
              <a className={styles.menuLink}>Asmaa Adel</a>
            </p>
          </div>
        </div>
      </footer>

    </>)
}
export default Footer;