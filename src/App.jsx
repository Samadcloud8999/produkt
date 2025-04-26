import { About } from "./components/About/About";
import { Slaider } from "./components/Slaider/Slaider";
import { Shop } from "./components/Shoop/Shop";
import { Aboutdog } from "./components/Aboutdog/Aboutdog";
import { Footer } from "./components/Foooter/Footer";
import MyRoutes from "./routes/MyRoutes";
import Register from "./components/Regis/Register";

function App() {
  return (
    <>
      <MyRoutes />
       <About /> 
      <Slaider />
      <Shop />
      <Aboutdog />
      <Register />
      <Footer />
    </>
  );
}

export default App;
