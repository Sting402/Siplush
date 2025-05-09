import { motion } from "framer-motion";
import "../style/cta2.css"

const CTA2 = () => {
  
  return (
    <section className="cta2-container">
      <motion.div
        className="cta2-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="cta2-heading">Your perfect blend, anywhere, anytime.
        </h2>
        <motion.a
          href="https://www.amazon.com/stores/SIPLUSH/page/36C74EDC-501B-4CE3-B283-573EB0C97A25?ref_=ast_bln"
          className="cta2-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.a>
      </motion.div>

      <motion.div
        className="cta2-decor"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      />
    </section>
  );
};

export default CTA2;
