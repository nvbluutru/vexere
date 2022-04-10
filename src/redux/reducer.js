const initValue = {
    fromStation: "Chọn nơi đi",
    toStation: "Chọn nơi đến"
}
const rootReducer = (state = initValue, action) => {
    console.log({ state, action })
    switch (action.type) {
        case "changeFrom":
            return {
                ...state,
                fromStation: action.payload
            }
        case "changeTo":
            return {
                ...state,
                toStation: action.payload
            }
        case "convertStation":
            return {
                ...state,
                fromStation: state.toStation,
                toStation: state.fromStation
            }
        default:
            return state
    }
}
export default rootReducer