"use client"
import React, { useEffect, useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import TableRow from "./lib/TableRow";
import Link from "next/link";

const page = () => {

  const [products, setproducts] = useState([])
  const [message, setmessage] = useState("")
  
  const getData = async () => {
    try {
      const response = await fetch("https://demoproducts.vercel.app/api/products",{caches : "no-caches"});
      const data = await response.json();
      if(data.success === true){
        console.log(data)
        setproducts(data.results);
        setmessage("");
        console.log( products.length == 0)
      }else{
        setmessage("No Data Found");
      }
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getData();
  }, [])
  


  return (
    <div>
      <div className="container">
        <h1 className="text-center fs-3 text-uppercase py-5">
          All Product List
        </h1>
        <div className="text-right fs-5 mb-4 text-uppercase">
          <Link href={"/adduser"}>Add User</Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sl No</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Company</th>
              <th scope="col">Color</th>
              <th scope="col">Category</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {
            products.length == 0 ?  <tr className="text-center fw-bold"><td colSpan={7}>No Data Found</td></tr> :
            
            products.reverse().map((curElm) => {
              return(
                <>
                <TableRow key={curElm._id} curElm={curElm}/>
                </>
              )
            })
          }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
