import "./App.scss";
import { seatingTables } from "./assets/data/dummyData";

function App() {
  console.log(seatingTables);

  return (
    <main>
      <h1>Rocky POS</h1>

      <section>
        <h2>Select table</h2>
        {seatingTables.map(table => (
          <div className="table" key={table.table_id}>
            {table.table_id}
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
