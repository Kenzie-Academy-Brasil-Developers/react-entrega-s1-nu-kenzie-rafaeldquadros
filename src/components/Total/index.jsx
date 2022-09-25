import "./style.css";
function Total({ data }) {
    let totalPrice = data.reduce((acc, cur) => {
        if (cur.tipo === "Entrada") {
            return acc + Number(cur.valor);
        } else {
            return acc - Number(cur.valor);
        }
    }, 0);
    return (
        <section
            className="total"
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
            <div
                style={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <h2
                    style={{
                        color: "var(--color-grey-4)",
                        fontSize: "var(--headline-size)",
                        fontWeight: "bold",
                    }}
                >
                    Valor total
                </h2>
                <p
                    style={{
                        color: "var(--color-grey-4)",
                        fontSize: "var(--headline-size)",
                        fontWeight: "bold",
                        color: "var(--color-primary)",
                    }}
                >
                    {totalPrice.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                    })}
                </p>
            </div>
            <div
                style={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <span
                    style={{
                        fontSize: "var(--title-4-size)",
                        color: "var(--color-grey-3)",
                    }}
                >
                    Valor se refere ao saldo
                </span>
            </div>
        </section>
    );
}
export default Total;
