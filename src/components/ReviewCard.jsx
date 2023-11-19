import { star } from "../assets/icons";

const ReviewCard = ({ imageURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imageURL}
        alt="customer"
        className="rounded-full object-cover w-[220px] h-[220px]"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img src={star} width={30} height={30} className="object-contain m-0" />
        <p className="text-xl text-slate-gray font-montserrat">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
