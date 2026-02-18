import { NavLink } from 'react-router-dom';

export default function SubsectorLink({ subsector }) {
  return (
    <NavLink
      to={`/subsector/${subsector.id}`}
      className={({ isActive }) =>
        `sidebar-link ${isActive ? 'active' : 'text-gray-600'}`
      }
    >
      {subsector.name}
    </NavLink>
  );
}
