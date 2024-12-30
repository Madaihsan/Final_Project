import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Deskripsi Perusahaan */}
      <div className="container mx-auto mt-8 p-4">
        <h2 className="text-3xl font-bold mb-4">Welcome to Our Company</h2>
        <p className="text-gray-700 text-lg">
          Kami adalah perusahaan yang bergerak di bidang **produksi barang** berkualitas tinggi. 
          Dengan pengalaman bertahun-tahun, kami berkomitmen memberikan produk terbaik 
          kepada pelanggan dengan inovasi dan teknologi modern.
        </p>
      </div>
    </div>
  );
}
