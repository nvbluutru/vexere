export const convertStation = () => {
    return {
        type: "convertStation"
    }
}
export const changeFromStation = (data) => {
    return {
        type: "changeFromStation",
        payload: data
    }
}
export const changeStatusShowFrom = (data) => {
    return {
        type: "changeStatusShowFrom",
        payload: data
    }
}
export const changeStatusShowTo = (data) => {
    return {
        type: "changeStatusShowTo",
        payload: data
    }
}
export const changeToStation = (data) => {
    return {
        type: "changeToStation",
        payload: data
    }
}