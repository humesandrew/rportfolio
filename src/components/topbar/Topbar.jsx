import "./topbar.scss";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

export default function Topbar({
  menuOpen, setMenuOpen
}) {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            My logo
          </a>
          <div className="itemContainer">
            <AccessibilityNewIcon className="icon" />
            <span>614-YOUR-MOM</span>
          </div>

          <div className="itemContainer">
            <AccessibilityNewIcon className="icon" />
            <span>yourmom@yourmom.com</span>
          </div>
        </div>

        <div className="right">
            <div className="hamburger">
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>



        </div>
      </div>
    </div>
  );
}
