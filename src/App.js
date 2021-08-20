import SearchBar from "./components/SearchBar";
import locationData from './data.json'
import './App.css'
export default function App() {
  return (
    <div className="App">
      <SearchBar
        placeholder="Enter the location..."
        data={locationData}
      />
    </div>
  );
}

