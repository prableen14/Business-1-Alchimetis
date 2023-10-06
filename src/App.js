import "./App.scss";
import { Dashboard } from "./components/index";
import { SideNav } from "./molecules/index";
function App() {
  return (
    <div className='App'>
      <SideNav page='Dashboard' />
      <div className='Pages'>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
