/* eslint-disable react/prop-types */
const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Shoes"
          className="p-3 rounded-xl max-h-[220px] w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center">
          <p className="text-[#ff3811] font-bold">Price: {price} $</p>
          <button className="btn btn-primary bg-[#ff3811]">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
