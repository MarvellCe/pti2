import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import makanan1 from "./gambar/makananPadang1.jpg";
import makanan2 from "./gambar/makananPadang2.jpg";
import makanan3 from "./gambar/makananPadang3.jpg";
import arena from "../../../gambar/arena.png";
import cat2 from "./gambar/cat2-removebg-preview.png";
import bambu from "./gambar/bambu.jpg";
import "./Padang.css";

const Museum = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, character, weather, weatherId } = location.state || {};
  const [money, setMoney] = useState(location.state?.money);
  const [health, setHealth] = useState(location.state?.health);
  const [healthMusuh, setMusuh] = useState(190);
  const [makananPadang1, setMakanan1] = useState(location.state?.makananPadang1);
  const [makananPadang2, setMakanan2] = useState(location.state?.makananPadang2);
  const [makananPadang3, setMakanan3] = useState(location.state?.makananPadang3);
  const [damage, setDamage] = useState(10);
  const [animate, setAnimate] = useState(false);
  const [buff, setBuff] = useState(10);
  const [rainy, setRainy] = useState(false);
  const [sunny, setSunny] = useState(false);
  const [cloud, setCloud] = useState(false);
  const [skill, setSkill] = useState(false);
  const [page, setPage] = useState(false);

  const handleBuff = () => {
    if (weatherId > 199 && weatherId < 623) {
      setRainy(true);
    } else if (weatherId === 800) {
      setSunny(true);
    } else if (weatherId > 700 && weatherId < 805) {
      if (weatherId < 800) {
        setCloud(true);
      }
      if (weatherId > 800 && weatherId < 805) {
        setCloud(true);
      }
    } else {
      alert("error");
    }
  };

  const handleTambah1 = () => {
    if (makananPadang1 < 1) {
      alert("Anda tidak memiliki makanan");
    } else {
      handleBuff();
      if (sunny === true) {
        setMakanan1(makananPadang1 - 1);
        setDamage(buff + 10);
        setHealth(health + buff + 10);
        setSkill(true);
      } else if (cloud === true) {
        setMakanan1(makananPadang1 - 1);
        setDamage(buff - 5);
        setHealth(health + buff - 5);
        setSkill(true);
      } else if (rainy === true) {
        setMakanan1(makananPadang1 - 1);
        setDamage(buff);
        setHealth(health + buff);
        setSkill(true);
      }
    }
  };

  const handleTambah2 = () => {
    if (makananPadang2 < 1) {
      alert("Anda tidak memiliki makanan");
    } else {
      handleBuff();
      if (cloud === true) {
        setMakanan2(makananPadang2 - 1);
        setHealth(health + buff + 10);
        setSkill(true);
      } else if (rainy === true) {
        setMakanan2(makananPadang2 - 1);
        setHealth(health + buff - 5);
        setSkill(true);
      } else if (sunny === true) {
        setMakanan2(makananPadang2 - 1);
        setHealth(health + buff);
        setSkill(true);
      }
    }
  };

  const handleTambah3 = () => {
    if (makananPadang3 < 1) {
      alert("Anda tidak memiliki makanan");
    } else {
      handleBuff();
      if (rainy === true) {
        setMakanan3(makananPadang3 - 1);
        setDamage(buff + 10);
        setSkill(true);
      } else if (sunny === true) {
        setMakanan3(makananPadang3 - 1);
        setDamage(buff - 5);
        setSkill(true);
      } else if (cloud === true) {
        setMakanan3(makananPadang3 - 1);
        setDamage(buff);
        setSkill(true);
      }
    }
  };

  const handleKurang = () => {
    handleAnimate();
        if (skill === true) {
          setMusuh(healthMusuh - damage);
          setHealth(health - 10);
          setSkill(false);
        } else if (skill === false) {
          setMusuh(healthMusuh - 10);
          setHealth(health - 10);
          setSkill(false);
        }
    handleMenang();
    };

  useEffect(() => {
    handleMenang();
  }, []);

  const handleMenang = () => {
    if (health <= 0) {
      alert("KALAH BOS");
      navigate("/character", {
        state: {
          name: name,
        },
      });
    } else if (healthMusuh <= 0) {
      let totalMoney = money;
      let count1 = makananPadang1;
      let count2 = makananPadang2;
      let count3 = makananPadang3;

      if (makananPadang1 > 0) {
        while (count1 > 0) {
          setMakanan1(makananPadang1 - 1);
          count1 -= 1;
          totalMoney += 10;
        }
      }

      if (makananPadang2 > 0) {
        while (count2 > 0) {
          setMakanan2(makananPadang2 - 1);
          count2 -= 1;
          totalMoney += 10;
        }
      }

      if (makananPadang3 > 0) {
        while (count3 > 0) {
          setMakanan3(makananPadang3 - 1);
          count3 -= 1;
          totalMoney += 10;
        }
      }
      setMoney(totalMoney);
      alert("MENANG BOS");
      navigate("/mappalembang", {
        state: {
          name: name,
          character: character,
          health: health,
          money: totalMoney,
        },
      });
  }
};

  const handleAnimate = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 400);
  };

  const handlePage = () => {
    setPage(true);
  };

  return (
    <div>
      {page ? (
        <div className="container-map">
        <img src={arena} alt="map" className="map" />
        <div className="content">
          <div className="flex justify-between mx-28">
            <div className="bg-green-100 w-1/4 text-center p-3 text-xl">
              <h1>{name}</h1>
              <h2>HEALTH : {health}/160</h2>
              <button
                onClick={handleKurang}
                className="hover:bg-red-300 w-full active:ring active:bg-red-400"
              >
                MIAW
              </button>
            </div>

            <div className="bg-green-100 w-1/4 text-center p-3 text-xl">
              <h1>musuh</h1>
              <h2>HEALTH : {healthMusuh}/190</h2>
            </div>
          </div>

          <div>
            <div className="flex justify-between mx-48">
              <img src={character} alt="Character" />
              <img
                src={bambu}
                alt="bambu"
                className={`flex transition-transform duration-400 ${
                  animate ? "transform translate-x-full" : "opacity-0"
                }`}
              />
              <img src={cat2} alt="cat2" />
            </div>
          </div>

          <div className="flex text-center justify-center  place-items-center justify-between mx-44">
            <div>
              <h3>Jumlah yang dimiliki : {makananPadang1}</h3>
              <img src={makanan1} alt="Makanan1" />
              <button
                onClick={handleTambah1}
                className="bg-slate-100 text-xl p-3 hover:bg-slate-400 hover:ring "
              >
                Tambah
              </button>
            </div>
            <div>
              <h3>Jumlah yang dimiliki : {makananPadang2}</h3>
              <img src={makanan2} alt="Makanan2" />
              <button
                onClick={handleTambah2}
                className="bg-slate-100 text-xl p-3 hover:bg-slate-400 hover:ring "
              >
                Tambah
              </button>
            </div>
            <div>
              <h3>Jumlah yang dimiliki : {makananPadang3}</h3>
              <img src={makanan3} alt="Makanan3" />
              <button
                onClick={handleTambah3}
                className="bg-slate-100 text-xl p-3 hover:bg-slate-400 hover:ring "
              >
                Tambah
              </button>
            </div>
          </div>
        </div>
      </div>
      ) : (
        <div>
        <h1>ini cerita kota Padang balbalblabal</h1>
        <button onClick={handlePage}>???</button>
        </div>
      )}
    </div>
  );
};

export default Museum;
