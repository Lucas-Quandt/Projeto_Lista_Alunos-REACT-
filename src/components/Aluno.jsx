function Aluno (props) {

    return (
        <div className="Dados">

            <h1>Nome:{props.nome}</h1> 

            <p>Nota:{props.nota}</p>

            <p>Situação:{props.nota >= 6 ? "✅ Aprovado" : "❌ Reprovado"}</p>  

        </div>
    );
}
export default Aluno;