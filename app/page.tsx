// app/page.tsx
import { getProjects } from '@/lib/data'; // Impor fungsi baru kita

export default async function HomePage() {
  // Panggil fungsi untuk mendapatkan data proyek langsung dari database
  const projects = await getProjects();

  return (
    <main className="container mx-auto p-4 sm:p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">My Portfolio</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: any) => (
          <div key={project.id} className="border rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}

        {projects.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            Belum ada proyek untuk ditampilkan. Silakan tambahkan melalui halaman admin.
          </p>
        )}
      </div>
    </main>
  );
}