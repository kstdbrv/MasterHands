import { HIDE_LOADER, SHOW_LOADER } from './types'

let initialState = ({
  isLoading: false,
  link : ''
})

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, isloading: true }
    case HIDE_LOADER:
      return { ...state, isloading: false }
    default: return state
  }
}

export default appReducer