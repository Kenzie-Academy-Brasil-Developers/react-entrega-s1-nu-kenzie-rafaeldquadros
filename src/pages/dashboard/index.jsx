import NuKenzieBlack from "../../assets/Nu Kenzie black.png";
import Formulario from "../../components/Formulario";
import Total from "../../components/Total";
import List from "../../components/Lista";
import { useState } from "react";

import "./style.css";

function DashBoard({ handleHome }) {
    const [data, setData] = useState([]);
    const [filtrados, setFiltrados] = useState([]);
    const [verdadeiro, setVerdadeiro] = useState(true);

    const filter = (type) => {
        setVerdadeiro(false);
        const filtro = data.filter((element) => element.tipo === type);

        type === "Todos" ? setFiltrados(data) : setFiltrados(filtro);
    };

    return (
        <>
            <header
                style={{
                    width: "100%",
                    height: "88px",
                    display: "flex",
                    justifyContent: "center",
                    background: "var(--color-grey-1)",
                    boxShadow: "0 0 20px 0 var(--color-grey-3)",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "70%",
                    }}
                >
                    <img src={NuKenzieBlack} alt="" />
                    <button className="buttonTwo" onClick={handleHome}>
                        Sair
                    </button>
                </div>
            </header>
            <div
                className="container"
                style={{
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: " center",
                    minWidth: "80%",
                }}
            >
                <Formulario
                    data={data}
                    setData={setData}
                    setFiltrados={setFiltrados}
                />
                <Total data={filtrados.length ? filtrados : data} />
                <section
                    className="filterButtons"
                    style={{
                        width: " 300px",
                        height: "130px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        border: "1px solid var(--color-grey-2)",
                        borderRadius: "8px",
                        marginTop: "20px",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "var(--headline-size)",
                            fontWeight: "var(--title-4-weight)",
                            color: "var(--color-grey-4)",
                        }}
                    >
                        Resumo de despesas
                    </h2>
                    <div
                        style={{
                            width: "90%",
                            display: "flex",
                            justifyContent: "space-evenly",
                        }}
                    >
                        <button
                            className="buttonTwo"
                            defaultActive
                            onClick={() => filter("Todos")}
                            defaultFocus
                        >
                            Todas
                        </button>
                        <button
                            className="buttonTwo"
                            onClick={() => filter("Entrada")}
                        >
                            Entradas
                        </button>
                        <button
                            className="buttonTwo"
                            onClick={() => filter("Despesa")}
                        >
                            Despesas
                        </button>
                    </div>
                </section>

                <List
                    data={filtrados}
                    filtrados={filtrados.length ? data : filtrados}
                    setData={filtrados.length ? setFiltrados : setData}
                    setFiltrados={filtrados.length ? setData : setFiltrados}
                />
            </div>
        </>
    );
}
export default DashBoard;
