// import { useState, useEffect } from "react";
// import Posts from "./Posts";

// const Post = () => {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:5000/product')
//             .then(res => res.json())
//             .then(data => {
//                 // Update the state with the fetched data
//                 setPosts(data);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []); // Empty dependency array to run the effect only once when the component mounts

//     return (
//         <div className="border-dashed border-2 border-sky-500">
//             {
//                 posts.length > 0 ? 
//                 <h1>No posts available</h1>
//                 :
//                 posts.map(data => <Posts key={data._id} data={data} />)
//             }
//         </div>
//     );
// };

// export default Post;
