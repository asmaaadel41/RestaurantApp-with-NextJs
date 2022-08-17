import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className={styles.navbar}>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <a className="navbar-brand" href="#">
              SaFood
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link href="/home">
                    <a className="nav-link active" aria-current="page">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about">
                    <a className="nav-link active">About</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/menu">
                    <a className="nav-link active">Menu</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/dashboard">
                    <a className="nav-link active">Dashboard</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/api/auth/signout">
                    <a
                      className="nav-link active"
                      onClick={(e) => {
                        e.preventDefault();
                        signOut();
                      }}
                    >
                      Sign Out
                    </a>
                  </Link>
                </li>
              </ul>
              <button className={styles.btnReservation}>
                <Link href="/reservation">
                  <a className="nav-link active text-light p-0">Reservation</a>
                </Link>
              </button>
            </div>
          </div>
        </nav>
      </div>
    )
  }
  return (
    <div className={styles.navbar}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            SaFood
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/home">
                  <a className="nav-link active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
{/*               
              <li className="nav-item">
                <Link href="/menu">
                  <a className="nav-link active">Menu</a>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link href="/dashboard">
                  <a className="nav-link active">Dashboard</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/api/auth/signin">
                  <a
                    className="nav-link active"
                    onClick={(e) => {
                      e.preventDefault();
                      signIn("github");
                    }}
                  >
                    Sign In
                  </a>
                </Link>
              </li>
            </ul>
            <button className={styles.btnReservation}>
              <Link href="/reservation">
                <a className="nav-link active text-light p-0">Reservation</a>
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
