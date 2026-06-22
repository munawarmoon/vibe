import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../css/Category.css";

// ─── DATA ───
const menProducts = [
  { id: 1, name: "Classic Linen Shirt", price: 1850, sale: null },
  { id: 2, name: "Embroidered Panjabi", price: 2500, sale: 3200 },
  { id: 3, name: "Graphic Oversized Tee", price: 950, sale: null },
  { id: 4, name: "Slim Chino Pants", price: 2100, sale: null },
  { id: 5, name: "Casual Oxford Shirt", price: 1650, sale: null },
  { id: 6, name: "Cotton Polo Shirt", price: 1100, sale: 1400 },
  { id: 7, name: "Classic Panjabi", price: 2800, sale: null },
  { id: 8, name: "Relaxed Jogger Pants", price: 1350, sale: null },
  { id: 9, name: "Formal Dress Shirt", price: 2200, sale: null },
  { id: 10, name: "Denim Slim Fit", price: 2450, sale: null },
  { id: 11, name: "Summer Shorts", price: 890, sale: null },
  { id: 12, name: "Plain Round Neck Tee", price: 599, sale: 750 },
];

const womenProducts = [
  { id: 1, name: "Printed Cotton Kurti", price: 1250, sale: null },
  { id: 2, name: "Silk Saree", price: 4500, sale: 5500 },
  { id: 3, name: "Embroidered Salwar Set", price: 3200, sale: null },
  { id: 4, name: "Palazzo Set", price: 2100, sale: null },
  { id: 5, name: "Crop Top", price: 850, sale: null },
  { id: 6, name: "Linen Salwar Set", price: 2800, sale: 3500 },
  { id: 7, name: "Cotton Saree", price: 1800, sale: null },
  { id: 8, name: "Culottes", price: 1450, sale: null },
  { id: 9, name: "Tunic Top", price: 1100, sale: null },
  { id: 10, name: "Palazzo Pants", price: 1350, sale: null },
  { id: 11, name: "Printed Blouse", price: 950, sale: null },
  { id: 12, name: "Party Wear Saree", price: 5999, sale: 7500 },
];

const colors = [
  { name: "Black", hex: "#111111" },
  { name: "White", hex: "#f5f5f5" },
  { name: "Navy Blue", hex: "#1a2e5a" },
  { name: "Red", hex: "#c0392b" },
  { name: "Olive", hex: "#6b7c3d" },
  { name: "Grey", hex: "#888888" },
  { name: "Beige", hex: "#d4c4a8" },
  { name: "Sky Blue", hex: "#5ba4cf" },
  { name: "Brown", hex: "#7b4f2e" },
  { name: "Maroon", hex: "#6d1a1a" },
];

const prices = [
  "Under ৳500",
  "৳500 – ৳1,000",
  "৳1,000 – ৳2,000",
  "৳2,000 – ৳3,000",
  "৳3,000 – ৳5,000",
  "Above ৳5,000",
];

const sorts = [
  "Newest First",
  "Price: Low to High",
  "Price: High to Low",
  "Most Popular",
  "Best Rating",
];

