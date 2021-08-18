import './SearchBar.scss';
import cities from '../data.json'

export default function SearchBar(){
  return(
    <div className="search-field">
      <div className="search-bar">
        <input type="text"/>
      </div>
    </div>
  )
}