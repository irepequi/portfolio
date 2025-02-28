const ProjectCard = ( image, title, linkGithub, linkVercel, index ) => {
  
  const handleNavigation = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex">
      <img src={image} alt={title} className="w-1/2 h-64 object-cover" />
      <div className="p-4 w-1/2">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <div className="flex space-x-4 mt-4">

          <button
            onClick={() => handleNavigation(linkGithub)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Code
          </button>
          {linkVercel && (
            <button
              onClick={() => handleNavigation(linkVercel)}
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Demo
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
