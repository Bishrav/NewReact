import Header from "../Section/Footer.jsx"
import { useState } from "react";
import "./Home.css"
// const user = {
//     name : "Ferrari",
//     imageurl : "https://cdn.ferrari.com/cms/network/media/img/resize/670e710357a595000f736188-ferrari-f80-lineup-desktop?height=750",
    

// }

//condtional rendering

// import Admin from "../admin/Admin.jsx"
// import LoginForm from "../registration/LoginForm.jsx"

// const isLoggedIn = true;

// let content;

// if(isLoggedIn){
//   content = < Admin />
// }else{
//   content = < LoginForm />
// }

//Renering list datas

// const products = [
//     {title : 'cabbage' , isfruit:false, id:1},
//     {title : 'Garlic' , isfruit:false, id:2},
//     {title : 'Apple' ,isfruit:true, id:3},
// ]
// const listItems = products.map(products => 
//     <li key={products.id} style={{color : products.isfruit ? 'magenta' : 'darkgreen'}}>
//         {products.title}
//     </li>
// )
// Responding to events

// function MyButton(){
//     function handleClick() {
//         alert("you clicked me")
//     }
//     return(
//         <button onClick={handleClick}>click me</button>
//     )
// }
// Update the Screen





function Home(){
    return(
        <>
           {/* <div>
            <h1>Conditional Rendering example</h1>
            {content}
            </div>  */}
            {/* <MyButton />
            <MyButton /> */}
            {/* <h1>{user.name}</h1>
            <img className="avatar"
            src={user.imageurl} alt={'Photo of' + user.name} /> */}
            {/* <ul>{listItems}</ul> */}
            
        </>
    )
}
export default Home;
