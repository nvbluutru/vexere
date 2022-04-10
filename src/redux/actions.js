export const convertStation = () => {
    return {
        type: "convertStation"
    }
}
export const changeFrom = (data) => {
    return {
        type: "changeFrom",
        payload: data
    }
}
export const changeTo = (data) => {
    return {
        type: "changeTo",
        payload: data
    }
}