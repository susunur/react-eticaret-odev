import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Anasayfa from "./views/Anasayfa";
import Sepetim from "./views/Sepetim";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/cart" element={<Sepetim />} />
      </Routes>
    </div>
  );
}

export default App;

// import { useState, useEffect, useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {

// const inputref=useRef()
// const [todos, setToDos] = useState([])

// const [count, setCount] = useState(0);
// const [text, setText] = useState("");
// const [empty, setEmpty] = useState(true);
// const [products, setProducts] = useState([]);

// const artir = () => {
//   setCount(count + 1);
//   setEmpty(false);
// }

// useEffect(() => {
//   async function getPosts() {
//   let response= await fetch("http://localhost:3000/products");
//   let data=await response.json();
//   setProducts(data)
//   }
//   getPosts()
// }, []);
// const a=[1,2,3]
// const v=[...a,6,7]
// console.log(v)
// const x={
//   name:"asd",
//   count:1
// }
// const c={
//   ...x,
//   count:x.count+1
// }
// function kaydet(e){
//     e.preventDefault()
//     const data=inputref.current.value
//     console.log(data)
//     const newdata={
//       name:data,
//       id:crypto.randomUUID

//     }
//     setToDos(prev=>[...prev, newdata])
//     inputref.current.value=""
//   }
// console.log(todos)
//   return (
//     <>
//     {/* products.map(p => (<div> {p.title} </div>))

//     <p>Tıklama adedi: {count}</p>
//     <button onClick={artir}>Artır</button>

//       getPosts() */

//       // todos.map(p => (<div> {p.title} </div>))
//       // }
//       // <form onSubmit={kaydet}><input type="text" placeholder='ara' ref={inputref}/></form>
//     </>
//   );
// }

// export default App;
