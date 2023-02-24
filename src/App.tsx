import Navbar from "./components/Navbar";
import "./App.scss";
import { seatingTables } from "./assets/data/dummyData";

function App() {
  return (
    <main>
      <Navbar />
      <section>
        <h2>Select a table</h2>
        <aside>
          <h3>kitchen</h3>
        </aside>
        <article className="floor-map">
          {seatingTables.map(table => (
            <div className="table" key={table.table_id}>
              TABLE {table.table_id}
            </div>
          ))}
        </article>
      </section>
    </main>
  );
}

export default App;
