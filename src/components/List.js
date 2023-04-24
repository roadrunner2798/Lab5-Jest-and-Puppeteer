import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Button, TextField } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux'
import {
    define as reducerDefine,
    add as reducerAdd,
    remove as reducerRemove
} from '../redux/list'


export function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export default function BasicList() {

    const field = useSelector((state) => state.list.field);
    const items = useSelector((state) => state.list.items);

    const dispatch = useDispatch();

    function add() {

        if (validateEmail(field) === true) {

            dispatch(reducerAdd(field))
            dispatch(reducerDefine(""))

        } else {

            alert("Alert! Enter the correct email address.");

        }


    }

    function remove(index) {

        dispatch(reducerRemove(index))

    }

    function define(value) {

        dispatch(reducerDefine(value))

    }

    return (
        <Box sx={{ width: '100%', maxWidth: "100%", bgcolor: 'background.paper' }}>

            <TextField label="Email" variant="outlined" value={field} sx={{ width: "100%", marginBottom: 1 }} onChange={(e) => define(e.target.value)} />
            <Button variant="contained" sx={{ width: "100%", marginBottom: 1 }} onClick={(e) => { add() }}>
                Add
            </Button>

            <Divider />

            <nav aria-label="secondary mailbox folders">
                <List>

                    {items.map((item, i) =>

                        <ListItem disablePadding key={i}>
                            <ListItemButton onClick={(e) => remove(i)}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </ListItem>

                    )}


                </List>
            </nav>
        </Box>
    );
}