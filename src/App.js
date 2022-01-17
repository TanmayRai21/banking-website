import { Header } from "./components/Header";
import { CardSection } from "./components/CardSection";
import { ChartSection } from "./components/ChartSecton";
import { OuterLayout } from './styles/Layouts'
import { MessageSection } from "./components/MeassgeSection";
import { PaymentSection } from "./components/PaymentSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <CardSection />
        <ChartSection />
        <MessageSection />
        <PaymentSection />
        <FaqSection />
      </OuterLayout>
      <Footer />
    </div>
  );
}

export default App;
