import { seatingTables } from '../assets/data/dummyData';
import '../styles/FloorPlan.scss';
import { NavLink } from 'react-router-dom';

function FloorPlan() {
  return (
    <section>
      <h2>Select a table</h2>

      <div className='container'>
        <h3>kitchen</h3>
        <article className='floor-map'>
          {seatingTables.map(table => (
            <div className='table' key={table.table_id}>
              TABLE {table.table_id}
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}

export default FloorPlan;
