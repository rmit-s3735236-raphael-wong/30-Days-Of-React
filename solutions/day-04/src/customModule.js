// customModule.js
export const max = (a,b) => a > b ? a : b
export const min = (a,b) => a < b ? a : b

export default (function compare() {
    return {
        max,
        min,
    }
}) ()