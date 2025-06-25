// app/page.tsx

// Mengimpor fungsi untuk mengambil data dari file terpusat kita
import { getProjects } from '@/lib/data';

// Mendefinisikan 'cetakan' atau tipe data untuk sebuah objek Project.
// Ini memperbaiki error "no-explicit-any" karena kita sekarang spesifik tentang bentuk datanya.
type Project = {
  id: number;
  title: string;
  description: string | null; // Tipe data bisa string atau null
  image_url: string | null;   // Tipe data bisa string atau null
  created_at: string;
};

// Komponen halaman utama sekarang adalah 'async' karena ia akan menunggu data diambil.
export default async function HomePage() {
  // Panggil fungsi untuk mendapatkan data proyek langsung dari database sebelum halaman di-render.
  const projects = await getProjects();

  return (
    // Kita gunakan kelas dari Tailwind CSS untuk styling cepat.
    <main className="container mx-auto p-4 sm:p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        My Portfolio
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Lakukan looping pada data proyek dan tampilkan satu per satu */}
        {projects.map((project: Project) => (
          // Menggunakan tipe 'Project' yang sudah kita definisikan
          <div 
            key={project.id} 
            className="border rounded-lg p-6 bg-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              {project.title}
            </h2>
            <p className="text-gray-600">
              {project.description}
            </p>
          </div>
        ))}

        {/* Bagian ini akan tampil jika tidak ada proyek di database */}
        {projects.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-10">
            <p>Belum ada proyek untuk ditampilkan.</p>
            <p>Silakan tambahkan proyek baru melalui halaman admin.</p>
          </div>
        )}
      </div>
    </main>
  );
}