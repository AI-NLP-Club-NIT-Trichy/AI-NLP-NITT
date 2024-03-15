import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion'; // Import motion and useAnimation from framer-motion

const HoverCard = ({ children, backgroundColor, direction, left }) => {
  const [hovered, setIsHovered] = useState(false);
  const controls = useAnimation(); // Create animation controls

  const handleMouseEnter = () => {
    setIsHovered(true);
    controls.start({ scale: 1.1 }); // Scale up on hover
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    controls.start({ scale: 1 }); // Reset scale on mouse leave
  };

  return (
    <motion.div
      className="overflow-hidden mb-3 md:mb-8 rounded-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor }} // Apply background color
      animate={controls} // Pass animation controls
    >
      {children}
    </motion.div>
  );
};

export default HoverCard;
