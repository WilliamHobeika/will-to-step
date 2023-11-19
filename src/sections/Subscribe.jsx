import Button from "../components/Button";

const subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col"
      id="contact-us"
    >
      <h3 className="font-palanquin text-4xl leading-[68px] lg:max-w-md font-bold">
        Sign Up for<span className="text-baby-blue"> Updates </span>& Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border-2 sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="subscribe@willtostep.com"
          className="input placeholder:font-bold"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default subscribe;
