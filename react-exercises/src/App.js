import ContactForm from "./components/ContactForm";
import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";
import Modals from "./components/Modals";
import NestedSelects from "./components/NestedSelects";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <>
      <Modals />
      <hr />
      <ContactForm />
      <hr />
      <NestedSelects />
      <hr />
      <h1>Ejercios React</h1>
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </>
  );
}

export default App;
