import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material' 

function createData(set, reps, weight) {
    return { set, reps, weight };
}

const rows = [
createData(1, 10, 100),
createData(2, 10, 125),
createData(3, 5, 50),
createData(4, 10, 100),
createData(5, 20, 500),
];

export default function DetailsTable() {

    const tableHeadStyle = [
        {backgroundColor: "#9EFFC5"},
        {borderBottom: 2},
        {borderColor: "#2D3339" }
    ]

    const tableHeadCellStyle = [
        {color: "#2D3339"},
        {fontWeight: "bold"},
        {fontSize: "1rem"}
    ]

    const tableBodyStyle = [
        {backgroundColor: "#E4E4E4"},
    ]

    const tableBodyCellStyle = [
        {borderBottom: 2},
        {borderColor: "#2D3339"}
    ]

    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow sx = {tableHeadStyle}>
                        <TableCell sx = {tableHeadCellStyle} align="left">Set</TableCell>
                        <TableCell sx = {tableHeadCellStyle} align="left">Reps</TableCell>
                        <TableCell sx = {tableHeadCellStyle} align="left">Weight</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => {
                        return(
                            <TableRow sx = {tableBodyStyle} key={index}>
                                <TableCell sx ={tableBodyCellStyle} align="left">{row.set}</TableCell>
                                <TableCell sx ={tableBodyCellStyle} align="left">{row.reps}</TableCell>
                                <TableCell sx ={tableBodyCellStyle} align="left">{row.weight}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}