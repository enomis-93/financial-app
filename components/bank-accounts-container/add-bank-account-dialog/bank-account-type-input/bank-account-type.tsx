import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BankAccountTypeInput(props) {
    const [type, setType] = React.useState<string | number>('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event: SelectChangeEvent<typeof type>) => {
        setType(event.target.value);
        props.typeFromFather(event.target.value)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <FormControl sx={{ width: '100%' }}>
            <InputLabel id='demo-controlled-open-select-label'>Tipo</InputLabel>
            <Select
                labelId='demo-controlled-open-select-label'
                id='demo-controlled-open-select'
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={type}
                label='Color'
                onChange={handleChange}
            >
                <MenuItem value=''>
                    <em>None</em>
                </MenuItem>
                <MenuItem value={'Conto corrente'}>Conto corrente</MenuItem>
                <MenuItem value={'BitCoin Wallet'}>BitCoin Wallet</MenuItem>
            </Select>
        </FormControl>
    );
}
