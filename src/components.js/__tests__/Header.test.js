import { fireEvent, render , screen } from "@testing-library/react"
import Header from "../Header" 
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

// test("should load header component with a login button",()=>{

// render(
// //  <BrowserRouter>
// //     <Provider >
//     <Header />
// //  </Provider>

// //  </BrowserRouter>
// )

//     const LoginButton=screen.getByRole("button", {name:"Login"})
//     expect(LoginButton).    toBeInTheDocument()
// })


// test("should load Cart component with 0",()=>{

//     render(
//     //  <BrowserRouter>
//     //     <Provider >
//         <Header />
//     //  </Provider>
    
//     //  </BrowserRouter>
//     )
    
//         const LoginButton=screen.getByRole("cart-(1 items)")
//         expect(LoginButton).    toBeInTheDocument()

//     })
    


//     test("should load Cart component ",()=>{

//         render(
//         //  <BrowserRouter>
//         //     <Provider >
//             <Header />
//         //  </Provider>
        
//         //  </BrowserRouter>
//         )
        
//             const LoginButton=screen.getByRole(/cart/)
//             expect(LoginButton).    toBeInTheDocument()
//         })


        // test("should load Cart component ",()=>{

        //     render(
           
            
        //         <Header />
            
            
            
        //     )
            
        //         const LoginButton=screen.getByRole("buton", {name:"Login"})
        //         fireEvent.click(LoginButton)
        //         const LogoutButton=screen.getByRole("buton", {name:"Logout"})

        //         expect(LogoutButton).    
        //         toBeInTheDocument()
        //     })
        
    


