import { star } from "../assets/icons";

const PopularProductCard = ({ imageURL, name, price, rate }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <div className="flex justify-center items-center bg-card bg-center bg-cover w-full sm:w-full h-[240px] rounded-xl max-sm:p-4 cursor-pointer">
        <img
          src={imageURL}
          alt={name}
          width={300}
          height={233}
          className="object-contain hover:-translate-y-4 ease-in-out duration-300"
        />
      </div>
      <div className="ml-2 mt-4 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={30} height={30} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">({rate})</p>
      </div>
      <h3 className="ml-2 mt-2 text-xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="ml-2 mt-2 font-semibold font-montserrat text-baby-blue text-xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
