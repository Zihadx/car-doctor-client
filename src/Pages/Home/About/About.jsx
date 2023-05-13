import image1 from "../../../assets/images/about_us/person.jpg";
import image2 from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen justify-between">
      <div className="hero-content flex-col lg:flex-row gap-8">
        <div className="md:w-1/2 relative">
          <img src={image1} className="w-3/4 h-[460px] rounded-lg shadow-2xl" />
          <img
            src={image2}
            className="w-1/2 h-[320px] absolute right-5 top-1/2 border-white border-8 rounded-lg shadow-2xl"
          />
        </div>
        <div className="md:w-1/2 space-y-5">
            <h3 className="text-3xl text-[#ff3811] font-bold">About us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum <br /> available, but
            the majority have suffered alteration in some <br /> form, by injected
            humour, or randomised words which do not <br /> look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected <br />
            humour, or randomised words which do not look even slightly <br />
            believable.
          </p>
          <button className="btn btn-primary bg-[#ff3811]">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
