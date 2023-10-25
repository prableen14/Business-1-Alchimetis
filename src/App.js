import "./App.scss";
import { Filter, Profile } from "./atoms/index.js";
import { SideNav } from "./molecules/index";
import Router from "./router/router";

const App = (props) => {
  return (
    <div className='App'>
      {window?.location?.pathname !== "/login" && <SideNav page='Dashboard' />}
      <div className='topnav'>
        <div
          className={
            window?.location?.pathname !== "/login"
              ? "topnav-content"
              : "topnav-content-full"
          }
        >
          <Filter />
          <Profile />
        </div>
      </div>
      <Router />
    </div>
  );
};

export default App;
