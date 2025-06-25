// app/page.tsx
//ss
import { getProjects } from '@/lib/data';
import { Project } from '@/lib/definitions'; // Impor tipe Project dari file terpusat

export default async function HomePage() {
  const projects = await getProjects();

  return (
    <main className="container mx-auto p-4 sm:p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        My Portfolio
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Kode di sbawah ini tidak perlu diubah karena tipenya sekarang sudah cocok */}
        {projects.map((project: Project) => (
          <div 
            key={project.id} 
            className="border rounded-lg p-6 bg-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              {project.title}
            </h2>
            <p className="text-gray-600">
              {project.description}
            </p>
          </div>
        ))}

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