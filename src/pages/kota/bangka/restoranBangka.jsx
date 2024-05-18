import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import makanan1 from "./gambar/makananBangka1.jpg";
import makanan2 from "./gambar/makananBangka2.jpg";
import makanan3 from "./gambar/makananBangka3.jpg";
import restoran from "../../../gambar/restoran.png";
import "./Bangka.css";

const Restoran = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, character, health, weather, weatherId} = location.state || {};
  const [makananBangka1, setMakanan1] = useState(location.state?.makananBangka1);

  const [makananBangka2, setMakanan2] = useState(location.state?.makananBangka2);

  const [makananBangka3, setMakanan3] = useState(location.state?.makananBangka3);
  const [money, setMoney] = useState(location.state?.money);

  const handleTambah1 = () => {
    if (money > 0) {
      setMoney(money-10);
      setMakanan1(makananBangka1 + 1);
    } else {
      alert(" Uang kamu tidak cukup :(");
    }
  };

  const handleTambah2 = () => {
    if (money > 0) {
      setMoney(money-10);
      setMakanan2(makananBangka2 + 1);
    } else {
      alert("Uang kamu tidak cukup :(");
    }
  };

  const handleTambah3 = () => {
    if (money > 0) {
      setMoney(money-10);
      setMakanan3(makananBangka3 + 1);
    } else {
      alert("Uang kamu tidak cukup :(");
    }
  };

  const handleBangka = () => {
    navigate("/Bangka", {
      state: { name: name, character: character, health: health, money: money, weather: weather, weatherId: weatherId, makananBangka1: makananBangka1, makananBangka2:makananBangka2, makananBangka3:makananBangka3},
    });
  };

  return (
    <div className="container-map">
      <div className="content">
        <div>
          <h1>Haloo, {name}</h1>
          <div className="flex p-1">
            <h2 className="bg-red-100 w-32 p-2 text-center">
              HEALTH : {health}/200
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
            <h3>Jumlah yang dimiliki : {makananBangka1}</h3>
            <img src={makanan1} alt="Makanan1" className="poto my-4" />
            <div className="grid place-items-center">
              <h3>Tew Fu Sui</h3>
              <h4>+ Damage</h4>
              <h4>+ Health</h4>
              <button
                onClick={handleTambah1}
                className="bg-slate-100 text-xl p-3 hover:bg-slate-400 hover:ring mt-4"
              >Beli</button>
            </div>
          </div>
          <div className="grid place-items-center">
            <h3>Jumlah yang dimiliki : {makananBangka2}</h3>
            <img src={makanan2} alt="Makanan2" className="poto my-4" />
            <div className="grid place-items-center">
              <h3>Teritip</h3>
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
            <h3>Jumlah yang dimiliki : {makananBangka3}</h3>
            <img src={makanan3} alt="Makanan3" className="poto my-4" />
            <div className="grid place-items-center">
              <h3>Mie Koba</h3>
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
        <button onClick={handleBangka}>Back to Home</button>
      </div>
    </div>
  );
};

export default Restoran;
