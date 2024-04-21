// import User from "./User";
import { render } from "react-dom";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
class About extends React.Component{

    constructor(props){
        super(props);
        // console.log("Parent Constructor")

    }
    componentDidMount(){
        // console.log("Parent Mount")
    }
    
    render(){

        // console.log("Parent Render")
        return(
            <div>
                <div>
                    LoggedInUser
                    <UserContext.Consumer>{({LoggedInUser})=>(<h1 className="text-xl font-bold">
                         {LoggedInUser}</h1>)}</UserContext.Consumer>
                </div>
               
               <h2>This is Namaste React Web Series</h2>
               
               <UserClass  />
    
            </div>
       )
    
}
}
// const About=()=>{
//     return(
//          <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Web Series</h2>
//             <User name={"Pratik Bhagat(Function)"} />
//             <UserClass name={"Pratik Bhagat(Class)"} />
//          </div>
//     )
// }



//  parent constructor
//  parent render
//     1st child const
//     1st child render

//     2nd child const
//     2nd child render

//     1st child componentDidMount
//     2nd child componentDidMount

// parent componentDidMount

export default About;