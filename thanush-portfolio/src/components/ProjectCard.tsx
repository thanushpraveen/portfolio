interface ProjectCardProps {
  title: string;
  description: string;
  icon: string;
  gradientClass: string;
  fullWidth?: boolean;
}

const ProjectCard = ({
  title,
  description,
  icon,
  gradientClass,
  fullWidth = false,
}: ProjectCardProps) => {
  return (
    <div className={`project-card ${fullWidth ? "md:col-span-2" : ""}`}>
      <div className="flex items-center mb-4">
        <div
          className={`w-12 h-12 ${gradientClass} rounded-lg flex items-center justify-center mr-4`}
        >
          <i className={`${icon} text-white`}></i>
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default ProjectCard;
