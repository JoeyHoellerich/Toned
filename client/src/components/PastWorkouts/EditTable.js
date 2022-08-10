import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material' 

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

export default function EditTable() {

    const tableHeadStyle = [
        {backgroundColor: "#F6C971"},
        {borderBottom: 2},
        {borderColor: "#2D3339" }
    ]

    const tableHeadCellStyle = [
        {color: "#2D3339"},
        {fontWeight: "bold"},
        {fontSize: "1rem"},
        {width: 100}
    ]

    const tableHeadCellButtonStyle = [
        {color: "#2D3339"},
        {fontWeight: "bold"},
        {fontSize: "1rem"},
        {width: "15%"}
    ]

    const tableBodyStyle = [
        {backgroundColor: "#E4E4E4"},
    ]

    const tableBodyCellStyle = [
        {borderBottom: 2},
        {borderColor: "#2D3339"},
        {width: 100}
    ]
    const tableBodyButtonCellStyle = [
        {borderBottom: 2},
        {borderColor: "#2D3339"},
        {width: "15%"}
    ]

    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow sx = {tableHeadStyle}>
                        <TableCell sx = {tableHeadCellStyle} align="left">Set</TableCell>
                        <TableCell sx = {tableHeadCellStyle} align="left">Reps</TableCell>
                        <TableCell sx = {tableHeadCellStyle} align="left">Weight</TableCell>
                        <TableCell sx = {tableHeadCellButtonStyle} align="center">Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => {
                        return(
                            <TableRow sx = {tableBodyStyle} key={index}>
                                <TableCell sx ={tableBodyCellStyle} align="left">{row.set}</TableCell>
                                <TableCell sx ={tableBodyCellStyle} align="left">{row.reps}</TableCell>
                                <TableCell sx ={tableBodyCellStyle} align="left">{row.weight}</TableCell>
                                <TableCell sx ={tableBodyButtonCellStyle} align="center">
                                    <Button variant="contained" href="#">Edit</Button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}