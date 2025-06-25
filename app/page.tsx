// app/page.tsx

// Fungsi ini akan berjalan di server untuk mengambil data
async function getProjects() {
  // Menentukan URL dasar secara dinamis agar bisa bekerja di lokal dan di Vercel
  const baseURL = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

  // Mengambil data dari API internal kita yang sudah dibuat
  const res = await fetch(`${baseURL}/api/projects`, { 
    cache: 'no-store' // Opsi ini memastikan data selalu yang terbaru
  });

  if (!res.ok) {
    // Jika gagal, akan menampilkan halaman error
    throw new Error('Failed to fetch projects');
  }
  return res.json();
}

// Komponen Halaman Utama Anda
export default async function HomePage() {
  // Panggil fungsi untuk mendapatkan data proyek
  const projects = await getProjects();

  return (
    <main className="container mx-auto p-4 sm:p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">My Portfolio</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Lakukan looping pada data proyek dan tampilkan satu per satu */}
        {projects.map((project: any) => (
          <div key={project.id} className="border rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}

        {/* Tampilkan pesan ini jika tidak ada proyek */}
        {projects.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            Belum ada proyek untuk ditampilkan. Silakan tambahkan melalui halaman admin.
          </p>
        )}
      </div>
    </main>
  );
}