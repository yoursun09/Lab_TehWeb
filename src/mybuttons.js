import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';

 export default function IconButtonColors(props) {

const {onClick} = props
    const handleClick = () => {
        onClick();
        console.log("Ai intrat in consolă!");
    }

    return (
        <Stack direction="row" spacing={1}>
            <IconButton aria-label="fingerprint" color="secondary" onClick={handleClick} >
                <Fingerprint />
            </IconButton>
            <IconButton aria-label="fingerprint" color="success" onClick={handleClick}>
                <Fingerprint />
            </IconButton>
        </Stack>
    );
}

