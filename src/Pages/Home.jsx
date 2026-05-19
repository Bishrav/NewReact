import Header from "../Section/Footer.jsx"
// const user = {
//     name : "Ferrari",
//     imageurl : "https://cdn.ferrari.com/cms/network/media/img/resize/670e710357a595000f736188-ferrari-f80-lineup-desktop?height=750",
    

// }

//condtional rendering

import Admin from "../admin/Admin.jsx"
import LoginForm from "../registration/LoginForm.jsx"

const isLoggedIn = true;

let content;

if(isLoggedIn){
  content = < Admin />
}else{
  content = < LoginForm />
}

function Home(){
    return(
        <>
           <div>
            <h1>Conditional Rendering example</h1>
            {content}
            </div> 

            {/* <h1>{user.name}</h1>
            <img className="avatar"
            src={user.imageurl} alt={'Photo of' + user.name} /> */}
        </>
    )
}
export default Home;