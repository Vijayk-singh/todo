import Todo from "@/app/models/Todo";
import connectDB from "@/app/db/db";

// Defining the POST function
connectDB()

export default async function GET(req,res) {
   try{
   
     // Fetch all todos from the database
     const projects = await Todo.find();

     // Return the todos as a JSON response
   
    return Response.json(projects, {
        status: 200,
      })
   }
    catch(error){
        return Response(error,{status: 400})
    }
  }