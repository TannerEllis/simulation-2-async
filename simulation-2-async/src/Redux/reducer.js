const initialState = {
    propertyName: '',
    propertyDesc: '',
    address: '',
    city: '',
    locationState: '',
    zip: 0,
    image: '',
    loanAmount: 0,
    monthlyMortgage: 0,
    desiredRent: 0
}

const UPDDATE_PROPERTY_NAME = 'UPDATE_PROPERTY_NAME'
const UPDTATE_PROPERTY_DESCRIPTION = 'UPDTATE_PROPERTY_DESCRIPTION'
const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
const UPDATE_CITY = 'UPDATE_CITY'
const LOCATION_STATE = 'LOCATION_STATE'
const UPDATE_ZIP = 'UPDATE_ZIP'
const IMAGE = 'IMAGE'
const LOAN_AMOUNT = 'LOAN_AMOUNT'
const MONTHLY_MORTGAGE = 'MONTHLY_MORTGAGE'
const DESIRED_RENT = 'DESIRED_RENT'

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case UPDDATE_PROPERTY_NAME:
            return Object.assign({}, state, { propertyName: action.payload })

        case UPDTATE_PROPERTY_DESCRIPTION:
            return Object.assign({}, state, { propertyDesc: action.payload })

        case UPDATE_ADDRESS:
            return Object.assign({}, state, { address: action.payload })

        case UPDATE_CITY:
            return Object.assign({}, state, { city: action.payload })

        case LOCATION_STATE:
            return Object.assign({}, state, { locationState: action.payload })

        case UPDATE_ZIP:
            return Object.assign({}, state, { zip: action.payload })

        case IMAGE:
            return Object.assign({}, state, { image: action.payload })

        case LOAN_AMOUNT:
            return Object.assign({}, state, { loanAmount: action.payload })

        case MONTHLY_MORTGAGE:
            return Object.assign({}, state, { monthlyMortgage: action.payload })

        case DESIRED_RENT:
            return Object.assign({}, state, { desiredRent: action.payload })

            default: return state;
    }
}

export function updatePropertyName(propertyName) {
    return {
        type: UPDDATE_PROPERTY_NAME,
        payload: propertyName
    }
}

export function updatePropertyDescription(propertyDesc) {
    return {
        type: UPDTATE_PROPERTY_DESCRIPTION,
        payload: propertyDesc
    }
}

export function updateAddress(address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity(city){
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateLocationState(locationState) {
    return {
        type: LOCATION_STATE,
        payload: locationState
    }
}

export function updateZip(zip) {
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}

export function updateImage(image) {
    return {
        type: IMAGE,
        payload: image
    }
}

export function updateLoanAmount(loanAmount) {
    return {
        type: LOAN_AMOUNT,
        payload: loanAmount
    }
}

export function updateMonthlyMortgage(monthlyMortgage) {
    return {
        type: MONTHLY_MORTGAGE,
        payload: monthlyMortgage
    }
}

export function updateDesiredRent(desiredRent) {
    return {
        type: DESIRED_RENT,
        payload: desiredRent
    }
}