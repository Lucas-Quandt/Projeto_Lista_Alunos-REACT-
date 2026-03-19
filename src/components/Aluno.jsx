function Aluno (props) {

    return (
        <div className="Dados">

            <h2>Nome:{props.nome}</h2> 

            <p>Nota:{props.nota}</p>

            <p>Situação:{props.nota >= 6 ? "✅ Aprovado" : "❌ Reprovado"}</p>  

            <hr />

        </div>
    );
}
export default Aluno;