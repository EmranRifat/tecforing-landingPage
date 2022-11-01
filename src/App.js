import "./App.css";
import Counter from "./Components/Counter";
import Home from "./Components/Home";
import HoverCounter from "./Components/HoverCounter";
import Main from "./Components/test/Main";
import Context from "./Library/Context";
import AddUser from "./Office/AddUser";
import Gallary from "./Components/Gallary/gallary";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";

function App() {
  return (
    <div className="">
      {/* <AddUser></AddUser>
     <Context/>
     <Home/>
     <Counter/> 
     <HoverCounter/> */}
      <Navbar></Navbar>
      <Banner></Banner>
      <Main></Main>
      <Gallary></Gallary>
    </div>
  );
}

export default App;
