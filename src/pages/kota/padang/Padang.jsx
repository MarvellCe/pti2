import React, {useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import restoran from './gambar/restoran.jpg';
import hotel from "./gambar/hotel.jpg";
import museum from "./gambar/museum.jpg";

const Padang = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, character, money, weather, weatherId} = location.state || {};
  const [health, setHealth] = useState(location.state?.health);
  const [makananPadang1, setMakanan1] = useState(location.state?.makananPadang1);

  const [makananPadang2, setMakanan2] = useState(location.state?.makananPadang2);

  const [makananPadang3, setMakanan3] = useState(location.state?.makananPadang3);

  const handleResto = () => {
    navigate("/restoranPadang", {state: { name: name, character: character, health: health, money: money, weather: weather, weatherId: weatherId,makananPadang1: makananPadang1, makananPadang2:makananPadang2, makananPadang3:makananPadang3} });
  };

  const handleMuseum = () => {
    navigate("/museumPadang", {state: { name: name, character: character, health: health, money: money, weather: weather, weatherId: weatherId,makananPadang1: makananPadang1, makananPadang2:makananPadang2, makananPadang3:makananPadang3} });
  };

  const handleHotel = () => {
      setHealth(160);
      alert("Anda sudah mengisi tenaga anda, darah anda sudah penuh !!!");
  };

  return (
    <div>
      <div>
      <div className="bg-blue-200">
        <h1>Haloo, {name}</h1>
        <div className="flex p-1">
          <h2 className="bg-red-100 w-32 p-2 text-center">HEALTH : {health}/160</h2>
          <h2 className="bg-yellow-100 w-32  p-2 text-center">Money : {money}</h2>
          <h2 className="bg-green-100 w-40 p-2 text-center">Weather : {weather}</h2>
          </div>
      </div>
        <img src={character} alt="Character" />
      </div>
      <div className="flex justify-around p-2 ">
        <img src={restoran} alt="Restoran" onClick={handleResto} className=""/>
        <img src={hotel} alt="Hotel" onClick={handleHotel} className=""/>
        <img src={museum} alt="Museum" onClick={handleMuseum} className=""/>
      </div>
    </div>
  );
};

export default Padang;
