import image1 from "../../../assets/images/team/1.jpg";
import image2 from "../../../assets/images/team/2.jpg";
import image3 from "../../../assets/images/team/3.jpg";

const TeamSection = () => {
  return (
    <div>
      <div className="text-center space-y-5">
        <h4 className="text-3xl text-[#ff3811] font-bold">Team</h4>
        <h2 className="text-5xl font-bold">Meet Our Team</h2>
        <p>
          <small>
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which do not look even slightly
            believable.
          </small>
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="card w-full  bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={image1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p className="font-semibold">Engine Expert</p>
            <div className="card-actions"></div>
          </div>
        </div>

        <div className="card w-full  bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={image2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p className="font-semibold">Engine Expert</p>
            <div className="card-actions"></div>
          </div>
        </div>

        <div className="card w-full  bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={image3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p className="font-semibold">Engine Expert</p>
            <div className="card-actions"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
