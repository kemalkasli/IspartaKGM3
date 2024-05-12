// import config from "../../config.json";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Point.css";
import { useParams, useNavigate } from "react-router-dom";
import config from "../config.json"

const Post = () => {
  
  const navigate = useNavigate();
  const {c_id} = useParams();
  const [construction, setConstruction] = useState({

    tarih:"",
    talep_no:"",
    sube_no:"",
    bolge_no:"",
    kkn:"",
    km:"",
    tur:"",
    sahip:"",
    durum:""

  });

  useEffect(() => {
    if (!c_id) return;
    const fetchPoint = async () => {
      const { data } = await axios.get(`${config.apiUrl2}/${c_id}`);
       setConstruction(data);
    };
    fetchPoint();  }, []);

  const handleChange = (e) => {
    const constructionClone = { ...construction };
    constructionClone[e.target.name] = e.target.value;
    setConstruction(constructionClone);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (c_id === "new") {
      await axios.post(config.apiUrl2, construction);
      return navigate("/construction");
    } else {
      await axios.put(`${config.apiUrl2}/${c_id}`, construction);
      return navigate("/construction");
    }
  }; 

  return (
    <div className="post__wrapper">
      <div className="container">
        <form className="post">
          
          <input
            type="text"
            placeholder="Tarih Giriniz..."
            name="tarih"
            value={construction.tarih}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Talep No Giriniz..."
            name="talep_no"
            value={construction.talep_no}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Şube Cevap Yazı Nosu Giriniz..."
            name="sube_no"
            value={construction.sube_no}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Bölge Cevap Yazı Nosu Giriniz..."
            name="bolge_no"
            value={construction.bolge_no}
            onChange={handleChange}
          />


          <input
            type="text"
            placeholder="KKN No Giriniz..."
            name="kkn"
            value={construction.kkn}
            onChange={handleChange}
          />
            <input
            type="text"
            placeholder="Km / Mevki  Giriniz..."
            name="km"
            value={construction.km}
            onChange={handleChange}
          />

         <input
            type="text"
            placeholder="Tesis Tipini Giriniz..."
            name="tur"
            value={construction.tur}
            onChange={handleChange}
          />

            <input
            type="text"
            placeholder="Sahip Bilgisi Giriniz..."
            name="sahip"
            value={construction.sahip}
            onChange={handleChange}
          />

            <input
            type="text"
            placeholder="Tesisin Uygunluk Durumunu  Giriniz..."
            name="durum"
            value={construction.durum}
            onChange={handleChange}
          />

          <button onClick={handleSubmit} className="btn btn-primary">
            {c_id=== "new" ? "Gönder" : "Güncelle"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
