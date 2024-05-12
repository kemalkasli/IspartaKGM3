import React, { useState, useEffect } from "react";
import { useParams,Link, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config.json";
import Select from 'react-select';
import Combobox from "react-widgets/Combobox";
import autocomplete from 'autocompleter';


const ConstructionScreen = ( ) => {
  var sayac=0;
  var  haritaURL="https://yandex.com.tr/map-widget/v1/?um=constructor%3A354b44a6d96460aa3051160fed19754acf7420f40516480509e8913397e0c190&amp;source=constructor";

   const navigate = useNavigate();
   const [constructions, setcostructions] = useState([]);

   const fetchPosts = async () => {
    const res = await axios.get(config.apiUrl2);
    setcostructions(res.data);   };

   useEffect(() => {  fetchPosts();  }, []);
   
  const handleDelete = async (construction) => {
    setcostructions(constructions.filter((item) => item._id !== construction._id));
    await axios.delete(`${config.apiUrl2}/${construction._id}`);
  };

const [value, setValue] = useState(" ")
  var filteredConstructions=constructions.filter(item=>{return item.kkn===value});
  if(value==" ") {filteredConstructions=constructions;}  
  
  return (  

    <>

<div className="container">
        <section className="tm-section-head" id="top">
            <header id="header" className="text-center tm-text-gray">
                <h1>KGM   13.Bölge Müdürlüğü (135. Şube Şefliği)</h1>
            </header>
           </section>

        <section className="row" id="tm-section-1">
            <div className="col-lg-12 tm-slider-col">
                <div className="tm-img-slider">
                     <div className="tm-img-slider-item" href="/2103/img/gallery-img-04.jpg">
                       
                        <img src="/img/30.jpg" alt="Image" className="tm-slider-img"/>

                    </div>
                </div>
            </div>
        </section>
    </div>


  <p style={{textAlign:'center',fontSize:'24px' }}><b> Yol Boyu Ticari Tesisleri Listesi  </b></p>
  

  <div> 
    
    

    </div>

  <div style={{textAlign:'center',fontSize:'20px' }}>


  <div> <label htmlFor="kkn">Kontrol Kesim Seçiniz.... &emsp;</label>

  <select id="kkn" value={value} onChange={(e)=>setValue(e.target.value)}>
    <option value=" ">&emsp; Tümü </option>
    <option value="320-06">&emsp; 320-06 &emsp;</option>
    <option value="320-07">&emsp; 320-07</option>
    <option value="330-09">&emsp; 330-09</option>
    <option value="330-10">&emsp; 330-10</option>
    <option value="685-01">&emsp; 685-01</option>
    <option value="685-02">&emsp; 685-02</option>
    <option value="685-03">&emsp; 685-03</option>
    <option value="685-04">&emsp; 685-04</option>
    <option value="695-06">&emsp; 695-06</option>
    <option value="32-01">&emsp; 32-01</option>
    <option value="32-02">&emsp; 32-02</option>
    <option value="32-03">&emsp; 32-03</option>
    <option value="32-04">&emsp; 32-04</option>
    <option value="32-06">&emsp; 32-06</option>
    <option value="32-07">&emsp; 32-07</option>
    <option value="32-08">&emsp; 32-08</option>
    <option value="32-09">&emsp; 32-09</option>
    <option value="32-25">&emsp; 32-25</option>
    <option value="32-26">&emsp; 32-26</option>
    <option value="32-50">&emsp; 32-50</option>
  </select>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;

  <button           onClick={() => navigate("/construction/newConstruction")}   className="btn btn-success mb-4"
        >  Yeni Tesis Ekle  </button> </div>
  
   </div>
  <div style={{textAlign:'left', margin:'auto',width:'68%',fontSize:'16px'}}>
        
  <table className="table table-hover">
    
    <thead>
  <tr>
    <th scope="col">Sıra</th>
    <th scope="col">Tarih </th>
    <th scope="col">Talep No</th>
    <th scope="col">Şube No</th>
    <th scope="col">Bölge No</th>
    <th scope="col">KKN</th>
    <th scope="col">KM</th>
    <th scope="col">Tür</th>
    <th scope="col">Sahip</th>
    <th scope="col">Durum</th>
  </tr>
</thead>


<tbody>
            

            {filteredConstructions.map((construction) => (
              <tr key={construction._id}>
               <td>{++sayac}</td>
               <td>{construction.tarih}</td>  
               <td>{construction.talep_no}</td> 
               <td>{construction.sube_no}</td> 
               <td>{construction.bolge_no}</td> 
               <td>{construction.kkn}</td> 
               <td>{construction.km}</td> 
               <td>{construction.tur}</td> 
               <td>{construction.sahip}</td> 
               <td>{construction.durum}</td> 
               
                <td><button
                    onClick={() => navigate(`/construction/${construction._id}`)}
                    className="btn btn-primary"
                  > Güncelle </button></td>


                <td>
                  <button
                    onClick={() => handleDelete(construction)}
                    className="btn btn-danger" >  Kaldır </button></td>

            
              </tr>
            ))}

</tbody>
 </table>   


 <div style={{textAlign:'center' }}>	
		<br/>
		<p  style={{textAlign:'center',fontSize:'24px' }}><b>Karayolları 135. (ISPARTA) Şube Şefliği </b></p>
		<br/>
	<div>
		
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2651.8642925066074!2d30.557139030397177!3d37.775603924003946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c5b5c48c736e13%3A0xe514573afea0e10e!2zS2FyYXlvbGxhcsSxIDEzNS4gxZ51YmVzaSDFnmVmbGnEn2k!5e0!3m2!1str!2str!4v1658214110294!5m2!1str!2str" width="68%" height="300" 
         style={{border:'0' }}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</div>

<p style={{textAlign:'center',fontSize:'24px' }}><b>KGM 135.Şube Şefliği-Isparta</b></p>
		<div>
		
             <footer className="mt-5">
            <p className="text-center"> © 2022 KGM 135. Şube Şefliği </p>
        </footer>
    </div>
</div>

    </>
 );
};

export default ConstructionScreen;
