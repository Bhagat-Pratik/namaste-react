import { fireEvent, render , screen} from "@testing-library/react"
import { act } from "react-dom/test-utils" 
import RestaurantMenu from "../RestaurantMenu"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"

global.fetch=jest.fn(()=>
    Promise.resolve({
        json:()=>Promise.resolve(MOCK_DATA)
    })
)


it("should Load Restaurant Menu Component", async()=>{

    await act(async ()=>render(<Provider store={appStore}><RestaurantMenu /></Provider>))
    const accordian=screen.getByText("Biryani (5)")
     fireEvent.click(accordian)

     
    expect(screen.getAllByTestId("foodItems").length).toBe(5)

})