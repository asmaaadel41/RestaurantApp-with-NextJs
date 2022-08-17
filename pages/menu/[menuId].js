import styles from "../../styles/menuId.module.css";
import Image from "next/image";

function MenuId({ meal }) {
  return (
    <>
      <section className={`${styles.menuId}`}>
        <div className="container">
          <div className="row py-5">
            <div className="col-md-6 text-center">
              <Image
                src={meal.image}
                width={400}
                height={400}
                alt="Description"
              />
            </div>
            <div className="col-md-6 text-center text-md-start">
              <h3 className={`text-light mb-2`}>{meal.title}</h3>
              <p>{meal.description}</p>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.mealDesc}`}></section>
    </>
  );
}
export default MenuId;
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:4000/meals/${params.menuId}`);
  const data = await res.json();
  return {
    props: {
      meal: data,
    },
    revalidate: 10, //ISR
  };
}

// function menuId({ meals }) {
//   return (
//     <>
//       <h1>menuId Page</h1>
//       {meals.map((meal) => {
//         return (
//           <div key={meal.id}>
//             <h2>{meal.title}</h2>
//             <p>{meal.description}</p>
//           </div>
//         );
//       })}
//     </>
//   );
// }
// export default menuId;
// export async function getServerSideProps(context) {
//   const { params } = context;
//   const res = await fetch(
//     ` http://localhost:4000/meals?menuId=${params.menuId}`
//   );
//   const data = await res.json();
//   return {
//     props: {
//       meals: data,
//     },
//   };
// }
