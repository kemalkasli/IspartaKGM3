//import React, {useState,useEffect} from "react";
import { Container, Form, Button, FormGroup, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
//import "react-phone-number-input/style.css";
import axios, { Axios } from "axios";
import config from "../config.json"

function HomeScreen(props) {

 

  return (


   <div>
    
 



 <div className="full-screen-portfolio" id="portfolio">
       

	   <div className="container-fluid">
            <div className="col-md-4 col-sm-6">
                <div className="portfolio-item">
        <Link className="text-white text-decoration-none" to="/detail/:32-000">       

                 
                        <div className="hover-effect">
                            <div className="hover-content">
                                <h6>KGM <em>135. Şube (ISPARTA) Şefliği Tüm Yol Ağı</em></h6>
                                
                            </div>
                        </div>
                        <div className="image">
                            <img src="./img/11.jpg"/>
                        </div>
                      </Link>

                </div>
			</div>
			
			 <div className="col-md-4 col-sm-6">
                <div className="portfolio-item">
				<Link className="text-white text-decoration-none" to="/detail/:320-06"> 
                    
                        <div className="hover-effect">
                            <div className="hover-content">
                                <h6>KGM <em>320-06 Uluborlu-Senirkent  Yolu</em></h6>
                                
                            </div>
                        </div>
                        <div className="image">
                            <img src="./img/10.jpg"/>
                        </div>
                    </Link>
                </div>
			</div>
			
			 <div className="col-md-4 col-sm-6">
                <div className="portfolio-item">
				<Link className="text-white text-decoration-none" to="/detail/:320-07"> 
                      <div className="hover-effect">
                            <div className="hover-content">
                                <h6>KGM <em>320-07 Senirkent- Kumdanlı- Yalvaç Yolu </em></h6>
                                
                            </div>
                        </div>
                        <div className="image">
                            <img src="./img/7.jpg"/>
                        </div>
                    </Link>
                </div>
			</div>
			
			
						
		
		</div>
		
 	
		<div className="container-fluid">
            <div className="col-md-4 col-sm-6">
                <div className="portfolio-item">
				<Link className="text-white text-decoration-none" to="/detail/:330-09"> 
                    <div className="hover-effect">
                            <div className="hover-content">
                                <h6>KGM <em>330-09 Isparta- Eğirdir Yolu</em></h6>
                                
                            </div>
                        </div>
                        <div className="image">
                            <img src="./img/1.jpg"/>
                        </div>
                  </Link>
                </div>
			</div>
			
			 <div className="col-md-4 col-sm-6">
                <div className="portfolio-item">
				<Link className="text-white text-decoration-none" to="/detail/:330-10"> 
               <div className="hover-effect">
                            <div className="hover-content">
                                <h6>KGM <em>330-10 Eğirdir-Gelendost Yolu</em></h6>
                                
                            </div>
                        </div>
                        <div className="image">
                            <img src="./img/3.jpg"/>
                        </div>
               </Link>
                </div>
			</div>
			
			 <div className="col-md-4 col-sm-6">
                <div className="portfolio-item">
				<Link className="text-white text-decoration-none" to="/detail/:685-01"> 
                        <div className="hover-effect">
                            <div className="hover-content">
                                <h6>KGM <em>685-01 Baladız -Isparta Yolu</em></h6>
                                
                            </div>
                        </div>
                        <div className="image">
                            <img src="./img/6.jpg"/>
                        </div>
               </Link>
                </div>
			</div>
		
		</div>
		
			 
		<div className="container-fluid">
            <div className="col-md-4 col-sm-6">
                <div className="portfolio-item">
				<Link className="text-white text-decoration-none" to="/detail/:685-02"> 
                        <div className="hover-effect">
                            <div className="hover-content">
                                <h6>KGM <em>685-02 Isparta-Ağlasun Yolu</em></h6>
                                
                            </div>
                        </div>
                        <div className="image">
                            <img src="./img/5.jpg"/>
                        </div>
                   </Link>
                </div>
			</div>
			
			 <div className="col-md-4 col-sm-6">
                <div className="portfolio-item">
				<Link className="text-white text-decoration-none" to="/detail/:685-03"> 
                        <div className="hover-effect">
                            <div className="hover-content">
                                <h6>KGM <em>685-03 Isparta-Antalya Derboğazı Yolu</em></h6>
                                
                            </div>
                        </div>
                        <div className="image">
                            <img src="./img/8.jpg"/>
                        </div>
                   </Link>
                </div>
			</div>
			
			 <div className="col-md-4 col-sm-6">
                <div className="portfolio-item">
				<Link className="text-white text-decoration-none" to="/detail/:685-04"> 
                        <div className="hover-effect">
                            <div className="hover-content">
                                <h6>KGM <em>685-04 Isparta-Antalya Derboğazı Yolu</em></h6>
                                
                            </div>
                        </div>
                        <div className="image">
                            <img src="./img/15.jpg"/>
                        </div>
                  </Link>
                </div>
			</div>
		
		</div>
		
	
		<div className="container-fluid">
            
			<div className="col-md-4 col-sm-6">
                <div className="portfolio-item">
				<Link className="text-white text-decoration-none" to="/detail/:695-06"> 
                        <div className="hover-effect">
                            <div className="hover-content">
                                <h6>KGM <em>695-06 Yalvaç- Şarkikarağaç Yolu</em></h6>
                                
                            </div>
                        </div>
                        <div className="image">
                            <img src="./img/17.jpg"/>
                        </div>
                   </Link>
                </div>
			</div>
			
			
			
			<div className="col-md-4 col-sm-6">
                <div className="portfolio-item">
				<Link className="text-white text-decoration-none" to="/detail/:32-01"> 
                        <div className="hover-effect">
                            <div className="hover-content">
                                <h6>KGM <em>32-01 Atabey Gönen Yolu</em></h6>
                                
                            </div>
                        </div>
                        <div className="image">
                            <img src="./img/12.jpg"/>
                        </div>
                   </Link>
                </div>
			</div>
			
			 <div className="col-md-4 col-sm-6">
                <div className="portfolio-item">
				<Link className="text-white text-decoration-none" to="/detail/:32-02"> 
                        <div className="hover-effect">
                            <div className="hover-content">
                                <h6>KGM <em>32-02 Barla Senirkent Yolu</em></h6>
                                
                            </div>
                        </div>
                        <div className="image">
                            <img src="./img/18.jpg"/>
                        </div>
                  </Link>
                </div>
			</div>
			
			
		
		</div>
		

		<div className="container-fluid">
		
		 <div className="col-md-4 col-sm-6">
                <div className="portfolio-item">
				<Link className="text-white text-decoration-none" to="/detail/:32-03"> 
                        <div className="hover-effect">
                            <div className="hover-content">
                                <h6>KGM <em>32-03 Barla Yolu</em></h6>
                                
                            </div>
                        </div>
                        <div className="image">
                            <img src="./img/16.jpg"/>
                        </div>
                  </Link>
                </div>
			</div>
		
		
            <div className="col-md-4 col-sm-6">
                <div className="portfolio-item">
				<Link className="text-white text-decoration-none" to="/detail/:32-04"> 
                        <div className="hover-effect">
                            <div className="hover-content">
                                <h6>KGM <em>32-04 Afyon Şuhut- Bozdurmuş Yolu</em></h6>
                                
                            </div>
                        </div>
                        <div className="image">
                            <img src="./img/9.jpg"/>
                        </div>
                  </Link>
                </div>
			</div>
			
			 <div className="col-md-4 col-sm-6">
                <div className="portfolio-item">
				<Link className="text-white text-decoration-none" to="/detail/:32-06"> 
                        <div className="hover-effect">
                            <div className="hover-content">
                                <h6>KGM <em>32-06 Yalvaç Yolu</em></h6>
                                
                            </div>
                        </div>
                        <div className="image">
                            <img src="./img/14.jpg"/>
                        </div>
                  </Link>
                </div>
			</div>
			
			 
		
		</div>
		
		
		<div className="container-fluid">
		
				<div className="col-md-4 col-sm-6">
                <div className="portfolio-item">
				<Link className="text-white text-decoration-none" to="/detail/:32-07"> 
                        <div className="hover-effect">
                            <div className="hover-content">
                                <h6>KGM <em>32-07 Yenişarbademli Yolu</em></h6>
                                
                            </div>
                        </div>
                        <div className="image">
                            <img src="./img/13.jpg"/>
                        </div>
                  </Link>
                </div>
			</div>
		
            <div className="col-md-4 col-sm-6">
                <div className="portfolio-item">
				
                <Link className="text-white text-decoration-none" to="/detail/:32-08"> 
                        <div className="hover-effect">
                            <div className="hover-content">
                                <h6>KGM <em>32-08 Sütçüler Yolu</em></h6>
                                
                            </div>
                        </div>
                        <div className="image">
                            <img src="./img/2.jpg"/>
                        </div>
                  </Link>
                </div>
			</div>
			
			 <div className="col-md-4 col-sm-6">
                <div className="portfolio-item">
				<Link className="text-white text-decoration-none" to="/detail/:32-09"> 
                  
                        <div className="hover-effect">
                            <div className="hover-content">
                                <h6>KGM <em>32-09 Aksu Yolu</em></h6>
                                
                            </div>
                        </div>
                        <div className="image">
                            <img src="./img/4.jpg"/>
                        </div>
                  </Link>
                </div>
			</div>
			

		
		</div>
		
		
			<div className="container-fluid">
			
		
		
            <div className="col-md-4 col-sm-6">
                <div className="portfolio-item">
				
                <Link className="text-white text-decoration-none" to="/detail/:32-25"> 
                        <div className="hover-effect">
                            <div className="hover-content">
                                <h6>KGM <em>32-25 Kasımlar Yolu</em></h6>
                                
                            </div>
                        </div>
                        <div className="image">
                            <img src="./img/19.jpg"/>
                        </div>
                 </Link>
                </div>
			</div>
			
			 <div className="col-md-4 col-sm-6">
                <div className="portfolio-item">
				<Link className="text-white text-decoration-none" to="/detail/:32-26"> 
                        <div className="hover-effect">
                            <div className="hover-content">
                                <h6>KGM <em>32-26 Kovada Yolu</em></h6>
                                
                            </div>
                        </div>
                        <div className="image">
                            <img src="./img/21.jpg"/>
                        </div>
                 </Link>
                </div>
			</div>


            <div className="col-md-4 col-sm-6">
                <div className="portfolio-item">
				<Link className="text-white text-decoration-none" to="/detail/:32-50"> 
                        <div className="hover-effect">
                            <div className="hover-content">
                                <h6>KGM <em>32-50 Burdur Dostluk Yolu</em></h6>
                                
                            </div>
                        </div>
                        <div className="image">
                            <img src="./img/20.jpg"/>
                        </div>
                 </Link>
                </div>
			</div>
			
			 		
		</div>
		
				
		<div className="container-fluid">
           
	<div className="col-md-4 col-sm-6">
                <div className="portfolio-item">
				<Link className="text-white text-decoration-none" to="/construction"> 
                       <div className="hover-effect">
                            <div className="hover-content">
                                <h6> <em>Yol Boyu Ticari Tesis Listesi</em></h6>
                                
                            </div>
                        </div>
                        <div className="image">
                            <img src="./img/24.jpg"/>
                        </div>
                    </Link>   
                    </div>
                </div>
			
						
			
       <div className="col-md-4 col-sm-6">
                <div className="portfolio-item">
				
                 <a target="_blank" href="https://goo.gl/maps/sSghUgWPr1yiyjEs8">
				 <div className="thumb">
                        <div className="hover-effect">
                            <div className="hover-content">
                                <h6>KGM <em>135. Şube Şefliği Adres</em></h6>
                                
                            </div>
                        </div>
                        <div className="image">
                            <img src="./img/11.jpg"/>
                        </div>
                    </div></a>
                </div>
			</div>
			
			
</div>

<div style={{marginBottom:'15', padding:'15'}}>   </div>

</div>
   </div>
  );
}

export default HomeScreen;
