import { render , screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us Test Cases", ()=>{
    test("should load contact us component",()=>{
        render(<Contact /> );
    
         
        const heading=screen.getByRole("heading")
    
        //Assertion
        expect(heading).toBeInTheDocument();
    })
    
    it("should load button from contact",()=>{
        render(<Contact />)
    
        const button=screen.getByText("Submit")
        expect(button).toBeInTheDocument()
    })
    
    it("should load place holder name from contact",()=>{
        render(<Contact />)
    
        const inputname=screen.getByPlaceholderText("Name")
        expect(inputname).toBeInTheDocument()
    })
    
    test("should show 2 input boxces",()=>{
    
        render(<Contact />)
        const inputboxces=screen.getAllByRole("textbox")
    
        expect(inputboxces.length).toBe(2)
    })
})

