import { request } from "http";

// Importing Todo model
import Todo from "@/app/models/Todo";
import connectDB from "@/app/db/db";
// Defining the POST function
connectDB()
export async function POST(request) {
   try{
    const data = await request.json()
    console.log(data)
    const todo = new Todo(data);
    await todo.save();
    return new Response(data.url, {
        status: 200,
      })
   }
    catch(error){
        return new Response(error,{status: 400})
    }
  }


