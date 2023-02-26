import { Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav>
        <h1>Rocky POS</h1>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
