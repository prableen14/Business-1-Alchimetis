import "./App.scss";
import { Dashboard } from "./components/index";
import { Filter, Profile } from "./atoms/index.js";
import { SideNav } from "./molecules/index";
import Router from "./router/router";

const App = (props) => {
  console.log(props);
  return (
    <div className='App'>
      <SideNav page='Dashboard' />
      <div className='topnav'>
        <div className='topnav-content'>
          <Filter /> <Profile />
        </div>
      </div>
      <Router />
    </div>
  );
};

export default App;
