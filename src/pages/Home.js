import React, { useEffect, useState } from "react";
import App from "../App";
import { Spiner } from "../components/Spiner";
// import {ProductItem} from '../components/ProductItem'
import {ProductItem} from '../components/ProductItem';

export const Home = () => {
  const [loading, setloading] = useState(false);
  const [posts, setpost] = useState([]);
  const API_url = "https://fakestoreapi.com/products";
  async function fetchproductdata() {
    setloading(true);
    try {
      const res = await fetch(API_url);
      const data = await res.json();
      setpost(data);
      console.log(data);
    } catch (e) {
      console.log("erroe" + e);
      setpost([]);
    }
    setloading(false);

  }
  useEffect(()=>{
    fetchproductdata()
  },[]);


  return (
    <div>
  {loading ? (
    <Spiner></Spiner>
  ) : posts.length > 0 ? (
    <div  className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
      {posts.map((post) => (
        <ProductItem key={post.id} post={post}></ProductItem>
      ))}
    </div>
  ) : (
       <div className="flex justify-center items-center" >
    <p>No posts available</p>
    </div>
  )}
</div>

  );
};
export default Home;

