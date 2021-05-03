import React from 'react';
import "./Home.css";
import Product from "./Product";

function home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" alt="banner" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" ></img>
            <div className ="home_row">
            <Product 
            id="12345"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" 
            price = {29.99} 
            image="https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg" 
            rating ={3} />
            <Product 
            id = "23453534"
            title = "Aucma Stand Mixer,7.4QT 6-Speed Tilt-Head Food Mixer, Electric Kitchen Mixer with Dough Hook, Wire Whip & Beater (Green)"
            price = {149.0}
            rating = {4}
            image = "https://m.media-amazon.com/images/I/61cBVK0OSrL._AC_UY218_.jpg"
            />
            </div>
            <div className = "home_row">
            <Product
            id ="837483"
            title = "All-new Echo Dot (4th generation) | Smart speaker with Alexa | Charcoal"
            price ={49.99}
            rating = {5}
            image = "https://images-na.ssl-images-amazon.com/images/I/71Q9d6N7xkL._AC_SL1000_.jpg" />
            <Product 
            id = "919283"
            title = "Samsung Galaxy S21+ 5G Smartphone SIM Free Android Mobile Phone Phantom Black 256GB"
            price = {757.00}
            rating = {4}
            image = "https://images-na.ssl-images-amazon.com/images/I/81ENWeD1OwL._AC_SX679_.jpg"
            />
            <Product 
            id = "483920"
            title ="Apple iPad Pro (11-inch, 2nd Generation, Wi-Fi + Cellular, 128GB) - Space Grey (2020)"
            price = {849.00}
            rating = {5}
            image ="https://images-na.ssl-images-amazon.com/images/I/81Rjg9HrirL._AC_SX679_.jpg"/>
            </div>
            <div className ="home_row">
            <Product 
            id = "85573"
            title = "HP 25x 144Hz Full HD Gaming Monitor (1920 x 1080) NVIDIA G-Sync & AMD FreeSync Compatible, 1 ms Response time (1 DP, 1 HDMI), Black"
            price = {199.99}
            rating={4}
            image = "https://m.media-amazon.com/images/I/618n7bDitkL._AC_UY218_.jpg"
            />
            

            </div>
            </div>
        </div>
    )
}

export default home
