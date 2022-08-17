import Link from 'next/link';
import Image from 'next/image';
const MealCards = ({meal}) => {
  return (
    <>
      <div className={`col-md-4 mb-5`}>
        <div className="card text-center border-0">
          <Image
            src={meal.image}
            alt="Pic"
            width={300}
            height={300}
            className="card-img-top border-0"
          />
          <div className="card-body bg-dark d-flex justify-content-center align-items-center flex-column">
            <h4 className="card-title fw-bold text-light">{meal.title}</h4>
            <p className="fs-2">{meal.price}</p>
            <Link href={`/menu/${meal.id}`} passHref>
              <button>More Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MealCards;