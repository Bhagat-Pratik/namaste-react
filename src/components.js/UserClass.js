import React from "react";
class UserClass extends React.Component{
   constructor(props){
    super(props)
    this.state={
        userInfo:{
            name:"Dummy",
            location:"Default",
            avatar_url:"http:/dummy-photo"
        }
    }
    console.log(this.props.name +"child Constuctor")
   } 

   async componentDidMount(){
    console.log(this.props.name+"Child Mount")
    const data=await fetch("https://api.github.com/users/akshaymarch7")
    const json=await data.json();
    this.setState({
        userInfo:json,
    })

    console.log(json)
   }

   componentDidUpdate(){
    console.log("Component did mount")
   }

   componentWillUnmount(){
    console.log("Component will unmount")
   }
    render(){
        const {name,location,avatar_url}=this.state.userInfo

        console.log(this.props.name +"Child Render")
        
        return(
        <div className={"user-card"}>
            
            <img src={avatar_url}/>
            <h2>Name:{name}</h2>
            <h3>Locathion:{location}</h3>
            <h4>Contact:@pain.com</h4>
        </div>
        )
    }
} 

export default UserClass