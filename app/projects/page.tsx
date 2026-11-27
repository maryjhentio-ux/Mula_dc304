
export const metadata = {
  title: "Projects | Mary Jhen",
};

const projects = [
  {
    id: 1,
    name: "Mary Jhen's Coffee",
    description:
      "A coffee inventory management system for managing coffee products and stock.",
  },
  {
    id: 2,
    name: "PC Track",
    description:
      "A Personal Collection Business Management System that helps manage customer information, purchases, debts, payments, inventory, and product expiration dates.",
  },
  {
    id: 3,
    name: "Personal Website",
    description:
      "A personal website created using Next.js and Tailwind CSS.",
  },
  
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold">
        My Projects
      </h1>

       <div className="mt-6 space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-lg border p-5"
          >
            <h2 className="text-xl font-semibold">
              {project.name}
            </h2>

            <p className="mt-2">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
