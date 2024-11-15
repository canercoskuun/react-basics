import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';

function MUITextField() {
    return (
        <div>
            <div style={{ marginTop: '30px' }}>
                <TextField label="Adınız" variant='outlined' />
            </div>
            <div style={{ marginTop: '30px' }}>
                <TextField label="Adınız" variant='filled' />
            </div>
            <div style={{ marginTop: '30px' }}>
                <TextField label="Adınız" variant='standard' />
            </div>
            <div style={{ marginTop: '30px' }}>
                <TextField label="Adınız" variant='outlined' color='warning' helperText="isminizi giriniiz" />
            </div>
            <div style={{ marginTop: '30px' }}>
                <TextField disabled='true' label="Adınız" variant='outlined' color='warning' helperText="isminizi giriniz" />
            </div>
            <div style={{ marginTop: '30px' }}>
                <TextField InputProps={{
                    startAdornment: <InputAdornment ><PersonIcon /></InputAdornment>
                }} variant='outlined' />
            </div>
            <div style={{ marginTop: '30px' }}>
                <TextField InputProps={{
                    endAdornment: <InputAdornment ><PersonIcon /></InputAdornment>
                }} variant='outlined' />
            </div>
        </div>
    )
}

export default MUITextField