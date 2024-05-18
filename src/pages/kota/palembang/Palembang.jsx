import React, {useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import restoran from './gambar/restoran.jpg';
import hotel from "./gambar/hotel.jpg";
import museum from "./gambar/museum.jpg";

const Palembang = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, character, money, weather, weatherId} = location.state || {};
  const [health, setHealth] = useState(location.state?.health);
  const [makananPalembang1, setMakanan1] = useState(location.state?.makananPalembang1);

  const [makananPalembang2, setMakanan2] = useState(location.state?.makananPalembang2);

  const [makananPalembang3, setMakanan3] = useState(location.state?.makananPalembang3);

  const handleResto = () => {
    navigate("/restoranPalembang", {state: { name: name, character: character, health: health, money: money, weather: weather, weatherId: weatherId,makananPalembang1: makananPalembang1, makananPalembang2:makananPalembang2, makananPalembang3:makananPalembang3} });
  };

  const handleMuseum = () => {
    navigate("/museumPalembang", {state: { name: name, character: character, health: health, money: money, weather: weather, weatherId: weatherId,makananPalembang1: makananPalembang1, makananPalembang2:makananPalembang2, makananPalembang3:makananPalembang3} });
  };

  const handleHotel = () => {
      setHealth(180);
      alert("Anda sudah mengisi tenaga anda, darah anda sudah penuh !!!");
  };

  return (
    <div>
      <div>
      <div className="bg-blue-200">
        <h1>Haloo, {name}</h1>
        <div className="flex p-1">
          <h2 className="bg-red-100 w-32 p-2 text-center">HEALTH : {health}/180</h2>
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

export default Palembang;
