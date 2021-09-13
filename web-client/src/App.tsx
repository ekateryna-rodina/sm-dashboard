import "./App.scss";
import Header from "./components/Header/Header";
import MainCard from "./components/MainCard/MainCard";
import { mainCards } from "./data/userData";
function App() {
  return (
    <div>
      <Header />
      <main className="main grid-container cards">
        {mainCards.map((card) => (
          <MainCard key={card.platform.toString()} {...card} />
        ))}
      </main>
    </div>
  );
}

export default App;
