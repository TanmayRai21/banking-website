import { Header } from "./components/Header";
import { CardSection } from "./components/CardSection";
import { ChartSection } from "./components/ChartSecton";
import { OuterLayout } from './styles/Layouts'
import { MessageSection } from "./components/MeassgeSection";

function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <CardSection />
        <ChartSection />
        <MessageSection />
      </OuterLayout>
    </div>
  );
}

export default App;
