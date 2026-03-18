import Aluno from './Aluno' 

function ListaAlunos() {

 const alunos = [ 
   { id: 1, nome: "Lucas", nota: 8, }, 
   { id: 2, nome: "Heloisa", nota: 4 }, 
   { id: 3, nome: "Matson", nota: 7 }, 
   { id: 4, nome: "Vinicius", nota: 6 }, 
   { id: 5, nome: "Leticia", nota: 10 }, 
   { id: 6, nome: "Gustavo", nota: 10 }
    ]; 

 return ( 
   <div> 
 
     <h2>Alunos</h2> 
 
     {/* Laço de repetição com map */} 
     {alunos.map((aluno) => ( 
 
       // Para cada item, renderiza um componente Produto 
       <Aluno 
         key={aluno.id} // chave obrigatória 
         nome={aluno.nome} 
         preco={aluno.nota} 
       /> 
 
     ))} 
 
   </div> 
 ); 
} 
 
export default ListaAlunos

 
