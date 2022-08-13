import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material' 
import { useNavigate } from "react-router"


export default function EditTable(props) {

    const navigate = useNavigate();

    function toEdit(url){
        navigate(url)
      }

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
                    {props.data.map((row, index) => {

                        let url = `/editworkout/${row._id}`
                        return(
                            <TableRow sx = {tableBodyStyle} key={index}>
                                <TableCell sx ={tableBodyCellStyle} align="left">{row.sets}</TableCell>
                                <TableCell sx ={tableBodyCellStyle} align="left">{row.reps}</TableCell>
                                <TableCell sx ={tableBodyCellStyle} align="left">{row.weight}</TableCell>
                                <TableCell sx ={tableBodyButtonCellStyle} align="center">
                                    <Button variant="contained" onClick={() => toEdit(url)}>Edit</Button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}