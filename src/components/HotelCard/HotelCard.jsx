import "./HotelCard.css";

export const HotelCard = () => {
  return (
    <div className="relative hotelcard-container shadow cursor-pointer">
      <div className="">
        <img
          src="https://a0.muscache.com/im/pictures/miso/Hosting-578733555164036351/original/fc0129d6-02df-4782-92e9-051a881c67a5.jpeg?im_w=720"
          alt="hotelcard"
          className="img"
        />
        <div className="hotelcard-details">
          <div className="d-flex align-center">
            <span className="location">Himachal pradesh</span>
            <span className="rating d-flex align-center"></span>
            <span class="material-icons-outlined">star</span>
            <span>4.3</span>
          </div>

          <p className="hotel-name">Sukoon bag</p>
          <p className="price-details">
            <span className="price">Rs. 3500</span>
            <span>night</span>
          </p>
        </div>
      </div>
      <button className="button btn-wishlist absolute">
        <span class="material-icons favourite cursor">favorite</span>
      </button>
    </div>
  );
};
