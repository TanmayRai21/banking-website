import { Header } from "./components/Header";
import { CardSection } from "./components/CardSection";
import { ChartSection } from "./components/ChartSecton";
import { OuterLayout } from './styles/Layouts'

function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <CardSection />
        <ChartSection />
      </OuterLayout>
    </div>
  );
}

export default App;
