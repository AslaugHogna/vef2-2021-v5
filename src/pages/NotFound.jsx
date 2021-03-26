import { NavLink } from 'react-router-dom';

export function NotFound() {
  return (
    <div>
      <h1>404 fannst ekki</h1>
      <NavLink to='/'>Heim</NavLink>
    </div>
  );
}
