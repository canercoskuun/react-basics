import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { TextField } from '@mui/material';

function MUISelect() {
    const [currency, setCurrency] = useState('')
    console.log(currency)
    return (
        <div>
            <FormControl sx={{ width: '150px' }}>
                <InputLabel>Para Birimi</InputLabel>
                <Select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    <MenuItem value="TRY">Türk Lirası</MenuItem>
                    <MenuItem value="USD">Dolar</MenuItem>
                    <MenuItem value="EUR">Euro</MenuItem>
                </Select>
            </FormControl>
            <div style={{ marginTop: '30px' }}>
                <TextField value={currency} onChange={(e) => setCurrency(e.target.value)} sx={{ width: '150px' }} label="Para Birimi" select>
                    <MenuItem value="TRY">Türk Lirası</MenuItem>
                    <MenuItem value="USD">Dolar</MenuItem>
                    <MenuItem value="EUR">Euro</MenuItem>
                </TextField>
            </div>
        </div>
    )
}

export default MUISelect