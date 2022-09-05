import css from './App.module.css';
import Sidebar from "./components/Sidebar";
// import NavBarSimple from "./components/NavBarSimple";
import NavbarForm from "./components/NavBarForm"
// import Content from "./components/Content"
import ContentHooks from "./components/ContentHooks"


function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      {/* <NavBarSimple /> */}
      <Sidebar />
      <NavbarForm />
      {/* <Content /> */}
      <ContentHooks />
    </div>
  );
}

export default App;