"use client"
import * as React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

type Product = { 
  name: string
  price: number
  img: string
  description: string
}

export default function DashboardPage() {
  const [activeCategory, setActiveCategory] = React.useState("parfum")
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null)
  const [cart, setCart] = React.useState<Product[]>([])
  const [isCartOpen, setIsCartOpen] = React.useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = React.useState(false)
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null)
  const router = useRouter()

  // === DATA PRODUK LENGKAP ===
  const products: Record<string, Product[]> = {
    parfum: [
      { name: "Velvet Rouge", price: 61000, img: "/menu/vel.png", description: "Aroma manis & floral, melembapkan kulit,tahan hingga 16 jam." },
      { name: "Dreamy", price: 62000, img: "/menu/dreami.png", description: "Wangi lembut dengan sentuhan vanilla,tahan hingga 8 jam." },
      { name: "Sweet Memories", price: 60000, img: "/menu/sweet.png", description: "Aroma segar, tahan lama hingga 8 jam." },
      { name: "Garden Of Whisper", price: 610000, img: "/menu/garden.png", description: "Wangi bunga dan herbal, melembutkan kulit,tahan hingga 16 jam." },
      { name: "Biru Samudra", price: 67000, img: "/menu/biru.webp", description: "Wangi segar dan fresh perpaduan buah dan bunga,tahan hingga 8 jam." },
      { name: "Pistachio Crush", price: 61000, img: "/menu/crush.png", description: "Manis hangat creamy es krim pistachio dan vanilla,tahan hingga 16 jam." },
      { name: "Tea Amor", price: 61000, img: "/menu/tea.png", description: "Segar manis rilex teh melati campur madu,tahan hingga 12 jam." },
      { name: "Golden Elixir", price: 61000, img: "/menu/golden.png", description: "Strong mewah nuansa arab amber tahan 16 jam." },
      { name: "Purple Kiss", price: 61000, img: "/menu/purple.png", description: "Wangi super glamor dan sweet cocok di pakai saat indoor,tahan hingga 16 jam." },
      { name: "Jolly", price: 61000, img: "/menu/jol.avif", description: "Manis ringan kopi vanilla black opium,tahan hingga 16 jam." },
      { name: "Banana Fusion", price: 61000, img: "/menu/banana.jpg", description: "Manis segar creamy dengan pisang,mandarin dan vanilla,tahan hingga 12 jam." },
      { name: "Caramel Latte", price: 61000, img: "/menu/caramel.jpg", description: "Manis hangat mewah kue caramel atau popcorn caramel,tahan hingga 16 jam." },
      { name: "Euphoria", price: 60000, img: "/menu/euphoria.png" , description: "tipikal parfum ringan dan fresh,dominan wangi bunga yang cenderung ga begitu manis,tahan hingga 8 jam."},
      { name: "Wonderland", price: 60000, img: "/menu/wonderland.png", description: "Aromanya girly fresh,bikin badan segar seharian,tahan hingga 6 jam." },
      { name: "La Foret Fairy", price: 60000, img: "/menu/foret.png", description: "Wangi rose dan cherry,tahan hingga 8 jam ." },
      { name: "Passionate", price: 60000, img: "/menu/pasionate.png", description: "Wangi yang kalem dan lembut,cocok buat cewe yang feminim dan buat mood jadi baik,tahan hingga 6-8 jam." },
      { name: "Cotton Hug", price: 65000, img: "/menu/cotton.png", description: "Wangi fresh segar clean,vibes pagi hari wangi bayi habis mandi,tahan hingga 16 jam"},
      { name: "Sweetie love", price: 65000, img: "/menu/sweetie.png", description: "Wangi sweet fruity pear,apel,manis vanilla caramel lembut,tahan hingga 16 jam"},
    ],
    body_serum: [
      { name: "Jolly", price: 57000, img: "/menu/ly.png", description: "Membantu mengangkat sel-sel kulit mati dan mencerahkan (Base note : Vanilla,Sandalwood,Patchouli)." },
      { name: "Loving", price: 57000, img: "/menu/loving.png", description: "Membantu mengangkat sel-sel kulit mati dan mencerahkan (Base note : Fruity,Floral,Woody)." },
      { name: "Charming", price: 57000, img: "/menu/charr.png", description: "Membantu mengangkat sel-sel kulit mati dan mencerahkan (Base note : Moss,Musk,Amber)." },
      { name: "Happy", price: 57000, img: "/menu/happy.jpg" , description: "Membantu mengangkat sel-sel kulit mati dan mencerahkan (Base note : Musk,Amber,Orris)."},
      { name: "Velvet Rouge", price: 37000, img: "/menu/rouge.png", description: "Membantu mengangkat sel-sel kulit mati dan mencerahkan (Base note : Vanilla,Tonka bean,Musk)." },
      { name: "Purple Kiss", price: 37000, img: "/menu/kis.jpg" , description: "Membantu mengangkat sel-sel kulit mati dan mencerahkan (Base note : Vanilla,Vetiver,Labdanum,Cistus)."},
    ],
    body_lotion: [
      { name: "Jolly", price: 57000, img: "/menu/joll.jpg", description: "Membantu mencerahkan kulit & menyamarkan noda gelap pada kulit." },
      { name: "Charming", price: 57000, img: "/menu/charming.png", description: "Mencerahkan dan meratakan warna kulit badan,melembapkan kulit dengan optimal." },
       { name: "Romansa", price: 57000, img: "/menu/romansa.png", description: "Meratakan warna kulit yang belang,melindungi kulit dari efek buruk radikal bebas akibat sinar ultraviolet." },
      { name: "Freshy", price: 57000, img: "/menu/fresh.png", description: "Menjaga kekencangan & elastisitas kulit." },
      { name: "Fantasia", price: 57000, img: "/menu/fantasi.webp" , description: "Menyamarkan noda hitam pada kulit badan,bekas luka,melembapkan dan mencegah kulit kering."},
      { name: "Happy", price: 57000, img: "/menu/hapy.png" , description: "Meratakan warna kulit,melembapkan dengan optimal."},
    ],
    body_wash: [
      { name: "Body Wash Coffee", price: 52000, img: "/menu/cofi.jpeg", description: "Mengangkat sel kulit mati,meregenerasi sel kulit." },
      { name: "Body Wash Charming", price: 52000, img: "/menu/carming.webp", description: "Mempercepat regenerasi kulit,meningkatkan elastisitas kulit,mencerahkan kulit." },
      { name: "Body Wash Jolly", price: 52000, img: "/menu/joly.jpeg", description: "Melembapkan kulit,mencerahkan kulit,menutrisi kulit dengan kolagen." },
      { name: "Body Wash Cucumber", price: 52000, img: "/menu/cucumber.png" , description: "Memperbaiki lapisan kulit yang rusak,menyamarkan noda hitam atau bekas luka,melembapkan kulit."},
      { name: "Body Wash Mango", price: 52000, img: "/menu/mango.jpg" , description: "Mencerahkan kulit,melawan radikal bebas,melindungi kulit dari paparan sinar matahari yang menyengat."},
      { name: "Body Wash Freshy", price: 52000, img: "/menu/fres.png", description: "Membuat kulit lebih kuat,sehat,dan tampak glowing berkat kandungan glutathione." },
      { name: "Body Wash Happy", price: 52000, img: "/menu/hapi.png", description: "Menjaga kelembapan,kesehatan,dan kesegaran kulit tubuh." },
      { name: "Body Wash Pomegrante", price: 52000, img: "/menu/char.jpg", description: "Mencerahkan kulit sehingga tampak segar,mencegah kulit tampak kusam dan kering." },
    ],
    body_cream: [
      { name: "Body Cream Happy", price: 30000, img: "/menu/lyy.webp", description: "Membantu mencerahkan & melembapkan (Base note : Vanilla,Sandalwood,Patchouli,Cedarwood,Amber,Musk)." },
      { name: "Body Cream Jolly", price: 30000, img: "/menu/py.png", description: "Membantu mencerahkan & melembapkan (Base note : Musk,Amber,Orris,Vanilla,Tonkabean)." },
      { name: "Body Cream Charming", price: 30000, img: "/menu/mingg.png" , description: "Membantu mencerahkan & melembapkan (Base note : Moss,Musk,Amber,Caramel,Cedar)."},
    ],
    shower_serum: [
      { name: "Shine bright", price: 50000, img: "/menu/shine.png", description: "Mencerahkan kulit kusam,membantu menyamarkan noda,serta menjadikan kulit tampak lebih glowing dan merata." },
      { name: "Hydra brust", price: 50000, img: "/menu/hydra.png", description: "Memberikan hidrasi intensif,membantu menjaga kelembapan kulit hingga ke lapisan terdalam,kulit terasa kenyal,halus dan tetap lembap sepanjang hari." },
      { name: "Acne care", price: 50000, img: "/menu/care.png", description: "Membantu megurangi jerawat punggung,serta menenangkan kulit yang rentan berjerawat." },
    ],
     scrub: [
      { name: "Scrub Coffee", price: 55000, img: "/menu/kopi.jpg", description: "Membantu mencerahkan & meratakan kulit (COFFE-VANILLA-FLORAL-AMBERY)." },
      { name: "Scrub Charming", price: 55000, img: "/menu/ming.png", description: "Membantu mencerahkan & meratakan kulit (FLORAL-AMBER-WOODY)." },
      { name: "Scrub Romansa", price: 55000, img: "/menu/mansa.jpg", description: "Membantu mencerahkan & meratakan kulit (FRUITY-FLORAL-GOURMAND)." },
      { name: "Scrub Happy", price: 55000, img: "/menu/hepi.webp" , description: "Membantu mencerahkan & meratakan kulit (FLORAL-AMBER-MUSKY)."},
      { name: "Scrub Pomegrante", price: 55000, img: "/menu/pomegrante.jpg", description: "Membantu mencerahkan & meratakan kulit (FLORAL-FRUITY-GOURMAND)." },
      { name: "Scrub Jolly", price: 55000, img: "/menu/joli.webp" , description: "Membantu mencerahkan & meratakan kulit (FLORAL-AMBER-GOURMAND)."},
      { name: "Scrub Loving", price: 55000, img: "/menu/lov.png", description: "Membantu mencerahkan & meratakan kulit (FRUITY-FLORAL-WOODY)." },
    ],
    serum: [
      { name: "Brightening Serum", price: 55000, img: "/menu/bright.png", description: "Mengontrol minyak berlebih,mengecilkan pori-pori." },
      { name: "Acne Serum", price: 55000, img: "/menu/acne.png", description: "Membantu membersihkan kulit dari minyak berlebih dan bakteri penyebab jerawat." },
      { name: "Glowtening Serum", price: 55000, img: "/menu/glow.jpg", description: "Membantu melembapkan serta mencerahkan kulit wajah." },
      { name: "Blue Hydra", price: 44000, img: "/menu/blue.jpg", description: "Mengatasi kemerahan,iritasi dan kulit kering." },
      { name: "C-Power Serum", price: 62000, img: "/menu/c power.webp", description: "Jenis vitamin C yang menembus lapisan kulit paling dalam sehingga 50x lebih efektif dari Vit C biasa untuk mencerahkan kulit dengan minim potensi iritasi." },
      { name: "Niacinamide Serum", price: 40000, img: "/menu/niaci.jpg", description: "Mencerahkan kulit,menyamarkan noda hitam & bekas jerawat dengan minim iritasi." },
      { name: "Red Exfo Peeling Serum", price: 43000, img: "/menu/red.png" , description: "15% AHA,BHA,PHA mengeksfoliasi dan membantu memperbaiki tekstur kulit."},
      { name: "Brightly Ever After Serum", price: 57000, img: "/menu/after.webp", description: "Menjaga kelembapan dan mengurangi penguapan kandungan air dalam kulit wajah." },
      { name: "Hyalu B5 Serum", price: 55000, img: "/menu/hyalu.png" , description: "Membantu kusam,kerutan,garis-garis halus dan warna kulit tidak ada."},
      { name: "Retinol Serum", price: 62000, img: "/menu/retinol.png" , description: "Mengencangkan kulit dan menghilangkan garis halus."},
      { name: "Blue Hydra Intensive Calming Serum", price: 62000, img: "/menu/gel hydra.png", description: "Meningkatkan hidrasi dan membantu merawat elastisitas kulit,menjadikankan kulit terasa lebih halus,kenyal dan sehat." },
    ],
    day_night_cream: [
      { name: "Day Cream Brightly", price: 55000, img: "/menu/day birght.jpg", description: "Melembapkan,menghidrasi,serta membantu mempercepat proses regenerasi kulit wajah." },
      { name: "Day Cream Acne", price: 55000, img: "/menu/day acne.jpg", description: "Meredakan peradangan jerawat serta kemerahan pada kulit wajah tanpa membuat iritasi." },
      { name: "Night Cream Brightly", price: 55000, img: "/menu/night bright.jpg", description: "Menghaluskan kulit bertekstur dan menyamarkan pori-pori wajah." },
      { name: "Night Cream Acne", price: 55000, img: "/menu/night acne.jpg" , description: "Menyamarkan tampilan pori-pori,mencegah munculnya komedo,dan melembapkan kulit."},
    ],
    sunscreen: [
      { name: "Sun Bright", price: 55000, img: "/menu/sun.png" , description: "Pro Vitamin B5 & Phyto Whitening,Melembapkan dan mencerahkan kulit."},
      { name: "Ultra Light", price: 55000, img: "/menu/ultra.png", description: "Melindungi kulit dari sinar UVA & UVB." },
    ],
    moisturize: [
      { name: "7X Ceramide Moisturize", price: 60000, img: "/menu/7x.png" , description: "Merawat skin barier dan menjaga kelembapan."},
      { name: "Aqua Reset&Barrier Glow Bright Gel Moisturize", price: 58000, img: "/menu/aqua.png" , description: "Mengontrol minyak dengan 2X Oil Balancing Formula dari Witch Hazel & Tea Tree."},
      { name: "Brightly Ever After Night Cream", price: 60000, img: "/menu/brightly after.webp", description: "Melembapkan,mencerahkan dan menyamarkan noda gelap pada kulit wajah." },
    ],
    cleanser: [
      { name: "Facial Wash Brightening", price: 60000, img: "/menu/fc bright.jpg" , description: "Dengan 4x Brightening Glow Booster untuk kulit bersih dan cerah."},
      { name: "Facial Wash Acne", price: 60000, img: "/menu/fc acne.png" , description: "Efektif melawan bakteri penyebab jerawat sekaligus menenangkan kulit wajah tanpa menyebabkan iritasi."},
      { name: "Brightening Cloud Facial Foam", price: 58000, img: "/menu/foam bright.png", description: "Mengangkat kotoran dan sel kulit mati dengan lembut." },
      { name: "Acne Cloud Facial Foam", price: 58000, img: "/menu/foam acne.webp", description: "Membuka pori-pori yang tersumbat dan menghilangkan sel kulit mati." },
      { name: "Glow Bright Gel Cleanser", price: 45000, img: "/menu/gel bright.png" , description: "Antioksidan untuk mencegah kulit kusam akibat paparan radikal bebas."},
      { name: "Glow Acne Gel Cleanser", price: 45000, img: "/menu/gel acne.png", description: "Anti-inflamasi yang menenangkan kemerahan akibat jerawat." },
    ],
    toner: [
      { name: "Bright Essence Toner", price: 60000, img: "/menu/toner bright.png", description: "Butiran yang mengandung Niacinamide sehingga dapat menyamarkan noda hitam,mencerahkan kulit, dan menjaga kelembapan kulit." },
      { name: "Acne Essence Toner", price: 60000, img: "/menu/toner acne.webp" , description: "Mengontrol produksi minyak berlebihan dan melawan bakteri penyebab jerawat."},
      { name: "Hyalu B9 Toner", price: 65000, img: "/menu/toner hyalu.png", description: "Menjaga elastisitas dan melembapkan kulit,menjaga kesehatan skin barier." },
      { name: "Bright Ever After Essence Foam", price: 75000, img: "/menu/bright foam.jpg", description: "5% Niacinamide bahan aktif yang dapat membantu mencerahkan kulit dan meratakan warna kulit." },
    ],
 mask: [
      { name: "Herbalism Mugwort Mask", price: 65000, img: "/menu/herbalism.jpg", description: "Meredakan peradangan pada jerawat serta memudahkan jerawat dan flek hitam." },
      { name: "Seriously Shoting & Hydrating Gel Mask", price: 65000, img: "/menu/hydrating.png", description: "Menyamarkan noda gelap,melindungi kulit dari paparan sinar UV, serta meningkatkan elastisitas kulit." },
    ],
  }

  const categories = [
    { key: "parfum", label: "Parfum", subMenus: [] },
    {
      key: "body_care",
      label: "Body Care",
      subMenus: [
        { key: "body_serum", label: "Body Serum" },
        { key: "scrub", label: "Scrub" },
        { key: "shower_serum", label: "Shower Serum" },
        { key: "body_lotion", label: "Body Lotion" },
      ],
    },

    {
      key: "skin_care",
      label: "Skin Care",
      subMenus: [
        { key: "serum", label: "Serum" },
        { key: "day_night_cream", label: "Cream" },
        { key: "sunscreen", label: "Sunscreen" },
        { key: "moisturize", label: "Moisturize" },
        { key: "cleanser", label: "Cleanser" },
        { key: "toner", label: "Toner" },
        { key: "mask", label: "Mask" },
      ],
    },

  ]

  const addToCart = (product: Product) => setCart([...cart, product])
  const removeFromCart = (i: number) => setCart(cart.filter((_, idx) => idx !== i))
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)

  const currentCategory = React.useMemo(
    () => categories.find((c) => c.key === activeCategory) ?? null,
    [activeCategory]
  )

  React.useEffect(() => {
    if (!currentCategory) {
      setActiveMenu(null)
      return
    }
    const sm = currentCategory.subMenus ?? []
    if (sm.length > 0) {
      if (!activeMenu || !sm.some((s) => s.key === activeMenu)) {
        setActiveMenu(sm[0].key)
      }
    } else {
      setActiveMenu(currentCategory.key)
    }
  }, [currentCategory, activeMenu])

  const visibleProducts = React.useMemo(() => {
    if (!activeMenu) return []
    return products[activeMenu] ?? []
  }, [activeMenu])

  const handleLogout = () => {
    alert("Anda berhasil logout!")
    router.push("/")
  }

  // === FUNGSI CHECKOUT DALAM APLIKASI ===
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Keranjang masih kosong!")
      return
    }
    setIsCheckoutOpen(true)
  }

  const confirmPurchase = () => {
    alert("Pembelian berhasil! Terima kasih telah berbelanja ")
    setCart([])
    setIsCheckoutOpen(false)
    setIsCartOpen(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100">
       {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-pink-100 via-pink-200 to-pink-100">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="block bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">Scarlett Whitening</span>
              <span className="block text-gray-800 mt-2 text-2xl">Kulit Cerah,</span>
              <span className="block bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent text-2xl">Wangi Mewah</span>
            </h2>
            <p className="mt-3 text-lg text-gray-600">Perawatan tubuh premium dengan sentuhan wangi elegan — lembut untuk kulit, tahan lama untuk wangi.</p>
          </div>
          <div className="flex justify-center">
            <Image src="/menu/h2h.webp" alt="Scarlett Models" width={700} height={700} className="rounded-xl object-contain max-h-[400px]" />
          </div>
        </div>
      </section>

      {/* Header */}
      <div className="flex justify-center gap-6 bg-white/80 backdrop-blur py-3 border-b sticky top-0 z-20 shadow-sm">
        {categories.map((c) => (
          <button
            key={c.key}
            onClick={() => setActiveCategory(c.key)}
            className={`px-2 pb-1 text-lg font-semibold transition ${
              activeCategory === c.key
                ? "text-pink-600 border-b-2 border-pink-600"
                : "text-gray-700 hover:text-pink-500"
            }`}
          >
            {c.label}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-4 pr-6 relative">
          <button className="text-gray-600 hover:text-pink-600 text-2xl" onClick={() => setIsCartOpen(true)}>🛒</button>
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
          <button
            onClick={handleLogout}
            className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Log Out
          </button>
        </div>
      </div>

      {/* Submenu */}
      {currentCategory?.subMenus.length ? (
        <div className="flex justify-center gap-4 py-2 bg-white border-b">
          {currentCategory.subMenus.map((sub) => (
            <button
              key={sub.key}
              onClick={() => setActiveMenu(sub.key)}
              className={`px-3 py-1 rounded-lg ${
                activeMenu === sub.key
                  ? "bg-pink-500 text-white"
                  : "bg-gray-100 hover:bg-pink-100"
              }`}
            >
              {sub.label}
            </button>
          ))}
        </div>
      ) : null}

      {/* Produk */}
      <div className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleProducts.map((p, i) => (
          <div
            key={i}
            className="p-4 border rounded-xl bg-white shadow hover:shadow-lg hover:scale-[1.02] transition flex flex-col items-center cursor-pointer"
            onClick={() => setSelectedProduct(p)}
          >
            <Image src={p.img} alt={p.name} width={160} height={160} className="rounded-lg object-cover mb-3 w-[160px] h-[160px]" />
            <h3 className="text-lg font-semibold text-center text-pink-700">{p.name}</h3>
            <p className="text-gray-600 mb-3">Rp {p.price.toLocaleString("id-ID")}</p>
            <button
              onClick={(e) => {
                e.stopPropagation()
                addToCart(p)
              }}
              className="px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg hover:opacity-90 transition w-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Modal Cart */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b p-4">
              <h3 className="text-lg font-bold">Keranjang Belanja</h3>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-600 hover:text-red-500 text-xl">✕</button>
            </div>
            <div className="p-4 space-y-3">
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center">Keranjang kosong</p>
              ) : (
                cart.map((item, i) => (
                  <div key={i} className="flex items-center justify-between border-b pb-2">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-500">Rp {item.price.toLocaleString("id-ID")}</p>
                    </div>
                    <button onClick={() => removeFromCart(i)} className="text-red-500 hover:underline text-sm">Hapus</button>
                  </div>
                ))
              )}
            </div>
            {cart.length > 0 && (
              <div className="p-4 border-t">
                <p className="font-bold">Total: Rp {totalPrice.toLocaleString("id-ID")}</p>
                <button
                  onClick={handleCheckout}
                  className="mt-3 w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
                >
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal Checkout */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button onClick={() => setIsCheckoutOpen(false)} className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl">✕</button>
            <h2 className="text-2xl font-bold text-center text-pink-700 mb-4">Checkout</h2>
            <div className="space-y-3">
              {cart.map((item, i) => (
                <div key={i} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>Rp {item.price.toLocaleString("id-ID")}</span>
                </div>
              ))}
            </div>
            <div className="border-t mt-4 pt-2 flex justify-between font-bold">
              <span>Total</span>
              <span>Rp {totalPrice.toLocaleString("id-ID")}</span>
            </div>
            <button
              onClick={confirmPurchase}
              className="mt-4 w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
            >
              Konfirmasi Pembelian
            </button>
          </div>
        </div>
      )}

      {/* Modal Detail Produk */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl">✕</button>
            <Image src={selectedProduct.img} alt={selectedProduct.name} width={300} height={300} className="rounded-lg object-cover mx-auto mb-4"/>
            <h3 className="text-2xl font-bold text-pink-700 text-center">{selectedProduct.name}</h3>
            <p className="text-gray-600 text-center mb-3">Rp {selectedProduct.price.toLocaleString("id-ID")}</p>
            <p className="text-gray-700">{selectedProduct.description}</p>
            <button
              onClick={() => { addToCart(selectedProduct); setSelectedProduct(null) }}
              className="mt-4 w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
