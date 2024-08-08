export const counterSlice=createSlicce({
    name:'counter',
    initialState:{
        value:0,
        emp:[ {id:1,name:"AAAA",email:"aaaa@gmail.com",phone:11111},]
    },
    reducer: {
        increment:(state)=>{
            state.value=state.value+1
        },
        decrement:(state)=>{
            state.value=state.value-1
        },
        incrementByAmount:(state,action)=> {
            state.value += action.payload
        },
        },
})