import { act } from "react-dom/test-utils";
import { render ,screen } from "react-dom";
import MOCK_DATA from "../mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom";
import Body from "../Body"

import "@testing-library/jest-dom"
import { fireEvent } from "@testing-library/react";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it ("should render the body component with search",async ()=>{
    await act(async ()=>render(
    <BrowserRouter><Body /></BrowserRouter>))

    beforeAll(()=>{
        console.log("before all")
    })

    beforeEach(()=>{
        console.log("before Each")
    })

    afterAll(()=>{
        console.log("after all")
    })

    afterEach(()=>{
        console.log("after Each")
    })




       const cardbeforesearch =screen.getAllByTestId("resCard");
       expect(cardbeforesearch.length).toBe(20) 

    const searchbtn=screen.getByRole("button",{name:"Sewarch"})
    const searchInput=screen.getByTestId("searchInput")

    fireEvent.change(searchInput,{target:{value:"burger"} })

    fireEvent.click(searchbtn);
    expect(cards.length).tobe()
get

    
    const cardbeforefilter =screen.getAllByTestId("resCard");
    expect(cardbeforefilter.length).toBe(20) 

    const TopRatedres=screen.getByRole("button",{name:"Top Rated Restaurants"})
    fireEvent.click(TopRatedres)

    const afterfilter=screen.getByTestId("rescar")
    expect(afterfilter.length).toBe(13)

})