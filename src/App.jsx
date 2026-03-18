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

 
       </div> 
     )} 
 
     {/* Tela de produtos */} 
     {mostrarAlunos && ( 
       <div> 
 
         {/* Lista de produtos */} 
         <ListaAlunos /> 
 
       </div> 
     )} 
 
   </div> 
 ) 
} 
 
export default App
