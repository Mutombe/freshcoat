// pages/Projects.jsx
import { motion } from "framer-motion";

const Projects = () => {
    const projects = [
      {
        title: "Modern Office Renovation",
        category: "Commercial",
        description: "Complete renovation of a 5000 sq ft office space including custom paint work and ceiling installations.",
        image: "/office.jpg"
      },
      {
        title: "Luxury Home Interior",
        category: "Residential",
        description: "High-end interior painting and custom tiling work for a luxury home in the city center.",
        image: "/home.jpg"
      },
      {
        title: "Restaurant Makeover",
        category: "Commercial",
        description: "Full interior and exterior renovation including custom tile work and decorative ceiling elements.",
        image: "/rest.webp"
      },
      {
        title: "Historic Building Restoration",
        category: "Heritage",
        description: "Careful restoration of a historic building's interior and exterior surfaces.",
        image: "/building.webp"
      }
    ];
  
    return (
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
            <p className="text-xl text-gray-600">Showcasing our finest work</p>
          </motion.div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-red-600 font-semibold">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2">{project.title}</h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                  <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  
  export default Projects;