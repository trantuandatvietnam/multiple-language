// import { useReducer } from 'react'

// import { ROWS_PER_PAGE_OPTIONS } from '../constants'

// export const useQueryState = (initial = {}) => {
//     const initialState = {
//         page: 1,
//         pageSize: ROWS_PER_PAGE_OPTIONS[0],
//         sort: null,
//         filters: {},
//         quickFilters: {},
//         keyword: '',
//         ...initial,
//     }

//     const reducer = (state, action) => {
//         switch (action.type) {
//             case 'setPage':
//                 return { ...state, page: action.payload }
//             case 'setPageSize':
//                 return { ...state, pageSize: action.payload, page: 1 }
//             case 'setSort':
//                 return { ...state, sort: action.payload, page: 1 }
//             case 'setFilters':
//                 return { ...state, filters: action.payload, page: 1 }
//             case 'setQuickFilters':
//                 return { ...state, quickFilters: action.payload, page: 1 }
//             case 'setKeyword':
//                 return { ...state, keyword: action.payload, page: 1 }
//             default:
//                 throw new Error()
//         }
//     }

//     const [state, dispatch] = useReducer(reducer, initialState)

//     const setPage = (x) => dispatch({ type: 'setPage', payload: x })
//     const setPageSize = (x) => dispatch({ type: 'setPageSize', payload: x })
//     const setSort = (x) => dispatch({ type: 'setSort', payload: x })
//     const setFilters = (x) => dispatch({ type: 'setFilters', payload: x })
//     const setQuickFilters = (x) =>
//         dispatch({ type: 'setQuickFilters', payload: x })
//     const setKeyword = (x) => dispatch({ type: 'setKeyword', payload: x })

//     return {
//         state,
//         ...state,
//         setPage,
//         setPageSize,
//         setSort,
//         setFilters,
//         setKeyword,
//         setQuickFilters,
//     }
// }
export { }