import React from "react";
import bmw from "../components/bmw_PNG99547.png";
import './header.css';

function Header() {
    function needMoreModels(){
        window.location.href = "https://www.bmwusa.com/inventory/zip";
    }

    function needFutureModels(){
        window.location.href="https://www.bmwusa.com/vehicles/8-series/overview.html";
    }
  return (
    <header>
   <div class="navbar">
    <ul>
      <li><a href="#" class="active">Home</a></li>
      <li><a href="https://www.caranddriver.com/bmw/i7/specs">Features</a></li>
      <li><a href="https://www.edmunds.com/bmw/i7/">Pricing</a></li>
      <li><a href="https://www.amazon.com/s?k=2021+x1+bmw+accessories&adgrpid=1334808758528372&hvadid=83425808464989&hvbmt=bb&hvdev=c&hvlocphy=116074&hvnetw=o&hvqmt=b&hvtargid=kwd-83426550693855%3Aloc-90&hydadcr=24901_10941209&msclkid=c92cbd6921a11def5b91db03b94d3056&tag=mh0b-20&ref=pd_sl_27zwf4hmib_b">Accessories</a></li>
      <li><a href="https://www.bmwusa.com/vehicles/all-electric/i7/sedan/faqs.html">FAQs</a></li>
    </ul>
  </div>
      <img src={bmw} alt="BMW logo" />
      <h1>BMW i7</h1>
      <div className="animated-text-container">
        <span className="animated-text">Enjoy unparalleled comfort and eco-friendly driving with <span className="bmw-text">BMW</span>.</span>
       {/* <span class="reveal-text">Enjoy unparalleled comfort and eco-friendly driving with BMW</span> */}      
      </div>
      <div className="btn-container">
                <button className="btn btn1" onClick={needMoreModels}>Want Different Models?</button>
                <button className="btn btn2" onClick={needFutureModels}>Future Models?</button>
            </div>
    </header>
  );
}

export default Header;
