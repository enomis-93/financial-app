import React from 'react';
import TextField from '@mui/material/TextField';

function NumberInput() {
    const [number, setNumber] = React.useState(0);

    const handleNumberChange = (event) => {
        if (event.target.value >= 0) {
            setNumber(event.target.value);
        }
    };

    return (
        <TextField
            type='number'
            label='Saldo iniziale'
            value={number}
            onChange={handleNumberChange}
            InputLabelProps={{
                shrink: true
            }}
        />
    );
}

export default NumberInput;
