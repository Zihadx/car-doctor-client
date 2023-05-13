import image1 from "../../../assets/images/banner/1.jpg";
import image2 from "../../../assets/images/banner/2.jpg";
import image3 from "../../../assets/images/banner/3.jpg";
import image4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={image1} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full left-0 rounded-xl right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <div className="text-white space-y-7 pl-8 md:pl-24">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p>
              <small>
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </small>
            </p>
            <div>
              <button className="btn btn-error mr-4 text-white bg-[#ff3811]">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn bg-[#ff3811] btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img src={image2} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full left-0 rounded-xl right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <div className="text-white space-y-7 pl-8 md:pl-24">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p>
              <small>
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </small>
            </p>
            <div>
              <button className="btn btn-primary bg-[#ff3811] mr-4 text-white">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn bg-[#ff3811] btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img src={image3} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full left-0 rounded-xl right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <div className="text-white space-y-7 pl-8 md:pl-24">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p>
              <small>
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </small>
            </p>
            <div>
              <button className="btn btn-error mr-4 text-white bg-[#ff3811]">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn bg-[#ff3811] btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <img src={image4} className="w-full rou" />
        <div className="absolute flex items-center h-full left-0 rounded-xl right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <div className="text-white space-y-7 pl-8 md:pl-24">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p>
              <small>
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </small>
            </p>
            <div>
              <button className="btn btn-error mr-4 text-white bg-[#ff3811]">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn bg-[#ff3811] btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
