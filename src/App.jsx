import { MainCard } from "./components/MainCard/MainCard";
import { Header } from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";

function App() {
  return (
    <MainCard>
      <Header />
      <SearchBar />
    </MainCard>
  );
}

export default App;
