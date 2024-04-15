import { useState, useEffect } from "react";
import "./SellCar.css";
import Resizer from "react-image-file-resizer";

import axios from "axios";

const SellCar = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState();
  const [engineSize, setEngineSize] = useState();
  const [bhp, setBhp] = useState();
  const [doors, setDoors] = useState();
  const [mileage, setMileage] = useState();
  const [ownerAmount, setOwnerAmount] = useState();
  const [price, setPrice] = useState();
  const [imageBase64, setImageBase64] = useState("");

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        1000,
        500,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  const handleImageChange = async () => {
    const selectedFile =
      document.getElementById("image-input").files[0];
    try {
      const image64 = await resizeFile(selectedFile);
      setImageBase64(image64);
    } catch (error) {
      alert("Error with image");
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      await axios.post(
        "http://localhost:3000/cars/createCar",
        {
          make,
          model,
          year,
          engineSize,
          bhp,
          doors,
          mileage,
          ownerAmount,
          price,
          imageBase64,
        },
        config
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="sellCarForm" onSubmit={submitForm}>
        <label className="formLabel">Make</label>
        <input
          required
          type="text"
          className="formInput"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          placeholder="Make"
        />
        <label className="formLabel">Model</label>
        <input
          required
          type="text"
          className="formInput"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Model"
        />
        <label className="formLabel">Year</label>
        <input
          required
          type="number"
          className="formInput"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Year"
        />
        <label className="formLabel">Engine size</label>
        <input
          required
          type="number"
          className="formInput"
          value={engineSize}
          onChange={(e) => setEngineSize(e.target.value)}
          placeholder="Engine Size"
        />
        <label className="formLabel">bhp</label>
        <input
          required
          type="number"
          className="formInput"
          value={bhp}
          onChange={(e) => setBhp(e.target.value)}
          placeholder="bhp"
        />
        <label className="formLabel">Amount of Doors</label>
        <input
          required
          type="number"
          className="formInput"
          value={doors}
          onChange={(e) => setDoors(e.target.value)}
          placeholder="Doors"
        />
        <label className="formLabel">Mileage</label>
        <input
          required
          type="number"
          className="formInput"
          value={mileage}
          onChange={(e) => setMileage(e.target.value)}
          placeholder="Mileage"
        />
        <label className="formLabel">
          Amount of owners
        </label>
        <input
          required
          type="number"
          className="formInput"
          value={ownerAmount}
          onChange={(e) => setOwnerAmount(e.target.value)}
          placeholder="Amount of Owners"
        />
        <label className="formLabel">Price(£)</label>
        <input
          required
          type="number"
          className="formInput"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />
        <input
          required
          type="file"
          id="image-input"
          className="fileInput"
          accept="image/*"
          onChange={handleImageChange}
        />
        <input
          required
          type="submit"
          className="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default SellCar;
