interface TechBadgeProps {
  icon: string;
  label: string;
  category?:
    | "frontend"
    | "backend"
    | "database"
    | "cloud"
    | "devops"
    | "testing";
}

const TechBadge = ({ icon, label, category = "frontend" }: TechBadgeProps) => {
  const getCategoryStyle = (category: string) => {
    switch (category) {
      case "frontend":
        return "bg-blue-500 text-white border-blue-600";
      case "backend":
        return "bg-green-500 text-white border-green-600";
      case "database":
        return "bg-purple-500 text-white border-purple-600";
      case "cloud":
        return "bg-orange-500 text-white border-orange-600";
      case "devops":
        return "bg-red-500 text-white border-red-600";
      case "testing":
        return "bg-indigo-500 text-white border-indigo-600";
      default:
        return "bg-gray-500 text-white border-gray-600";
    }
  };

  return (
    <div className={`tech-badge-simple ${getCategoryStyle(category)}`}>
      <i className={`${icon} mr-2`}></i>
      <span className="font-medium">{label}</span>
    </div>
  );
};

export default TechBadge;
