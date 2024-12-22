import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";

export const ProjectCard = ({ project }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> {project.duration}
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4" /> {project.status}
          </span>
        </div>
      </div>
    </motion.div>
  );