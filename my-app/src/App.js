import css from './App.module.css';
import Sidebar from "./components/Sidebar";
// import NavBarSimple from "./components/NavBarSimple";
import NavbarForm from "./components/NavBarForm"

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      {/* <NavBarSimple /> */}
      {/* <Sidebar /> */}
      <NavbarForm />
    </div>
  );
}

export default App;