/* eslint-disable react/prop-types */
import "./modernButton.css";

const ModernButton = ({
  filter,
  filterImages,
  activeFilter,
  setActiveFilter,
}) => {
  return (
    <button
      className="button-52"
      role="button"
      onClick={() => {
        filterImages(filter);
        setActiveFilter(filter);
      }}
    >
      {filter}
    </button>
  );
};

export default ModernButton;
