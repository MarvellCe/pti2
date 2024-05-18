import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import map from '../../../gambar/map.png';
import pointer from '../../../gambar/pointer.png';
import kunci from '../../../gambar/kunci.png';
import './Palembang.css';
import axios from 'axios';

const MapPalembang = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const urlWeather = "https://api.openweathermap.org/data/2.5/weather?lat=-2.9888297&lon=104.756857&appid=ee3caa27713aaf95d3227ca5d5119cf4";
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
  const [makananPalembang1, setMakanan1] = useState(0);
  const [makananPalembang2, setMakanan2] = useState(0);
  const [makananPalembang3, setMakanan3] = useState(0);
  const [money, setMoney] = useState(location.state?.money);
  const [health, setHealth] = useState(location.state?.health);

  const handleBuka = () => {
    alert("Map ini sudah selesai dijelajahi.");
  };

  const handleKunci = () => {
    alert("Kota ini masih terkunci!");
  };

  const handlePalembang = () => {
    let totalMoney = money;
    totalMoney+=50;
    setMoney(totalMoney);
    setHealth(180);
    alert("Anda mendapatkan uang tambahan sejumlah 50");
    alert("Darah anda bertambah menjadi 180!");
    navigate("/palembang", { state: { name: name, character: character, health: health, money: totalMoney, weather: weather, weatherId: weatherId, makananPalembang1: makananPalembang1, makananPalembang2:makananPalembang2, makananPalembang3:makananPalembang3} });
  };

  return (
    <div>
      <div className='container-map'>
        <img src={map} alt="map" className='map' />
        <img src={pointer} alt="pointer1" className='pointer1' onClick={handleBuka} />
        <img src={pointer} alt="pointer2" className='pointer2' onClick={handleBuka} />
        <img src={pointer} alt="pointer3" className='pointer3' onClick={handleBuka} />
        <img src={pointer} alt="pointer4" className='pointer4' onClick={handleBuka} />
        <img src={pointer} alt="pointer5" className='pointer5' onClick={handlePalembang} />
        <img src={kunci} alt="kunci5" className='kunci5 animate-bounce' onClick={handleKunci} />
      </div>
    </div>
  );
};

export default MapPalembang;
