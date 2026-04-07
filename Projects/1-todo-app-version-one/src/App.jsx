import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"

function App() {
 
  return (
    <div>
      <center class='todo-container'>
        <AppName />
        <AddTodo />
        
        <div class="container text-center">
         <div class="row">
          <div class="col-6">
            Buy Milk
          </div>
          <div class="col-4">
            04/10/2026
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            Go to college
          </div>
          <div class="col-4">
            04/10/2026
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>

        </div>
 
      </center>

    </div>
   
  )
}

export default App
