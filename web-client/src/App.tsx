import "./App.scss";
import Header from "./components/Header/Header";
import MainCard from "./components/MainCard/MainCard";
import OverviewCard from "./components/OverviewCard/OverviewCard";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
import { mainCards, overviewCards } from "./data/userData";

function App() {
  return (
    <div>
      <Header />
      <main className="main grid-container cards">
        <ThemeSwitch />
        {mainCards.map((card, index) => (
          <MainCard key={index.toString()} {...card} />
        ))}
        <h2 className="cards__overview-title">Overview - Today</h2>
        {overviewCards.map((card, index) => (
          <OverviewCard key={index.toString()} {...card} />
        ))}
      </main>
    </div>
  );
}

export default App;
