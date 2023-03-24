
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Person name="Kamrul" specialty="Web Developer"></Person>
      <Person name="Shakib" specialty="Student"></Person>
      <LoadPosts></LoadPosts>
    </div>
  );
}


function Person(props){
  const [power, setPower] = useState(1);

  const boostPower = () =>{
    const newPower = power * 2;
    setPower(newPower);
  }
  return (
    <dev>
      <h2>Name:{props.name} </h2>
      <p>Specialty: {props.specialty}  </p>
      <p>Power: {power}</p>
      <button onClick={boostPower}>Boost</button>
    </dev>
  )
}

function LoadPosts (){
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, []);

  return (
    <div >
      {
        posts.map(post=> <Post ha={post}></Post>)
      }
    </div>
  )
}

function Post(props){
  return (
    <div  className='displayStyle'>
      <h2>Title: {props.ha.title} </h2>
      <p>Body: {props.ha.body}</p>
    </div>
  )
}

export default App;
