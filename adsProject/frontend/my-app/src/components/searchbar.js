import React, { useEffect, useState,Link } from "react";
import axios from "axios";
import styles from './searchbar.css'

const SearchBar = () => {
  const [inputValue, setinputValue] = useState("");
  const [display,setDisplay]=useState([])
  const getDataInput = (e) => {
    console.log(e.target.value);
    setinputValue(e.target.value);
  };

  useEffect(() => {
    async function adData() {
      const url = `http://localhost:8080/?value=${inputValue}`;
      
      const response = await axios.get(url);

      console.log(response.data);
      setDisplay(response.data)
    }
    adData();
  }, [inputValue]);
  return (
    <div>
      <main>
        <div className="inputDiv">
          <header>Ads search</header>
          <input className="actualInput"
            onChange={(e) => {
              getDataInput(e);
            }}
            type="text"
          />
        </div>
        <div>
          <div className="Cardcontainer">
            {display.map((val,ind)=>{
              return(
                <div className="card" key={val._id}>
                  <div className="imageContainer">
                    <img className="acutalImage" src={val.imageUrl} alt={'imagee'} />
                    {/* <div>{val.imageUrl}</div> */}
                  </div>
                  <div className="writings">
                    <div>{val.added.name}</div>
                    <div>{val.description}</div>
                    <div>{val.headline}</div>
                    <div>{val.primaryText}</div>
                    <div><a rel="noreferrer" target={'_blank'} href={val.added.url}>{val.CTA} </a></div>
                  </div>
                </div>
                
              )
            })}
          </div>
        </div>


      </main>

      
    </div>
  );
};
export default SearchBar;

