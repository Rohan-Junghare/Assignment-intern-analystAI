import React from 'react';
import './Pagination.css';
// import axios from 'axios';
// import { useState } from 'react';
// import  { useEffect } from 'react';



const Pagination = () => {
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [postsPerPage, setPostsPerPage] = useState(10);

//     useEffect (()=> {
//         const fetchPosts = async () => {
//             setLoading (true); 
//             const res = await axios.get('https://jsonplaceholder.typicode.com/users'); 
//             setPosts(res.data);
//             setLoading(false);
//         }
//         fetchPosts();
//     }, [] );

  return (
    <div id="control" className="pagination">
      <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item"><a className="page-link" href="/">Previous</a></li>
    <li className="page-item"><a className="page-link" href="/">1</a></li>
    <li className="page-item"><a className="page-link" href="/">2</a></li>
    <li className="page-item"><a className="page-link" href="/">3</a></li>
    <li className="page-item"><a className="page-link" href="/">Next</a></li>
  </ul>
</nav>
    </div>
  );
}

export default Pagination