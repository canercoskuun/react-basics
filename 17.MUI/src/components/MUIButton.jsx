import React from 'react'
import { Button } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'

function MUIButton() {
    return (
        <div>
            <div style={{ marginBottom: '50px' }}>
                <Button variant='text'>Kaydol </Button>
                <Button variant='contained'>Kaydol </Button>
                <Button variant='outlined'>Kaydol </Button>
            </div>
            <div style={{ marginBottom: '50px' }}>
                <Button color='error'>Giriş Yap</Button>
                <Button color='primary'>Giriş Yap</Button>
                <Button color='secondary'>Giriş Yap</Button>
                <Button color='success'>Giriş Yap</Button>
                <Button color='warning' variant='contained'>Giriş Yap</Button>
            </div>
            <div style={{ marginBottom: '50px' }}>
                <Button size='small' variant='contained'>Geri Dön</Button>
                <Button size='medium' variant='contained'>Geri Dön</Button>
                <Button size='large' variant='contained'>Geri Dön</Button>
            </div>
            <div>
                <Button size='small' variant='contained' color='warning' startIcon={<AddCircleIcon />}>Geri Dön</Button>
                <Button size='small' variant='contained' color='warning' endIcon={<AddCircleIcon />}>Geri Dön</Button>
            </div>
        </div>
    )
}

export default MUIButton