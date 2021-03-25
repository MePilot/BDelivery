
import { restarauntList } from '../Data'
const FuzzySet = require('fuzzyset')

const restaraunt = (state =
    {
        search: '',
        allRest: restarauntList,
        visRest: restarauntList,
        selectedRest: restarauntList[0],
        cart: []
    }
    , action) => {
    switch (action.type) {
        case 'UPDATE_SEARCH':
            return updateSearch(state, action.payload)
        case 'CANCEL':
            return { ...state, visRest: restarauntList }
        case 'SET_REST':
            return { ...state, selectedRest: state.allRest.find(rest => rest.location.lat === action.payload.latitude && rest.location.lon === action.payload.longitude) }
        case 'ADD_TO_CART':
            return addToCart(state, action.payload)
        case 'REMOVE_FROM_CART':
            return removeFromCart(state, action.payload)
        case 'BUY_ALL':
            return { ...state, cart: [] }

        default:
            return state
    }
}
function updateSearch(state, search) {

    if (search === '') {
        return { ...state, search: '', visRest: restarauntList }
    }
    const a = FuzzySet(state.allRest.map(a => a.name));
    const resultExact = a.get(search, null, 1)

    if (resultExact) {
        return { ...state, search, visRest: [state.allRest.find(e => e.name === search)] }
    }

    else {
        const results = a.get(search, null, 0.625)

        if (!results) return { ...state, search, visRest: [] }

        const vis = state.allRest.filter((rest) => {

            for (let i = 0; i < results.length; i++) {
                if (rest.name === results[i][1]) return true

            }
            return false

        })
        return { ...state, search, visRest: vis }
    }

}

function addToCart(state, product) {
    if (state.cart.filter(e => e.name === product.name).length === 0) {
        return { ...state, cart: [...state.cart, { name: product.name, price: product.price, amount: 1 }] }
    }

    return { ...state, cart: state.cart.map(e => e.name === product.name ? { ...e, amount: e.amount + 1 } : e) }
}
function removeFromCart(state, product) {
    if (product.amount === 1) {
        return { ...state, cart: state.cart.filter(e => e.name !== product.name) }

    }

    return { ...state, cart: state.cart.map(e => e.name === product.name ? { ...e, amount: e.amount - 1 } : e) }
}

export default restaraunt
