import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Header.css";

const menuData = {
  men: {
    label: ["Men's", "Collection"],
    columns: [
      {
        title: "Shirt",
        items: ["Formal Shirt", "Casual Shirt", "Comfort Shirt", "Linen Shirt"],
      },
      {
        title: "Panjabi",
        items: [
          "Classic Panjabi",
          "Embroidered",
          "Eid Special",
          "Cotton Panjabi",
        ],
      },
      {
        title: "T-Shirt",
        items: ["Graphic Tee", "Polo T-Shirt", "Plain Round Neck", "Oversized"],
      },
      { title: "Bottom", items: ["Chino Pants", "Denim", "Joggers", "Shorts"] },
      {
        title: "Accessories",
        items: ["Belts", "Wallets", "Caps", "Sunglasses"],
      },
    ],
  },
  women: {
    label: ["Women's", "Collection"],
    columns: [
      { title: "Tops", items: ["Kurti", "Blouse", "Crop Top", "Tunic"] },
      {
        title: "Saree",
        items: ["Cotton Saree", "Silk Saree", "Printed Saree", "Party Wear"],
      },
      {
        title: "Salwar Set",
        items: ["Casual Set", "Embroidered Set", "Palazzo Set", "Linen Set"],
      },
      {
        title: "Bottom",
        items: ["Palazzo Pants", "Skirts", "Trousers", "Culottes"],
      },
      {
        title: "Accessories",
        items: ["Earrings", "Bags", "Scarves", "Sunglasses"],
      },
    ],
  },
};

export default function Header() {
  const [hovered, setHovered] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const leaveTimer = useRef(null);
  const navigate = useNavigate();

  const openMenu = (id) => {
    clearTimeout(leaveTimer.current);
    setActiveMenu(id);
    setHovered(true);
  };

  const cancelClose = () => clearTimeout(leaveTimer.current);

  const scheduleClose = () => {
    leaveTimer.current = setTimeout(() => {
      setActiveMenu(null);
      setHovered(false);
    }, 120);
  };

  const handleNavClick = (e, key) => {
    e.preventDefault();
    setActiveMenu(null);
    setHovered(false);
    navigate(`/category/${key}`);
  };

  return (
    <>
      <header
        id="mainHeader"
        className={hovered ? "hovered" : ""}
        onMouseEnter={() => {
          cancelClose();
          setHovered(true);
        }}
        onMouseLeave={scheduleClose}
      >
        <Link to="/" className="logo">
          Vibe
        </Link>

        <nav>
          {Object.keys(menuData).map((key) => (
            <a
              key={key}
              href={`/category/${key}`}
              className="nav-trigger"
              onMouseEnter={() => openMenu(key)}
              onClick={(e) => handleNavClick(e, key)}
            >
              {key === "men" ? "Men" : "Women"}
            </a>
          ))}
        </nav>

        <div className="header-right">
          <div className="header-icon" style={{ position: "relative" }}>
            <svg viewBox="0 0 24 24">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            <span className="cart-badge">3</span>
          </div>
          <div className="header-icon">
            <svg viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className="flag-pill">
            <div className="flag-circle">
              <div className="disc"></div>
            </div>
            <span className="flag-label">BDT</span>
          </div>
        </div>
      </header>

      {Object.entries(menuData).map(([key, menu]) => (
        <div
          key={key}
          className={`mega-menu ${activeMenu === key ? "open" : ""}`}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="mega-inner">
            <div className="mega-img">
              <div className="mega-img-placeholder">
                <span className="mega-img-label">
                  {menu.label[0]}
                  <br />
                  {menu.label[1]}
                </span>
              </div>
            </div>
            <div className="mega-categories">
              {menu.columns.map((col) => (
                <div className="mega-col" key={col.title}>
                  <div className="mega-col-title">{col.title}</div>
                  <ul>
                    {col.items.map((item) => (
                      <li key={item}>
                        <a href="#">{item}</a>
                      </li>
                    ))}
                    <li>
                      <a href="#" className="view-all">
                        View All →
                      </a>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
