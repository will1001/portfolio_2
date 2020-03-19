import { STYLES_VARIABLE } from '../Actions/actionTypes'

const initialState = {
  stylesSetup: [
    {
      primaryColor: '#372857',
      fontColor: '#FFFFFF'
    }
  ]
}

const getStylesVariable = (state = initialState, action) => {
  switch (action.type) {
    case STYLES_VARIABLE:
      return {
        ...state,
        bellNotif: state.bellNotif + 1
      }

    default:
      return state
  }
}

export default getStylesVariable
