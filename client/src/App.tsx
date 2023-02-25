import Navbar from "./components/Navbar";
import "./App.scss";
import { seatingTables } from "./assets/data/dummyData";

function App() {
  return (
    <main>
      <Navbar />
      <section>
        <h2>Select a table</h2>

        <div className="container">
          <h3>kitchen</h3>
          <article className="floor-map">
            {seatingTables.map(table => (
              <div className="table" key={table.table_id}>
                TABLE {table.table_id}
              </div>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}

export default App;
