import { useState } from 'react' 
import ListaAlunos from './components/ListaAlunos' 
import './App.css' 

function App() { 
 
 // Estado que controla qual tela aparece 
 const [mostrarAlunos, setMostrarAlunos] = useState(false) 
 
 return ( 
   <div className="container"> 
 
     <h1>Lista Alunos</h1> 
 
     {/* Tela inicial */} 
     {!mostrarAlunos && ( 
       <div> 
 
         <h2>Bem-vindo!</h2> 
         <p>Clique no botão para ver as notas</p>

         
       </div> 
     )} 
 
     {/* Tela de produtos */} 
     {mostrarAlunos && ( 
       <div> 
 
         {/* Lista de produtos */} 
         <ListaAlunos /> 
 
       </div> 
     )} 

         <button onClick={() => setMostrarAlunos(!mostrarAlunos)}>
            {mostrarAlunos ? "Voltar" : "Ver Lista de Alunos"}
         </button>
 
   </div> 
 ) 
} 
 
export default App
