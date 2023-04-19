import React, { useState, useEffect } from "react";
import axios from "axios";

function PostList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="table-responsive">
      <table
        className="table table-striped
      table-hover	
      table-borderless
      table-primary
      align-middle"
      >
        <caption>Post List</caption>
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>ID Usuario</th>
            <th>Título</th>
            <th>Contenido</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {data.map((post) => (
            <tr key={post.id} className="table-success">
              <td scope="row">{post.id}</td>
              <td>{post.userId}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}

export default PostList;
