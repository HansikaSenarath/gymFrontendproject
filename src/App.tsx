import { Toaster } from "./app/components/ui/sonner";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}
