import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material' 


export default function DetailsTable(props) {

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
                    {props.data.map((row, index) => {
                        return(
                            <TableRow sx = {tableBodyStyle} key={index}>
                                <TableCell sx ={tableBodyCellStyle} align="left">{row.sets}</TableCell>
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