import React,{useReducer,createContext,useMemo} from 'react'
import Table from './Table'
import Form from './Form'

export const CODE = {
    MINE: -7,
    NORMAL: -1,
    QUESTION: -2,
    FLAG: -3,
    QUESTION_MINE:-4,
    FLAG_MINE:-5,
    CLICKED_MINE:-6,
    OPENED:0
}

export const TableContext = createContext({
    tableData: [
        [-1,-1,-1,-1,-1,-1,-1],
        [-7,-1,-1,-1,-1,-1,-1],
        [-1,-7,-1,-7,-7,-1,-1],
        [],
        []
    ],
    dispatch:()=>{}
});

const initialState = {
    tableData:[],
    timer:0,
    result:''
}

export const START_GAME = 'START_GAME'

const reducer = (state,action) => {
    switch(action.type){
        case START_GAME:
            return {
                ...state,
                tableData: plantMine(action.row,action.cell,action.mine)
            }
        default:
            return state;
    }
}

const MimeSearch = () => {
    const [state,dispatch] = useReducer(reducer,initialState)
    const value = useMemo(()=>({tableData:state.tableData,dispatch}),[state.tableData])
    return(
        <>
            <TableContext.Provider value={value}>
                <Form dispatch={dispatch} />
                <div>{state.timer}</div>
                <Table />
                <div>{state.result}</div>
            </TableContext.Provider>
        </>
    )
}

export default MimeSearch;