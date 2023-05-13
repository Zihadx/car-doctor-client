import image1 from "../../../assets/images/products/1.png";
import image2 from "../../../assets/images/products/2.png";
import image3 from "../../../assets/images/products/3.png";
import image4 from "../../../assets/images/products/4.png";
import image5 from "../../../assets/images/products/5.png";
import image6 from "../../../assets/images/products/6.png";
const Products = () => {
  return (
    <div>
      <div className="text-center space-y-5">
        <h4 className="text-3xl text-[#ff3811] font-bold">Popular Products</h4>
        <h2 className="text-5xl font-bold">Browse Our Products</h2>
        <p>
          <small>
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which do not look even slightly
            believable.
          </small>
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="card w-full  bg-base-100 shadow-xl p-3">
          
          <div className="bg-slate-100 rounded-xl h-[225px] flex items-center">
          <img src={image1} alt="Shoes" className="rounded-xl h-[153px] w-[156px] mx-auto p-2" />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p className="font-semibold text-[#ff3811]">$20.00</p>
            <div className="card-actions"></div>
          </div>
        </div>

        <div className="card w-full  bg-base-100 shadow-xl p-3">
        <div className="bg-slate-100 rounded-xl h-[225px] flex items-center">
          <img src={image2} alt="Shoes" className="rounded-xl h-[153px] w-[156px] mx-auto p-2" />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Air Filter</h2>
            <p className="font-semibold text-[#ff3811]">$20.00</p>
            <div className="card-actions"></div>
          </div>
        </div>

        <div className="card w-full  bg-base-100 shadow-xl p-3">
        <div className="bg-slate-100 rounded-xl h-[225px] flex items-center">
          <img src={image3} alt="Shoes" className="rounded-xl h-[153px] w-[156px] mx-auto p-2" />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Cools Led Light</h2>
            <p className="font-semibold text-[#ff3811]">$20.00</p>
            <div className="card-actions"></div>
          </div>
        </div>

        <div className="card w-full  bg-base-100 shadow-xl p-3">
        <div className="bg-slate-100 rounded-xl h-[225px] flex items-center">
          <img src={image4} alt="Shoes" className="rounded-xl h-[153px] w-[156px] mx-auto p-2" />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Cools Led Light</h2>
            <p className="font-semibold text-[#ff3811]">$20.00</p>
            <div className="card-actions"></div>
          </div>
        </div>

        <div className="card w-full  bg-base-100 shadow-xl p-3">
        <div className="bg-slate-100 rounded-xl h-[225px] flex items-center">
          <img src={image5} alt="Shoes" className="rounded-xl h-[153px] w-[156px] mx-auto p-2" />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Cools Led Light</h2>
            <p className="font-semibold text-[#ff3811]">$20.00</p>
            <div className="card-actions"></div>
          </div>
        </div>

        <div className="card w-full  bg-base-100 shadow-xl p-3">
        <div className="bg-slate-100 rounded-xl h-[225px] flex items-center">
          <img src={image6} alt="Shoes" className="rounded-xl h-[153px] w-[156px] mx-auto p-2" />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Cools Led Light</h2>
            <p className="font-semibold text-[#ff3811]">$20.00</p>
            <div className="card-actions"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