// ─── PRODUCT CARD ───
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-img">
        <div className="product-img-placeholder">
          <svg viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
      </div>
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <div className="product-price">
          {product.sale ? (
            <>
              <span className="original">
                ৳ {product.sale.toLocaleString()}
              </span>
              <span className="sale">৳ {product.price.toLocaleString()}</span>
            </>
          ) : (
            <span>৳ {product.price.toLocaleString()}</span>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── DRAWER CONTENT ───
function ColorDrawer({ selectedColors, setSelectedColors }) {
  const toggle = (name) => {
    setSelectedColors((prev) =>
      prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name],
    );
  };
  return (
    <>
      <p className="drawer-section-label">Select Colors</p>
      <div className="color-grid">
        {colors.map((c) => (
          <label className="color-option" key={c.name}>
            <input
              type="checkbox"
              checked={selectedColors.includes(c.name)}
              onChange={() => toggle(c.name)}
            />
            <div className="color-swatch-wrap">
              <div className="custom-check">
                <svg viewBox="0 0 12 12">
                  <polyline points="2 6 5 9 10 3" />
                </svg>
              </div>
              <div
                className="color-dot"
                style={{
                  background: c.hex,
                  border: c.hex === "#f5f5f5" ? "1px solid #ccc" : undefined,
                }}
              />
              <span className="color-name">{c.name}</span>
            </div>
          </label>
        ))}
      </div>
    </>
  );
}

function PriceDrawer({ selectedPrice, setSelectedPrice }) {
  return (
    <>
      <p className="drawer-section-label">Price Range</p>
      <div className="price-list">
        {prices.map((p) => (
          <label className="price-option" key={p}>
            <input
              type="radio"
              name="price"
              checked={selectedPrice === p}
              onChange={() => setSelectedPrice(p)}
            />
            <div className="price-radio-wrap">
              <div className="custom-radio">
                <div className="custom-radio-dot" />
              </div>
              <span className="price-label">{p}</span>
            </div>
          </label>
        ))}
      </div>
    </>
  );
}

function SortDrawer({ selectedSort, setSelectedSort }) {
  return (
    <>
      <p className="drawer-section-label">Sort Products</p>
      <div className="sort-list">
        {sorts.map((s) => (
          <div
            key={s}
            className={`sort-option ${selectedSort === s ? "selected" : ""}`}
            onClick={() => setSelectedSort(s)}
          >
            {s}
          </div>
        ))}
      </div>
    </>
  );
}

// ─── MAIN CATEGORY PAGE ───
export default function Category() {
  const { gender } = useParams(); // "men" or "women"
  const isWomen = gender === "women";
  const title = isWomen ? "Women's Collection" : "Men's Collection";
  const products = isWomen ? womenProducts : menProducts;

  const [drawerType, setDrawerType] = useState(null); // "color" | "price" | "sort" | null
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(prices[0]);
  const [selectedSort, setSelectedSort] = useState(sorts[0]);

  const openDrawer = (type) => setDrawerType(type);
  const closeDrawer = () => setDrawerType(null);

  return (
    <>
      {/* Overlay */}
      <div
        className={`cat-overlay ${drawerType ? "active" : ""}`}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className={`drawer ${drawerType ? "open" : ""}`}>
        <div className="drawer-header">
          <button className="drawer-back" onClick={closeDrawer}>
            <svg viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back
          </button>
          <span className="drawer-title">
            {drawerType === "color"
              ? "Color"
              : drawerType === "price"
                ? "Price"
                : "Sort By"}
          </span>
          <div style={{ width: 60 }} />
        </div>

        <div className="drawer-body">
          {drawerType === "color" && (
            <ColorDrawer
              selectedColors={selectedColors}
              setSelectedColors={setSelectedColors}
            />
          )}
          {drawerType === "price" && (
            <PriceDrawer
              selectedPrice={selectedPrice}
              setSelectedPrice={setSelectedPrice}
            />
          )}
          {drawerType === "sort" && (
            <SortDrawer
              selectedSort={selectedSort}
              setSelectedSort={setSelectedSort}
            />
          )}
        </div>

        <div className="drawer-footer">
          <button className="btn-apply" onClick={closeDrawer}>
            Apply
          </button>
        </div>
      </div>

      {/* Page Body */}
      <div className="page-wrap">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <svg viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <span>{title}</span>
        </div>

        {/* Collection Title */}
        <div className="collection-header">
          <h1 className="collection-title">{title}</h1>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar">
          {["color", "price", "sort"].map((type) => (
            <button
              key={type}
              className={`filter-btn ${drawerType === type ? "active" : ""}`}
              onClick={() => openDrawer(type)}
            >
              {type === "color"
                ? "Color"
                : type === "price"
                  ? "Price"
                  : "Sort By"}
              <svg viewBox="0 0 24 24">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          ))}
        </div>

        <div className="filter-divider" />

        {/* Product Grid */}
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </>
  );
}
