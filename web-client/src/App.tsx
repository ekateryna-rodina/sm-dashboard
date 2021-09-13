import "./App.scss";
import Header from "./components/Header/Header";
import MainCard from "./components/MainCard/MainCard";
function App() {
  return (
    <div>
      <Header />
      <main className="main grid-container cards">
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </main>
    </div>
  );
}

export default App;
