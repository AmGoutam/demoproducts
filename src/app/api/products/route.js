import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from "@/app/lib/db";
import { Product } from "@/app/lib/model/product";

export const GET = async () => {
    let data = [];
    try {
        await mongoose.connect(connectionStr);
        data = await Product.find();
        console.log(data);
    } catch (error) {
        data = {success : false}
    }

  return NextResponse.json({ results: data ,success:true},{status : 200});
};


export const POST = async (resquest, response) => {
    
    try {
        const payload = await resquest.json();
        await mongoose.connect(connectionStr);
        let product = new Product(payload);
        const results = await product.save();
        return NextResponse.json({results,success : true},{status : 200})
    } catch (error) {
        return NextResponse.json({results : "Some Error is there",success : false},{status : 400})
    }
}