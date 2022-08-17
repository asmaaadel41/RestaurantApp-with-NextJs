import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <section className={styles.header}>
        <div className={styles.box}>
          <h1 className={styles.head}>Modern Restaurant</h1>
          <p className="w-50 my-4 ">
            Good lights it very to above. Days image to sea. Over there seasons
            and spirit beast in. Greater bearing creepeth very behold fourth
            night morning seed moved.
          </p>
          <Link href="/reservation" passHref>
            <button className={styles.btn} type="button">
              Reservation
            </button>
          </Link>
        </div>
      </section>
      <section className={styles.enjoy}>
        <div className="container text-center py-5">
          <h1 className={styles.head}>Enjoy Our Event</h1>
          <p className="container px-md-5 mt-4">
            Some of the best memories revolve around good food and family
            {" that's"} why we welcome all of your loved ones, including
            children. children. We have dedicated family seating section t osh
            back of the back of the restaurant.
          </p>
        </div>
      </section>
      <section className={styles.menu}>
        <div className="container text-center">
          <h1 className={styles.menuHead}>Our offers for your occasion</h1>
          <div className="row mb-4">
            <div className="col-md-4">
              <div className={styles.card}>
                <h4 className={styles.cardHead}>Mini pizzas</h4>
                <p>
                  Delectable and bite-sized, mini pizzas are a favorite of all
                  age groups.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.card}>
                <h4 className={styles.cardHead}>Stuffed Mushrooms</h4>
                <p>
                  A kitchen classic, this is the perfect choice if you’ve vegans
                  in your party.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.card}>
                <h4 className={styles.cardHead}>Mini Lamb Burger</h4>
                <p>
                  Although the flavors are slightly unusual, guests always go
                  for seconds.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className={styles.card}>
                <h4 className={styles.cardHead}>Homemade French Fries</h4>
                <p>
                  Surprise your guests with the best french fries they’ve ever
                  tasted.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.card}>
                <h4 className={styles.cardHead}>Duck Confit Quesadillas</h4>
                <p>
                  Sophistication and flavor come together in this perfectly
                  cheesy quesadilla.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.card}>
                <h4 className={styles.cardHead}>Smoked Trout Empanadas</h4>
                <p>Every empanada is filled, made, and cooked by hand.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
