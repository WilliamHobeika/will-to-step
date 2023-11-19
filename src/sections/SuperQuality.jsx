import { shoe9, shoe10, shoe11 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You <span className="text-baby-blue inline-block mt-3">Super</span>
          <span className="text-baby-blue inline-block mt-3">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Our meticulously produced footwear ensures exceptional comfort and style,
          elevating your experience by offering you with unrivaled quality, innovation,
          and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center flex-col">
        <img
          src={shoe10}
          alt="about-us-shoe"
          width={700}
          height={622}
          className="object-contain relative z-20 translate-y-24 max-lg:translate-y-32 max-md:translate-y-28 max-sm:translate-y-20 cursor-pointer"
        />
        <img
          src={shoe9}
          alt="about-us-shoe"
          width={700}
          height={622}
          className="object-contain absolute z-10 -top-20 max-lg:-top-12 max-md:-top-12 max-sm:-top-1 cursor-pointer"
        />
        <img
          src={shoe11}
          alt="about-us-shoe"
          width={700}
          height={622}
          className="object-contain absolute z-0 -top-52 max-lg:-top-40 max-md:-top-36 max-sm:-top-16 cursor-pointer"
        />
        <h1 className="font-bold font-palanquin text-4xl mt-8 max-sm:text-3xl text-center">
          The "Travis Scott" Collection
        </h1>
      </div>
    </section>
  );
};

export default SuperQuality;
