import Banner from "./Components/Banner-Fold/Banner";
import Navbar from "./Components/Navbar-Fold/Navbar";
import OurRecipes from "./Components/OurRecipes-Fold/OurRecipes";

const App = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>

      <OurRecipes></OurRecipes>
      
    </div>
  );
};

export default App;