import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import makanan1 from "./gambar/makananPadang1.jpg";
import makanan2 from "./gambar/makananPadang2.jpg";
import makanan3 from "./gambar/makananPadang3.jpg";
import restoran from "../../../gambar/restoran.png";
import "./Padang.css";

const Restoran = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, character, health, weather, weatherId} = location.state || {};
  const [makananPadang1, setMakanan1] = useState(location.state?.makananPadang1);

  const [makananPadang2, setMakanan2] = useState(location.state?.makananPadang2);

  const [makananPadang3, setMakanan3] = useState(location.state?.makananPadang3);
  const [money, setMoney] = useState(location.state?.money);

  const handleTambah1 = () => {
    if (money > 0) {
      setMoney(money-10);
      setMakanan1(makananPadang1 + 1);
    } else {
      alert(" Uang kamu tidak cukup :(");
    }
  };

  const handleTambah2 = () => {
    if (money > 0) {
      setMoney(money-10);
      setMakanan2(makananPadang2 + 1);
    } else {
      alert("Uang kamu tidak cukup :(");
    }
  };

  const handleTambah3 = () => {
    if (money > 0) {
      setMoney(money-10);
      setMakanan3(makananPadang3 + 1);
    } else {
      alert("Uang kamu tidak cukup :(");
    }
  };

  const handlePadang = () => {
    navigate("/Padang", {
      state: { name: name, character: character, health: health, money: money, weather: weather, weatherId: weatherId, makananPadang1: makananPadang1, makananPadang2:makananPadang2, makananPadang3:makananPadang3},
    });
  };

  return (
    <div className="container-map">
      <div className="content">
        <div>
          <h1>Haloo, {name}</h1>
          <div className="flex p-1">
            <h2 className="bg-red-100 w-32 p-2 text-center">
              HEALTH : {health}/160
            </h2>
            <h2 className="bg-yellow-100 w-32  p-2 text-center">
              Money : {money}
            </h2>
            <h2 className="bg-green-100 w-40 p-2 text-center">
              Weather : {weather}
            </h2>
          </div>
        </div>
        <h1 className="text-5xl text-center">Selamat Datang Di Restoran</h1>

        <div className="flex justify-around m-4">
          <div className="grid place-items-center">
            <h3>Jumlah yang dimiliki : {makananPadang1}</h3>
            <img src={makanan1} alt="Makanan1" className="poto my-4" />
            <div className="grid place-items-center">
              <h3>Teh Talua</h3>
              <h4>+ Damage</h4>
              <h4>+ Health</h4>
              <button
                onClick={handleTambah1}
                className="bg-slate-100 text-xl p-3 hover:bg-slate-400 hover:ring mt-4"
              >Beli</button>
            </div>
          </div>
          <div className="grid place-items-center">
            <h3>Jumlah yang dimiliki : {makananPadang2}</h3>
            <img src={makanan2} alt="Makanan2" className="poto my-4" />
            <div className="grid place-items-center">
              <h3>Keripik Sanjay</h3>
              <h4>+ Health</h4>
              <button
                onClick={handleTambah2}
                className="bg-slate-100 text-xl p-3 hover:bg-slate-400 hover:ring mt-4"
              >
                Beli
              </button>
            </div>
          </div>
          <div className="grid place-items-center">
            <h3>Jumlah yang dimiliki : {makananPadang3}</h3>
            <img src={makanan3} alt="Makanan3" className="poto my-4" />
            <div className="grid place-items-center">
              <h3>Lontong Padang</h3>
              <h4>+ Damage</h4>
              <button
                onClick={handleTambah3}
                className="bg-slate-100 text-xl p-3 hover:bg-slate-400 hover:ring mt-4"
              >
                Beli
              </button>
            </div>
          </div>
        </div>
        <button onClick={handlePadang}>Back to Home</button>
      </div>
    </div>
  );
};

export default Restoran;
