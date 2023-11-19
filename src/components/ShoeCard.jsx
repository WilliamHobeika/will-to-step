const ShoeCard = ({ imageURL, changeBigShoeImage, bigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImage !== imageURL.bigShoe) {
      changeBigShoeImage(imageURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-4 rounded-xl ${
        bigShoeImage === imageURL.bigShoe ? "border-gray-600" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imageURL.bigShoe}
          alt="shoe collection"
          width={200}
          height={133}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
