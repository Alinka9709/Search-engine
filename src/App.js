import React, {useEffect, useState} from "react";
import style from './App.module.scss'

function App() {
 const [data,setData] = useState([])
 const [inputData,setInputData] = useState('')
 const [button,setButton] = useState(false)

 const changeInputHalder = (event) =>{
  setInputData(event.target.value)
 }

 const clickButtonHalder = () =>{
  setButton(!button)
 }
  useEffect( ()=>{
   fetch(`https://content.guardianapis.com/search?q=${inputData}&api-key=6d48ad23-7f5b-439f-8f78-f3083a1d2865`)
   .then(res => res.json())
   .then(date => setData(date.response.results))


  },[button])

  return (
    <div>
           <input className={style.inputBlock} type="text" onChange = {(event)=> changeInputHalder(event)}/>
           <button className={style.button} onClick={clickButtonHalder}>Фильтровать</button>
           <div className={style.link}>
             {
               data.map((elem,index) =>{
                 return(
                   
                   <a key={index}href={elem.webUrl}>{index + 1}.{elem.webTitle}</a>
                 )

               })
           }
          

           
           </div>
         </div>
  );
}

export default App;
