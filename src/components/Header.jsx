import { motion } from "motion/react";
import ParallaxText from "./ParallaxText";

const Header = () => {
  return (
    <>
      <div className="bg-primary min-h-screen flex flex-col items-center justify-center">
        {/* Header */}
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          👋 ¡Hola, soy Irene!
        </motion.h1>

        <motion.h3>
          Escribo código, diseño experiencias. ¡Descubre lo que hago!
        </motion.h3>

        {/* Animated Button */}
        <motion.button
          className="mt-6 px-6 py-2 bg-secondary rounded-full text-lg shadow-lg hover:bg-opacity-80 transition cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore
        </motion.button>
      </div>
      <>
        {/* Parallax Text */}
        {/* <ParallaxText baseVelocity={-5}>Frontend Web Developer</ParallaxText>
        <ParallaxText baseVelocity={5}>Frontend Web Developer</ParallaxText> */}
      </>
    </>

    // <section className="text-center py-20 bg-purple-300">
    //   <h2 className="text-4xl font-bold text-purple-900">
    //
    //   </h2>
    //   <p className="text-purple-800 mt-4">
    //     Frontend Developer
    //   </p>
    //   <a
    //     href="#projects"
    //     className="mt-6 inline-block px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
    //   >
    //     Ver Proyectos
    //   </a>
    // </section>
  );
};

export default Header;
