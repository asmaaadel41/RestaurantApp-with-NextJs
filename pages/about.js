import React from "react";
import Head from "next/head";
import styles from "../styles/About.module.css";
import Link from "next/link";
import { getSession } from "next-auth/react";

function About() {
  //   var myModal = document.getElementById('myModal')
  // var myInput = document.getElementById('myInput')

  // myModal.addEventListener('shown.bs.modal', function () {
  //   myInput.focus()
  // })

  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <section className={styles.about}>
        <div className="container text-center text-md-start">
          <p className={styles.par}>Home. About</p>
          <h1>About Us</h1>
        </div>
      </section>

      <section>
        <div className="row g-0">
          <div className="col-md-6 g-0">
            <div className={styles.leftSide}>
              <h2 className={styles.storyHead}>
                <Link href="/menu">
                  <a className={styles.aboutMenu}>
                    <span>Check Our Menu</span>
                    <span className={styles.angleRight}>
                      <i className="fa-solid fa-angles-right ms-3"></i>
                    </span>
                  </a>
                </Link>
              </h2>
            </div>
          </div>
          <div className="col-md-6 g-0">
            <div className={styles.rightSide}>
              <div>
                <p className={styles.par}>About Us</p>
                <h1 className="mb-4 text-light">
                  Delicious food provider since 2005
                </h1>
                <p className="mb-5">
                  Good lights it very to above. Days image to sea. Over there
                  seasons and spirit beast in. Greater bearing creepeth very
                  behold fourth night morning seed moved.
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.video}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex justify-content-center align-items-center">
                <div className={styles.videoIcon}>
                  <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i
                      className="fa-solid fa-play fa-2x text-center"
                      style={{ color: "#D8D8D8" }}
                    ></i>
                  </div>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog min-vw-100">
                      <div className="modal-content bg-transparent">
                        <div className="modal-body d-flex justify-content-center align-items-center text-center">
                          <iframe
                            className={styles.frame}
                            src="https://www.youtube.com/embed/pBFQdxA-apI"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackurl=http://localhost:3000/blog`,
        permanent: false,
      },
    };
  }
  return {
    props: {
      data: session ? "list of 100 Meals" : "list of free Meals",
    },
  };
}
