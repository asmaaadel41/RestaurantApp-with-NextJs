import Link from "next/link";
import styles from "../../styles/menu.module.css";
import Image from "next/image";
import MealCard from "../../components/MealCards";

function Menu({ meals }) {
  return (
    <>
      <section className={`${styles.menu}`}>
        <div className="container text-center text-md-start">
          <p className={styles.par}>Home.Menu</p>
          <h1>Menu Items</h1>
        </div>
      </section>

      <section className={`py-5 ${styles.meals}`}>
        <div className="container">
          <div className="row">
            <div className={`text-center my-5`}>
              <h2 className={`h1 fw-bold mb-3 text-light`}>
                Most Popular Dishes
              </h2>
              <p>
                Making a reservation at Délicious restaurant is easy and takes
                just a couple of minutes.
              </p>
            </div>
            {meals &&
              meals.map((meal) => {
                return <MealCard meal={meal} key={meal.id} />;
              })}
          </div>
        </div>
      </section>
    </>
  );
}
export default Menu;
export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/meals");
  const data = await res.json();
  return {
    props: {
      meals: data,
    },
  };
}
