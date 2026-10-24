import { cases } from "./Cases";

export const initialState = {
    /////////// fetched items /////

    products: [],
    sunglasses: [],
    watches: [],
    handbags: [],
    jewelries: [],
    wallets: [],
    belts: [],

    /////////// user state /////

    userCart: [],
    userFavorites: [],
    searchbar: false,
    sidebar: false,
    nightMode: false,

    /////////// Api State /////

    loading: false,
    error: null,
}

export const reducer = (state, action) => {
    switch (action.type) {

        /////////// loading cases //////
        case cases.LOAD_PRODUCTS:
            return {
                ...state,
                loading: true,
                error: null
            }
            break;

        case cases.LOAD_HANDBAGS:
            return {
                ...state,
                loading: true,
                error: null
            }
            break;
        case cases.LOAD_SUNGLASSES:
            return {
                ...state,
                loading: true,
                error: null
            }
            break;

        case cases.LOAD_WATCHES:
            return {
                ...state,
                loading: true,
                error: null
            }
            break;

        case cases.LOAD_BELTS:
            return {
                ...state,
                loading: true,
                error: null
            }
            break;

        case cases.LOAD_JEWELRIES:
            return {
                ...state,
                loading: true,
                error: null
            }
            break;

        case cases.LOAD_WALLETS:
            return {
                ...state,
                loading: true,
                error: null
            }
            break;

        /////////// fetching cases //////

        case cases.LOAD_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
                error: null
            }
            break;

        case cases.LOAD_HANDBAGS_SUCCESS:
            return {
                ...state,
                handbags: action.payload,
                loading: false,
                error: null
            }
            break;

        case cases.LOAD_WATCHES_SUCCESS:
            return {
                ...state,
                watches: action.payload,
                loading: false,
                error: null
            }
            break;

        case cases.LOAD_JEWELRIES_SUCCESS:
            return {
                ...state,
                jewelries: action.payload,
                loading: false,
                error: null
            }
            break;

        case cases.LOAD_BELTS_SUCCESS:
            return {
                ...state,
                belts: action.payload,
                loading: false,
                error: null
            }
            break;

        case cases.LOAD_WALLETS_SUCCESS:
            return {
                ...state,
                wallets: action.payload,
                loading: false,
                error: null
            }
            break;

        case cases.LOAD_SUNGLASSES_SUCCESS:
            return {
                ...state,
                sunglasses: action.payload,
                loading: false,
                error: null
            }
            break;

        /////////// error cases //////

        case cases.LOAD_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.message
            }
            break;

        case cases.LOAD_HANDBAGS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.message
            }
            break;

        case cases.LOAD_SUNGLASSES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.message
            }
            break;

        case cases.LOAD_WATCHES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.message
            }
            break;

        case cases.LOAD_JEWELRIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.message
            }
            break;

        case cases.LOAD_BELTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.message
            }
            break;

        case cases.LOAD_WALLETS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.message
            }
            break;


        //////// open and close search and sidebar cases ///////

        case cases.CLICKED_SEARCH:
            return {
                ...state,
                searchbar: !state.searchbar
            }
            break;

        case cases.CLICKED_SIDEBAR:
            return {
                ...state,
                sidebar: !state.sidebar
            }
            break;
            
        case cases.CLICKED_NIGHT_MODE:
            return {
                ...state,
                nightMode: !state.nightMode
            }
            break;


        default:
            return state;
    }
}