import React, { useState } from "react";
import { Box, Collapse, Container } from "@mui/material"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditOffOutlinedIcon from '@mui/icons-material/EditOffOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

import DetailsTable from "./DetailsTable";
import EditTable from "./EditTable";


export default function ExpandCard(props) {

    // state for if the details of an item has been opened
    const [detailOpen, setDetailOpen] = useState(false)

    // changes state of details 
    const handleDetailClick = () => {
        setDetailOpen(!detailOpen)
        if(editOpen){
            setEditOpen(false)
        }
    }

    // state for if the edit details of an item has been opened
    const [editOpen, setEditOpen] = useState(false)

    // changes the state of the edit details
    const handleEditClick = () => {
        setEditOpen(!editOpen)
        if(detailOpen){
            setDetailOpen(false)
        }
    }

    // Styling for Component 
    let containerStyle = [
        {display: "flex"}, 
        {padding: "2px"},
        {alignItems: "center"},
        {borderBottom: 2},
        {borderColor: "#E4E4E4"},
        detailOpen ? {border: 4} : {} ,
        detailOpen ? {borderColor: "#9EFFC5"} : {},
        editOpen ? {border: 4} : {} ,
        editOpen ? {borderColor: "#F6C971"} : {},
        {backgroundColor: "#535D65"}
    ]

    // For the text
    let titleStyle = {
        color: "#E4E4E4",
    }

    let detailboxStyle = [
        {paddingLeft: 2},
        {paddingRight: 2},
        {backgroundColor: "#9EFFC5"},
        {borderRadius: 5},
    ]

    let detailStyle = [
        {fontSize: "2rem"},
        {display: "block"}
    ]

    let editboxStyle = [
        {paddingLeft: 2},
        {paddingRight: 2},
        {backgroundColor: "#F6C971"},
        {borderRadius: 5},
        {marginLeft: 2},
        {marginRight: 2}
    ]

    let editStyle = [
        {fontSize: "2rem"},
        {display: "block"}
    ]

    return(
        <div>
            {/* Main Container that Holds Buttons + Title */}
            <Container sx={containerStyle}>
                {/* Title Box */}
                <Box sx = {{flexGrow: 1}}>
                    <h3 style={titleStyle}>{props.name}</h3>
                </Box>
                {/* Details Button Box */}
                <Box sx = {detailboxStyle} onClick = {handleDetailClick}>
                    {detailOpen ? <VisibilityOffOutlinedIcon sx = {detailStyle} /> : <RemoveRedEyeOutlinedIcon sx = {detailStyle} />}
                </Box>
                {/* Edit Button Box */}
                <Box sx = {editboxStyle} onClick = {handleEditClick}>
                    { editOpen ? <EditOffOutlinedIcon sx = {editStyle} /> : <EditOutlinedIcon sx= {editStyle}/> }
                </Box>
            </Container>
            {/* Collapse for Details - Opens when details button is clicked */}
            <Collapse in={detailOpen} unmountOnExit>
                <Container>
                    {/* Replace with Table */}
                    <DetailsTable data = {props.data} />
                </Container>
            </Collapse>
            {/* Collapse for Edit - Opens when edit button is clicked */}
            <Collapse in={editOpen} unmountOnExit>
                <Container>
                    {/* Replace with Editable Table */}
                    <EditTable data = {props.data}  />
                </Container>
            </Collapse>
        </div>
    )
}
