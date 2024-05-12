import React, { useState, useEffect } from "react";
import { useParams,Link, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config.json"

const DetailScreen = ( ) => {
   // const navigate = useNavigate();
    
  //  const [formData, setFormData] = useState({      email: "",  password: "",    });

   let {id} = useParams(); // kkno <h1> {kkn} </h1>
   const kkn= id.substring(1,id.length);
   var sayac=0;
 
      var yoladi1,yoladi2,haritaURL, kkno;         
   switch(kkn){
      case'320-06':{
          yoladi1="32-06  (Gelendost_ŞKaraağaç)(330-10)DYA-(320-07)DYA Yalvaç";
          yoladi2="320-06 Uluborlu-Senirkent  Yolu";
          haritaURL="https://yandex.com.tr/map-widget/v1/?um=constructor%3A4d2793cf2e0d906800cb1a5592c368fbee59eda80c05af0d9e49165d69ff2284&amp;source=constructor";
          kkno="320-06";                  break;}
         
         case'320-07':{
          yoladi1="(32-04/32-02) DYA (Akşehir-Beyşehir) (695-05-06)DYA";
          yoladi2="320-07 Senirkent- Kumdanlı- Yalvaç Yolu";
          haritaURL="https://yandex.com.tr/map-widget/v1/?um=constructor%3A23e02ab2fef3b2880793f35c9bdc53e009baae948dc31b5acfe3d7320167f7e1&amp;source=constructor";
          kkno="320-07";                  break;}   
         
         case'330-09':{
         yoladi1="(685-01)DYA -Sütçüler(32-08) İYA";
         yoladi2="330-09 Isparta- Eğirdir Yolu";
         haritaURL="https://yandex.com.tr/map-widget/v1/?um=constructor%3A92a5cd03fef4dde2e4b60688fddb48b73d2dd2053a213fecb304e749a5adc798&amp;source=constructor";
         kkno="33-09";                  break;}
            
         case'330-10':{
          yoladi1="Sütçüler(32-08)İYA-(Şarkikaraağaç-Yalvaç)(695-06) DYA";
          yoladi2="330-10 Eğirdir-Gelendost Yolu";
          haritaURL="https://yandex.com.tr/map-widget/v1/?um=constructor%3A11fa0fe9f7c782edd1427f4f8146fecab0dc3105d0527a1279d8f206b213d124&amp;source=constructor";
          kkno="330-10";                  break;}
                             
         case'685-01':{
          yoladi1="(Keçiborlu-Burdur) (650-11)DYA-(Isparta-Burdur) İl Sınırı";
          yoladi2="685-01 Baladız -Isparta Yolu";
          haritaURL="https://yandex.com.tr/map-widget/v1/?um=constructor%3Adad90397921314b8762ed9781f8038921f50c71a594b556e2cf48468df6b1397&amp;source=constructor";
          kkno="685-01";                  break;}
                     
         case'685-02':{
          yoladi1="(Isparta-Burdur) İl Sınırı -(Burdur-Antalya)(650-12-13)DYA";
          yoladi2="685-02 Isparta-Ağlasun Yolu";
          haritaURL="https://yandex.com.tr/map-widget/v1/?um=constructor%3Adbb0066b6359136091b113eb56a8f3059799394e9c5096b148badc1b6b92284d&amp;source=constructor";
          kkno="685-02";                  break;}
                 
         case'685-03':{
          yoladi1="(Isparta-Ağlasun)(685-01)-(Isparta-Burdur) İl Sınırı";
          yoladi2="685-03 Isparta-Antalya Dereboğazı Yolu";
          haritaURL="https://yandex.com.tr/map-widget/v1/?um=constructor%3A9e6e985c326c8870b1af7d6814f40dd4db3e1eb6facdab354ecbed70728f8502&amp;source=constructor";
          kkno="685-03";                  break;}
                     
         case'685-04':{
          yoladi1="(Isparta-Burdur)İl Sınırı- (Burdur-Antalya)İl Sınırı";
          yoladi2="685-04 Isparta-Antalya Dereboğazı Yolu";
          haritaURL="https://yandex.com.tr/map-widget/v1/?um=constructor%3Aeec6ca4f44a4deee8a4623a53fe8c507e4fd5df1e817efe33533c0c7a71b5b08&amp;source=constructor";
          kkno="685-04";                  break;}
                     
         case'695-06':{
          yoladi1="Yalvaç(32-07)DYA-(Isparta-Konya) İl Sınırı";
          yoladi2="695-06 Isparta-Konya Yolu";
          haritaURL="https://yandex.com.tr/map-widget/v1/?um=constructor%3A916e92f1038b057905697c3d04fda3e38d27e86f087f1603d3102326611ddab2&amp;source=constructor";
          kkno="695-06";                  break;}
         
         case'32-01':{
          yoladi1="(Eğirdir-Isparta) (330-09) -Isparta(685-01) DYA";
          yoladi2="32-01 Atabey Gönen Yolu";
          haritaURL="https://yandex.com.tr/map-widget/v1/?um=constructor%3A4ec43e9646dcbda3feeb84f356548adaf387df3481c889cd745d118a08955234&amp;source=constructor";
          kkno="32-01";       break;}

         case'32-02':{
          yoladi1="(Eğirdir-Isparta) (330-09) -(Senirkent-Yalvaç) (320-06-07)DYA";
          yoladi2="32-02 Barla Senirkent Yolu";
          haritaURL="https://yandex.com.tr/map-widget/v1/?um=constructor%3A45ac1f48419d22ad98637cdb3e9c18d6faf456dcbcfdb275f468cd0bcccd5eff&amp;source=constructor";
          kkno="32-02";       break;}

         case'32-03':{
          yoladi1="(32-02)İYA -Barla";
          yoladi2="32-03 Barla Yolu";
          haritaURL="https://yandex.com.tr/map-widget/v1/?um=constructor%3A1eb58818e0c5744142dafe9c43ac63e0a468d4136c2e12f3ea3b1ad99fa93edc&amp;source=constructor";
          kkno="32-03";       break;}              
               
         case'32-04':{
          yoladi1="(Senirkent-Yalvaç)(320-06-07)DYA-(Isparta-Afyon) İl Sınırı(Şuhut Yolu)";
          yoladi2="32-04 Afyon Şuhut- Bozdurmuş Yolu";
          const haritaURL="https://yandex.com.tr/map-widget/v1/?um=constructor%3A13b387b808692dcb3df0fd4d33d6ed81b985a430df8bd467bc8c2eaf9db39977&amp;source=constructor";
          const kkno="32-04";       break;}

         case'32-06':{
          yoladi1="(Gelendost_ŞKaraağaç)(330-10)DYA-(320-07)DYA Yalvaç";
          yoladi2="32-06 Yalvaç Yolu";
          
          haritaURL="https://yandex.com.tr/map-widget/v1/?um=constructor%3A53fb3f0db11b6f5f0761df80d9bb41373645ba7550ab0e2da834c8e0ac24576b&amp;source=constructor";
          kkno="32-06";       break;}

         case'32-07':{
          yoladi1="(Yalvaç- Beyşehir) (695-06) - Yenişarbademli";
          yoladi2="32-07 Yenişarbademli Yolu";
          haritaURL="https://yandex.com.tr/map-widget/v1/?um=constructor%3Aa16a374d52b8a91a305ce04a0b66f1f7edbbdb69415668b9415dfdb7760d29e4&amp;source=constructor";
          kkno="32-07";       break;}

         case'32-08':{
          yoladi1="(Isparta-Yalvaç)(330-09)DYA-Sütçüler";
          yoladi2="32-08 Sütçüler Yolu";
          haritaURL="https://yandex.com.tr/map-widget/v1/?um=constructor%3A6afd01183c8ab38c04c647d1f15acbd6f255f47990f272ae5382ec2cee4f8bc8&amp;source=constructor";
          kkno="32-08";       break;}

         case'32-09':{
          yoladi1="Sütçüler(32-08)İYA - Aksu";
          yoladi2="32-09 Aksu Yolu";
          haritaURL="https://yandex.com.tr/map-widget/v1/?um=constructor%3A7e2c3e9b31587d7fece311523c07362d689783ac18058e9fc38819f77654f3d4&amp;source=constructor";
          kkno="32-09";       break;}

         case'32-10':{
          yoladi1="(Konya-Isparta) İl Sınrı- (Senirkent-Şarkikaraağaç) (320-07)DYA";
          yoladi2="32-10 Konya Akşehir Yolu";
          haritaURL="https://yandex.com.tr/map-widget/v1/?um=constructor%3A6c45cbb3c7cfc76a8313ad6f38605cd44c9f59658c90d57ee38ad396de2f1a65&amp;source=constructor";
          kkno="32-10";       break;}

         case'32-25':{
          yoladi1="Sütçüler(32-08)İYA-Kasımlar";
          yoladi2="32-25 Kasımlar Yolu";
          haritaURL="https://yandex.com.tr/map-widget/v1/?um=constructor%3Aca60f4941b4b39d0c9202cf2c104773d12a95cca0490d8340e8a778022c8fd42&amp;source=constructor";
          kkno="32-25";       break;}

         case'32-26':{
          yoladi1="(Eğirdir-Yalvaç)(330-09)DYA-(Isparta-Antalya) (685-03)DYA";
          yoladi2="32-26 Kovada Yolu";
          haritaURL="https://yandex.com.tr/map-widget/v1/?um=constructor%3A2a5c3de5f52e5c328dc1e3a12b4f6a6142a573bdf7bc4e12099e5327818f8e89&amp;source=constructor";
          kkno="32-26";       break;}

         case'32-50':{
          yoladi1="(Baladız-Isparta)(685-01)DYA-Isparta-Burdur İl SInırı";
          yoladi2="32-50 Burdur Dostluk Yolu";
          haritaURL="https://yandex.com.tr/map-widget/v1/?um=constructor%3Ad7f3eba6b074e9739d091d9f6777e7509838e6ce949858df51ba3eabd2e3e8b0&amp;source=constructor";
          kkno="32-50";       break;}

         case'32-000':{
          yoladi1="135. Şube (Isparta) Yol Ağı";
          yoladi2="135. Şube (Isparta) Yol Ağı";
          haritaURL="https://yandex.com.tr/map-widget/v1/?um=constructor%3A354b44a6d96460aa3051160fed19754acf7420f40516480509e8913397e0c190&amp;source=constructor";
          kkno="135. Şube";       break;} 
         
         default :{
          yoladi1="";
          yoladi2="";
          haritaURL="";
          kkno="";       break;}

   }

 
   const navigate = useNavigate();
   const [points, setPoints] = useState([]);


   const fetchPosts = async () => {
    const res = await axios.get(config.apiUrl);
   setPoints(res.data);   };

   useEffect(() => {  fetchPosts();  }, []);
   
  const handleDelete = async (point) => {
    setPoints(points.filter((p) => p._id !== point._id));
    await axios.delete(`${config.apiUrl}/${point._id}`);
  };

  var filteredPoints=points.filter(item=>{return item.kkn===kkn});
  if(kkn=="32-000"){filteredPoints=points;}

 return (  
    <>
<h1>{kkn} </h1>
<div className="container">
        <section className="tm-section-head" id="top">
            <header id="header" className="text-center tm-text-gray">
                <h1>KGM   13.Bölge Müdürlüğü (135. Şube Şefliği)</h1>
                <p>{yoladi1}</p>
            </header>
           </section>

        <section className="row" id="tm-section-1">
            <div className="col-lg-12 tm-slider-col">
                <div className="tm-img-slider">
                     <div className="tm-img-slider-item" href="/2103/img/gallery-img-04.jpg">
                       
                        <img src="/img/gallery-img-04.jpg" alt="Image" className="tm-slider-img"/>

                    </div>
                </div>
            </div>
        </section>
    </div>

    <p style={{textAlign:'center',fontSize:'16px' }}><b>{yoladi2}</b></p>
		<div style={{textAlign:'center'}}>
		<iframe src={haritaURL} width="68%" height="600" frameborder="0"></iframe>
	  <br/>
	  </div>
      


  <p style={{textAlign:'center',fontSize:'24px' }}><b>{kkno} Yolundaki Kavşak Noktaları  </b></p>
  
  
  <div style={{textAlign:'center',fontSize:'24px' }}>
  <button           onClick={() => navigate("/newpoint")}   className="btn btn-primary mb-4"
        >  Yeni Nokta Ekle  </button> </div>
  
  
  <div style={{textAlign:'left', margin:'auto',width:'68%',fontSize:'16px'}}>
        
  <table className="table table-hover">
    
    <thead>
  <tr>
    <th scope="col">Sıra</th>
    <th scope="col">KKN </th>
    <th scope="col">Km</th>
    <th scope="col">Detay</th>
    <th scope="col">Konum</th>
    <th scope="col">Resim</th>
    <th scope="col">Güncelle</th>
    <th scope="col">Kaldır</th>
  </tr>
</thead>

<tbody>
            

            {filteredPoints.map((point) => (
              <tr key={point._id}>
               <td>{++sayac}</td>  
              <td> {point.kkn} </td>
                <td> {point.km} </td>
                <td> {point.explain} </td>
                
                <td> <button className="btn btn-secondary">
                  <a href={point.location} target="_blank" >
                 Konum </a></button></td>
                

               <td> <button className="btn btn-warning"
                
               onClick={() => navigate(`${point.image}`)}>
                 Fotoğraf </button></td>


                <td>
                  <button
                    onClick={() => navigate(`/point/${point._id}`)}
                    className="btn btn-primary"
                  > Güncelle </button></td>


                <td>
                  <button
                    onClick={() => handleDelete(point)}
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

export default DetailScreen;
