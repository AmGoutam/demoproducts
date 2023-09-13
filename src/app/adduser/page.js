"use client"
import Link from "next/link";
import React, { useState } from "react";

const page = () => {

    const [data, setdata] = useState({
        name : "",
        price : "",
        company : "",
        color : "",
        category : ""
    })


    const InputEvents = (e) => {
        const {name, value} = e.target;
        setdata((prevale) => {
            return{
                ...prevale,
                [name] : value
            }
        })
    }


    const addProduct = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch("https://demoproducts.vercel.app/api/products",{
                method : "POST",
                body : JSON.stringify(data)
            });
            const retunData = await response.json();
            console.log(retunData);
            alert("Data Successfully Added");
            setdata({
                name : "",
                price : "",
                company : "",
                color : "",
                category : ""
            })
        } catch (error) {
            alert("Some Error is there Plz Cheak again");
        }


    }


  return (
    <div className="container">
      <h1 className="text-center fs-3 text-uppercase py-5">Add Products</h1>
      <form action="#" method="post" className="p-4 w-50 m-auto" onSubmit={addProduct}>
        <div className="mb-3 row">
          <label htmlFor="productname" className="col-sm-2 col-form-label fw-bold">
            Name
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" value={data.name} name="name" id="productname" required onChange={InputEvents}/>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="price" className="col-sm-2 col-form-label fw-bold">
          Price
          </label>
          <div className="col-sm-10">
            <input type="number" className="form-control" value={data.price} name="price" id="price" required onChange={InputEvents}/>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="company" className="col-sm-2 col-form-label fw-bold">
          Company
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" value={data.company} name="company" id="company" required onChange={InputEvents}/>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="color" className="col-sm-2 col-form-label fw-bold">
          Color
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" value={data.color} name="color" id="color" required onChange={InputEvents}/>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="category" className="col-sm-2 col-form-label fw-bold">
          Category
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" value={data.category} name="category" id="category" required onChange={InputEvents}/>
          </div>
        </div>
        <button className="btn btn-primary w-100 mt-3">Add Product</button>
      <Link href={"/"} className="btn btn-outline-primary w-100 mt-3">All Product</Link>
      </form>
    </div>
  );
};

export default page;
