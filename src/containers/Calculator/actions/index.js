import { BUTTON_NUMBER, CLEAR, EQUAL } from '../actionTypes'

export const clickNumber = (value) => ({
    type: BUTTON_NUMBER,
    payload: value,
})

export const clickClear = (value) => ({
    type: CLEAR,
    payload: value,
})

export const clickEqual = (value) => ({
    type: EQUAL,
    payload: value,
})