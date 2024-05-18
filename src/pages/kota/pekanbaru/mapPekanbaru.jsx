import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import map from '../../../gambar/map.png';
import pointer from '../../../gambar/pointer.png';
import kunci from '../../../gambar/kunci.png';
import './Pekanbaru.css';
import axios from 'axios';

const MapPekanbaru = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const urlWeather = "https://api.openweathermap.org/data/2.5/weather?lat=0.5262455&lon=101.4515727&appid=ee3caa27713aaf95d3227ca5d5119cf4";
  const [weather, setWeather] = useState([]);
  const [weatherId, setWeatherId] = useState(0);

  const handleWeather = () => {
    return axios.get(urlWeather).then((res) => {
      setWeather(res.data.weather[0].main);
      setWeatherId(res.data.weather[0].id);
    });
  };
  
  useEffect(() => {
    handleWeather();
  }, []);

  const { name, character } = location.state || {};
  const [makananPekanbaru1, setMakanan1] = useState(0);
  const [makananPekanbaru2, setMakanan2] = useState(0);
  const [makananPekanbaru3, setMakanan3] = useState(0);
  const [money, setMoney] = useState(location.state?.money);
  const [health, setHealth] = useState(location.state?.health);

  const handleBuka = () => {
    alert("Map ini sudah selesai dijelajahi.");
  };

  const handleKunci = () => {
    alert("Kota ini masih terkunci!");
  };

  const handlePekanbaru = () => {
    let totalMoney = money;
    totalMoney+=50;
    setMoney(totalMoney);
    setHealth(140);
    alert("Anda mendapatkan uang tambahan sejumlah 50");
    alert("Darah anda bertambah menjadi 140!");
    navigate("/pekanbaru", { state: { name: name, character: character, health: health, money: totalMoney, weather: weather, weatherId: weatherId, makananPekanbaru1: makananPekanbaru1, makananPekanbaru2:makananPekanbaru2, makananPekanbaru3:makananPekanbaru3} });
  };

  return (
    <div>
      <div className='container-map'>
        <img src={map} alt="map" className='map' />
        <img src={pointer} alt="pointer1" className='pointer1' onClick={handleBuka} />
        <img src={pointer} alt="pointer2" className='pointer2' onClick={handleBuka} />
        <img src={pointer} alt="pointer3" className='pointer3' onClick={handlePekanbaru} />
        <img src={kunci} alt="kunci3" className='kunci3 animate-bounce' onClick={handleKunci} />
        <img src={kunci} alt="kunci4" className='kunci4 animate-bounce' onClick={handleKunci} />
        <img src={kunci} alt="kunci5" className='kunci5 animate-bounce' onClick={handleKunci} />
      </div>
    </div>
  );
};

export default MapPekanbaru;
