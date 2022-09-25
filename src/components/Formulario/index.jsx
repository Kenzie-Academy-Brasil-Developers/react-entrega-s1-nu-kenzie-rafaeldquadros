import { v4 as uuidv4 } from "uuid";
import "./style.css";

function Formulario({ data, setData, setFiltrados }) {
    const newItem = (event) => {
        event.preventDefault();

        const arr = [...event.target].slice(0, 3);
        let obj = {};
        arr.forEach(({ name, value }) => {
            obj[name] = value;
        });
        obj.id = uuidv4();
        setData([...data, obj]);
        setFiltrados([...data, obj]);
    };

    return (
        <form
            className="formulario"
            onSubmit={newItem}
            style={{
                width: " 300px",
                height: "350px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                border: "1px solid var(--color-grey-2)",
                borderRadius: "8px",
                marginTop: "20px",
            }}
        >
            <div
                style={{
                    width: "90%",
                    display: "flex",
                    flexDirection: "column",
                    height: "110px",
                    justifyContent: "space-between",
                }}
            >
                <h2
                    style={{
                        fontSize: "var(--title-4-size)",
                        fontWeight: "var(--title-4-weight)",
                    }}
                >
                    Descrição
                </h2>
                <input
                    name="descricao"
                    type="text"
                    placeholder="Digite sua descrição"
                    className="inputsOne"
                    required
                    style={{
                        width: "100%",
                    }}
                    maxLength={25}
                />
                <span
                    style={{
                        fontSize: "var(--title-4-size)",
                        color: "var(--color-grey-3)",
                    }}
                >
                    Ex: Compra de roupas
                </span>
            </div>
            <div
                style={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "space-between",
                    height: "80px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "125px",
                        justifyContent: "space-between",
                    }}
                >
                    <label
                        htmlFor="inputValor"
                        style={{
                            fontSize: "var(--title-4-size)",
                            color: "var(--color-grey-4)",
                            fontWeight: "bold",
                        }}
                    >
                        Valor
                    </label>
                    <input
                        className="inputsOne"
                        name="valor"
                        type="number"
                        placeholder="R$"
                        required
                        style={{
                            width: "120px",
                        }}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "125px",
                        justifyContent: "space-between",
                    }}
                >
                    <label
                        htmlFor="TipoDeValor"
                        style={{
                            fontSize: "var(--title-4-size)",
                            color: "var(--color-grey-4)",
                            fontWeight: "bold",
                        }}
                    >
                        Tipo de valor
                    </label>
                    <select
                        className="inputsOne"
                        name="tipo"
                        required
                        style={{ width: "120px" }}
                    >
                        <option value="Entrada">Entrada</option>
                        <option value="Despesa">Despesa</option>
                    </select>
                </div>
            </div>
            <button
                style={{
                    width: "90%",
                    height: "48px",
                    marginLeft: "5px",
                }}
                className="buttonOne"
                type="submit"
            >
                Inserir Valor
            </button>
        </form>
    );
}

export default Formulario;
