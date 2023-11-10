import React , { useEffect, useState }from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import "./App.scss";
import { Filter, Profile } from "./atoms/index.js";
import { SideNav } from "./molecules/index";
import Router from "./router/router";
import { useLocation } from "react-router-dom";
import UserDetails from "./components/Utils/userDetails"
const App = (props) => {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <div className="App">
      {location.pathname === '/login' ||
      location.pathname === '/register' ||
      location.pathname === '/forgot-password' ||
      location.pathname === '/' ? (
        <Router />
      ) : (
        <>
          <SideNav page="Dashboard" />
          <div className="topnav">
            <div className={'topnav-content'}>
              <Filter />
              <UserDetails />
            </div>
          </div>
          <Router />
        </>
      )}
    </div>
  );
};

export default App;
