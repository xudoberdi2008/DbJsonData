
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [posts, setPosts] = useState([])


  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        setPosts(res.data)
        //  console.log(res.data)
      })
  }, [])

  // console.log();

  return (

    <div className="App">
      <h1>Hello</h1>
      <p>shakalad</p>
      <b>hgfhsgdfhdsgfh</b>
      {/* {
        posts.map(post =>(
          <div key={post.id}>
            <h1>{post.title}</h1>
            <h1>{post.body}</h1>
          </div>
        ))
      } */}
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
          </tr>
        </thead>
        <tbody>
          {
            posts.map(post => (
              <tr key={post.id}>
                <th scope='row'>{post.id}</th>
                <td>{post.title}</td>
                <td>{post.body}</td>

              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  );
}

export default App;
