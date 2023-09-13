import { connectionStr } from "@/app/lib/db";
import { Product } from "@/app/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const PUT = async (request, response) => {
  const productid = response.params.productid;
  const payload = await request.json();
  await mongoose.connect(connectionStr);
  const filter = { _id: productid };
  const results = await Product.findOneAndUpdate(filter, payload);
  return NextResponse.json({ results, success: true });
};

export const GET = async (request, response) => {
  const productid = response.params.productid;
  await mongoose.connect(connectionStr);
  const record = { _id: productid };
  const results = await Product.findById(record);
  return NextResponse.json({ results, success: true });
};


export const DELETE = async (request, response) => {
  const productid = response.params.productid;
  const record = {_id : productid}
  await mongoose.connect(connectionStr);
  const results = await Product.deleteOne(record);
  return NextResponse.json({results , success : true})
}