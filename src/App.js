import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { originalsUrl, comedyUrl, documentaryUrl, fantasyUrl, dramaUrl } from './Components/constants';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title="Netflix Originals" url={originalsUrl}/>
      <RowPost title="Comedy Shows" isSmall url={comedyUrl} />
      <RowPost title="Fantasy Movies" isSmall url={fantasyUrl} />
      <RowPost title="Documentaries" isSmall url={documentaryUrl} />
      <RowPost title="Drama" isSmall url={dramaUrl} />
    </div>
  );
}

export default App;
