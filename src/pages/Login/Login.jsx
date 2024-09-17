import './Login.css';
export default function Login(){

    function handleLogin (){

    }
    return <div className="Login">
         <h3>Login</h3>
         <form onSubmit={handleLogin}>
           <input type="text" placeholder="Enter User Name"></input><br/>
           <input type="text" placeholder="Enter Password" ></input><br/>
           <div className='Submit'>
           <button type="Submit" >Login</button>
           </div>
         

         </form>
    </div>
}