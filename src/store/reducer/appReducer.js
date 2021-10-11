import { parseMovies } from '../../utils/parseData'
import { DELETE_CARD, LOAD_COVER_FAILURE, LOAD_DATA, LOAD_DATA_FAILURE, LOAD_DATA_SUCCESS, SET_FILTRED, TOGGLE_LIKE } from './actions'


const initialState = {
    data: [],
    isLoadings: false,
    filtred: false,
    error: null
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA:
            return {
                ...state,
                isLoading: true
            }

        case LOAD_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: parseMovies(action.payload.movies)
            }

        case LOAD_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        case LOAD_COVER_FAILURE:
            return {
                ...state,
                data: state.data.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            imgError: action.payload.error
                        }
                    }
                    return item
                })
            }

        case DELETE_CARD:
            return {
                ...state,
                data: state.data.filter(item => item.id !== action.payload)
            }

        case TOGGLE_LIKE:
            return {
                ...state,
                data: state.data.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            liked: action.payload.liked
                        }
                    }
                    return item
                })
            }

        case SET_FILTRED:
            return {
                ...state,
                filtred: action.payload
            }
        
        default:
            return state
    }
}