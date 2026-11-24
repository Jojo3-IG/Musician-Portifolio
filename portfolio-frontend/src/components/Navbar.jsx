import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/music">Music</NavLink>
      <NavLink to="/gigs">Gigs</NavLink>
      <NavLink to="/booking">Booking</NavLink>
    </nav>
  );
}