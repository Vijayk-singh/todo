import { request } from "http";

// Importing Todo model
import Todo from "@/app/models/Todo";
import connectDB from "@/app/db/db";
// Defining the POST function
connectDB()
// export async function DELETE(request) {
//    try{
//     const id = await request.json() || '6645a154de0ab18d298fe3b8';
//     const deleted = await Todo.findByIdAndDelete(id);
//     console.log(deleted)
   
//     return new Response(deleted, {
//         status: 200,
//       })
//    }
//     catch(error){
//         return new Response(error,{status: 400})
//     }
//   }


export async function DELETE(request) {
    try {
        // Extract the todo ID from the request body
        const { id } = await request.json();
        
        // Check if ID is provided
        if (!id) {
            throw new Error('ID is required for deletion');
        }

        // Attempt to delete the todo item by ID
        const deletedTodo = await Todo.findByIdAndDelete(id);

        // Check if the todo item was found and deleted
        if (!deletedTodo) {
            return new Response(JSON.stringify({ success: false, message: 'Todo not found' }), {
                headers: { 'Content-Type': 'application/json' },
                status: 404
            });
        }

        // Return success response
        return new Response(JSON.stringify({ success: true, message: 'Todo deleted successfully' }), {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        });
    } catch (error) {
        // Return error response
        return new Response(JSON.stringify({ success: false, error: error.message }), {
            headers: { 'Content-Type': 'application/json' },
            status: 400
        });
    }
}


