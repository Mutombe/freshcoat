import { CheckCircle, Phone, Calendar, ArrowRight } from "lucide-react";
import { ProjectCard } from "./card";
import { useNavigate } from "react-router-dom";

const PaintingService = () => {
  const navigate = useNavigate();
  const projects = [
    {
      title: "Modern Minimalist Home",
      description:
        "Complete interior and exterior painting with a modern gray palette",
      image: "/paint.jpeg",
      duration: "2 weeks",
      status: "Completed",
    },
    {
      title: "Victorian Heritage Restoration",
      description:
        "Historical property restoration with period-accurate colors",
      image: "/building.webp",
      duration: "6 weeks",
      status: "Completed",
    },
    {
      title: "Corporate Office Complex",
      description:
        "Multi-floor commercial painting project with custom branding",
      image: "/paint2.jpeg",
      duration: "4 weeks",
      status: "Completed",
    },
  ];

  return (
    <div className="bg-white">
      <div className="relative h-96">
        <img
          src="/painting.jpg"
          alt="Expert Painting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Expert Painting Services
            </h1>
            <p className="text-xl max-w-2xl">
              Transform your space with our premium painting services
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Our Painting Excellence</h2>
            <p className="text-gray-600 mb-6">
              With over 25 years of experience, we specialize in delivering
              exceptional painting services for both residential and commercial
              properties. Our team of expert painters combines technical
              expertise with artistic vision to transform any space.
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Our Painting Services Include:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Interior Painting",
                "Exterior Painting",
                "Color Consultation",
                "Wallpaper Installation",
                "Texture Application",
                "Cabinet Refinishing",
                "Deck & Fence Staining",
                "Commercial Painting",
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-6">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

          <div>
            <div className="bg-gray-50 p-6 rounded-xl sticky top-6">
              <h3 className="text-xl font-bold mb-4">
                Schedule a Consultation
              </h3>
              <p className="text-gray-600 mb-6">
                Ready to transform your space? Contact us for a free
                consultation and quote.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-red-600" />
                  <span>+263 77 100 8329</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-red-600" />
                  <span>Available Mon-Sat, 8am-6pm</span>
                </div>
                <button
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  onClick={() => navigate("/contact")}
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaintingService;
