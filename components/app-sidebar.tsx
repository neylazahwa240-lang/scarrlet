"use client"
import * as React from "react"

export default function DashboardPage() {
  const [activeMenu, setActiveMenu] = React.useState("parfum")

  // Data produk
  const products: Record<string, { name: string; price: string }[]> = {
    parfum: [
      { name: "Parfum Sakura", price: "Rp 120.000" },
      { name: "Parfum Lavender", price: "Rp 110.000" },
      { name: "Parfum Rose", price: "Rp 130.000" },
    ],
    body_lotion: [
      { name: "Body Lotion Whitening", price: "Rp 75.000" },
      { name: "Body Lotion Moisture", price: "Rp 80.000" },
    ],
    body_wash: [
      { name: "Body Wash Fresh", price: "Rp 60.000" },
      { name: "Body Wash Relax", price: "Rp 65.000" },
    ],
    scrub: [
      { name: "Scrub Coffee", price: "Rp 50.000" },
      { name: "Scrub Matcha", price: "Rp 55.000" },
    ],
    serum: [
      { name: "Brightening Serum", price: "Rp 90.000" },
      { name: "Hydrating Serum", price: "Rp 95.000" },
    ],
    day_cream: [
      { name: "Day Cream SPF 30", price: "Rp 100.000" },
    ],
    night_cream: [
      { name: "Night Cream Repair", price: "Rp 110.000" },
    ],
    body_serum: [
      {name: "Loving", price: "Rp 75000" },
    ],
    parfume_shower_serum: [
      { name: "Shine bright", price: "50000" },
      ],
    sunscreen: [
      { name: "Sun Bright", price: "50000" },
    ],
  }

  const menus = [
    { key: "parfum", label: "Parfum" },
    { key: "body_lotion", label: "Body Lotion" },
    { key: "body_wash", label: " Body Wash" },
    { key: "scrub", label: " Scrub" },
    { key: "serum", label: " Serum" },
    { key: "day_cream", label: " Day Cream" },
    { key: "night_cream", label: "Night Cream" },
    { key: "body_serum", label: "Body Serum"},
    { key: "parfum_shower_serum", label: "Shower Serum"},
    { key: "sunscreen", label: "Sunscreen"},
  ]

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r shadow-sm flex flex-col">
        <div className="px-4 py-3 border-b">
          <h1 className="text-lg font-bold text-pink-600">Scarlet Store</h1>
        </div>
        <nav className="flex-1 overflow-y-auto p-2 space-y-1">
          {menus.map((m) => (
            <button
              key={m.key}
              onClick={() => setActiveMenu(m.key)}
              className={`w-full text-left px-4 py-2 rounded transition ${
                activeMenu === m.key
                  ? "bg-pink-600 text-white font-semibold"
                  : "hover:bg-pink-100"
              }`}
            >
              {m.label}
            </button>
          ))}
        </nav>
        <div className="px-4 py-3 border-t text-xs text-gray-500">
          © 2025 Scarlet Store
        </div>
      </div>

      {/* Konten Produk */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 capitalize">
          {activeMenu.replace("_", " ")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products[activeMenu]?.map((p, i) => (
            <div
              key={i}
              className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="text-gray-600">{p.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
