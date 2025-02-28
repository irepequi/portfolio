import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import PropTypes from "prop-types";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="img-container">
      <div ref={ref}>
        <img src={`/photos/cityscape/${id}.jpg`} alt="A London skyscraper" />
      </div>
      <motion.h2
        // Hide until scroll progress is measured
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
      >{`#00${id}`}</motion.h2>
    </section>
  );
}

Image.propTypes = {
  id: PropTypes.number.isRequired,
};

export default function CardComponent() {
  return (
    <div id="example">
      {[1, 2, 3, 4, 5].map((image) => (
        <Image key={image} id={image} />
      ))}
      {/* <StyleSheet /> */}
    </div>
  );
}
