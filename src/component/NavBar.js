import { Button, Link } from "@mui/material";
import "../styles/index.css";

function NavBar() {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link href="/">Shop</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
          </ul>
        </nav>
        <div>
          <form method="post">
            <Button variant="contained">Logout</Button>
          </form>
        </div>
      </div>
      <div id="detail"></div>
    </>
  );
}

export default NavBar;
