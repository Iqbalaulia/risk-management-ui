import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Step_1 } from "./pages/Step_1";

export default function Home() {
  return (
    <div className="bg-white rounded-2xl px-6 py-7">
      <Header />
      <Step_1 />
      <Footer />
    </div>
  );
}
