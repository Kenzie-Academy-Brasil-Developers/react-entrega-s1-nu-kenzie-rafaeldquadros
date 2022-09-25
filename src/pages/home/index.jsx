import "../../Global.css";
import NuKenzie from "../../assets/Nu Kenzie.png";
import ImgsNuKenzie from "../../assets/ExImgs.png";
import imgSvg from "../../assets/illustration.svg";
import { motion } from "framer-motion";

import "./style.css";

function HomePage({ handleDashboard }) {
    return (
        <>
            <motion.main
                className="box"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    default: {
                        duration: 1,
                        ease: [0, 0.71, 0.2, 1.01],
                    },
                    scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001,
                    },
                }}
            >
                <section className="descricao">
                    <img src={NuKenzie} alt="Logo Nu Kenzie" />
                    <h1>Centralize o controle de suas finanças.</h1>
                    <span>De forma rápida e segura</span>
                    <button onClick={handleDashboard} className="buttonOne">
                        Iniciar
                    </button>
                </section>
                <section className="logos">
                    <img src={imgSvg} alt="Ex" />
                </section>
            </motion.main>
        </>
    );
}

export default HomePage;
