import React, { useContext } from 'react'
import Tr from './Tr'
import { TableContext } from './MimeSearch'

const Table = () => {
    const { tableData } = useContext(TableContext)
    return (
        <table>
            {Array(tableData.length).fill().map((tr, i) => <Tr rowIndex={i} />)}
        </table>
    )
}

export default Table