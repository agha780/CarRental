import React, { useState } from "react";

const Home = () => {
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [returnLocation, setReturnLocation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Log the user inputs to the console
    console.log({
      pickupDate,
      returnDate,
      pickupLocation,
      returnLocation,
    });

    // Reset the input field values to empty strings
    setPickupDate("");
    setReturnDate("");
    setPickupLocation("");
    setReturnLocation("");
  };

  return (
    <div className="booking-form">
      <h2>Book your rental car</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="pickup-date">Pickup date:</label>
          <input
            type="date"
            id="pickup-date"
            name="pickup-date"
            value={pickupDate}
            onChange={(event) => setPickupDate(event.target.value)}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="return-date">Return date:</label>
          <input
            type="date"
            id="return-date"
            name="return-date"
            value={returnDate}
            onChange={(event) => setReturnDate(event.target.value)}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="pickup-location">Pickup location:</label>
          <input
            type="text"
            id="pickup-location"
            name="pickup-location"
            placeholder="Enter pickup location"
            value={pickupLocation}
            onChange={(event) => setPickupLocation(event.target.value)}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="return-location">Return location:</label>
          <input
            type="text"
            id="return-location"
            name="return-location"
            placeholder="Enter return location"
            value={returnLocation}
            onChange={(event) => setReturnLocation(event.target.value)}
            required
          ></input>
        </div>
        <div className="form-group">
          <button type="submit">Book Now</button>
        </div>
      </form>
    </div>
  );
};

export default Home;
