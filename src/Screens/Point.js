// import config from "../../config.json";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Point.css";
import { useParams, useNavigate } from "react-router-dom";
import config from "../config.json"

const Post = () => {
  
  const navigate = useNavigate();
  const {p_id} = useParams();
  const [point, setPoint] = useState({
    kkn:"",
    km:"",
    explain:"",
    location:"",
    image:"",
  });

  useEffect(() => {
    if (!p_id) return;
    const fetchPoint = async () => {
      const { data } = await axios.get(`${config.apiUrl}/${p_id}`);
       setPoint(data);
    };
    fetchPoint();  }, []);

  const handleChange = (e) => {
    const pointClone = { ...point };
    pointClone[e.target.name] = e.target.value;
    setPoint(pointClone);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (p_id === "new") {
      await axios.post(config.apiUrl, point);
      return navigate("/");
    } else {
      await axios.put(`${config.apiUrl}/${p_id}`, point);
      return navigate("/");
    }
  }; 

  return (
    <div className="post__wrapper">
      <div className="container">
        <form className="post">
          
          <input
            type="text"
            placeholder="KKN Giriniz..."
            name="kkn"
            value={point.kkn}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="KM Giriniz..."
            name="km"
            value={point.km}
            onChange={handleChange}
          />

            <input
            type="text"
            placeholder="Açıklama Giriniz..."
            name="explain"
            value={point.explain}
            onChange={handleChange}
          />

         <input
            type="text"
            placeholder="Konum Linki Giriniz..."
            name="location"
            value={point.location}
            onChange={handleChange}
          />

            <input
            type="text"
            placeholder="Foto Linki Giriniz..."
            name="image"
            value={point.image}
            onChange={handleChange}
          />


          <button onClick={handleSubmit} className="btn btn-primary">
            {p_id === "new" ? "Gönder" : "Güncelle"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
