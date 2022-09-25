import noCard from "../../assets/NoCard.svg";
import trash from "../../assets/trash.png";
import "./style.css";

function List({ data, filtrados, setData, setFiltrados }) {
    const apagar = (id) => {
        const apagandoFilter = filtrados.filter((item) => item.id !== id);
        const apagando = data.filter((item) => item.id !== id);
        setData(apagando);
        setFiltrados(apagandoFilter);
    };

    return (
        <>
            <ul className="listaDespesas">
                {console.log(data)}
                {data.length ? (
                    data.map((element, index) => (
                        <li
                            key={element.id}
                            style={{
                                borderLeft:
                                    element.tipo === "Despesa"
                                        ? "4px solid var(--color-primary)"
                                        : "4px solid green",
                            }}
                        >
                            <div style={{ display: "flex" }}>
                                <h2
                                    style={{
                                        fontSize: "var(--headline-size)",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {element.descricao}
                                </h2>
                                <p>R${Number(element.valor).toFixed(2)}</p>
                                <button onClick={() => apagar(element.id)}>
                                    <img
                                        src={trash}
                                        alt="apagar"
                                        style={{
                                            width: "100%",
                                            heigth: "100%",
                                            marginTop: "0px",
                                        }}
                                    />
                                </button>
                            </div>
                            <span>{element.tipo}</span>
                        </li>
                    ))
                ) : (
                    <>
                        <h1>Você não possui nenhum lançamento</h1>
                        <img src={noCard} alt="" />
                    </>
                )}
            </ul>
        </>
    );
}

export default List;
