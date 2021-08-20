import './SearchBar.css';
import {useState} from "react";

export default function SearchBar({placeholder, data}){
  const [keyword, setKeyword] = useState([]);

  const handleChange = (event) =>{
    const query = event.target.value;
    const result = data.filter((value)=>{
      return value.city.toLowerCase().includes(query.toLowerCase()) ||
        value.country.toLowerCase().includes(query.toLowerCase())
    });
    setKeyword(result)
  }


  return(
    <div className="search-field">
      <div className="search-bar"  >
        <input type="text"
               placeholder={placeholder}
               onChange={handleChange}
        />
        {keyword.length !== 0 &&
          <div className="search-results">
            {
              keyword.slice(0,10).map((value, key) => {
                return <div>
                  <p> city: {value.city}</p>
                  <p>country: {value.country}</p>
                </div>
              })
            }
          </div>
        }
      </div>
    </div>
  )
}