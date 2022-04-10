const initValue = {
    fromStation: {
        statusShow: false,
        value: "Thành phố nơi đi"
    },
    toStation: {
        statusShow: false,
        value: "Thành phố nơi đến"
    }
}
const chooseStationReducer = (state = initValue, action) => {
    console.log({ state, action })
    switch (action.type) {
        case "changeFromStation":
            return {
                ...state,
                fromStation: {
                    ...state.fromStation,
                    value: action.payload
                }
            }
        case "changeToStation":
            return {
                ...state,
                toStation: {
                    ...state.toStation,
                    value: action.payload
                }
            }
        case "changeStatusShowFrom":
            return {
                ...state,
                fromStation: {
                    ...state.fromStation,
                    statusShow: action.payload
                }
            }
        case "changeStatusShowTo":
            return {
                ...state,
                toStation: {
                    ...state.toStation,
                    statusShow: action.payload
                }
            }
        case "convertStation":
            return {
                ...state,
                fromStation: {
                    ...state.fromStation,
                    value: state.toStation.value
                },
                toStation: {
                    ...state.toStation,
                    value: state.fromStation.value
                }
            }
        default:
            return state
    }
}
export default chooseStationReducer