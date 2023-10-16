import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function ColorPickerInput() {
    const [color, setColor] = React.useState<string | number>('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event: SelectChangeEvent<typeof color>) => {
        setColor(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <FormControl sx={{ width: '100%' }}>
            <InputLabel id='demo-controlled-open-select-label'>
                Color
            </InputLabel>
            <Select
                labelId='demo-controlled-open-select-label'
                id='demo-controlled-open-select'
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={color}
                style={{ backgroundColor: color.toString() }}
                label='Color'
                onChange={handleChange}
            >
                <MenuItem value=''>
                    <em>None</em>
                </MenuItem>
                <MenuItem value={'red'} style={{ backgroundColor: 'red' }}>
                    Red
                </MenuItem>
                <MenuItem value={'cyan'} style={{ backgroundColor: 'cyan' }}>
                    Cyan
                </MenuItem>
                <MenuItem
                    value={'yellow'}
                    style={{ backgroundColor: 'yellow' }}
                >
                    Yellow
                </MenuItem>
                <MenuItem value={'green'} style={{ backgroundColor: 'green' }}>
                    Green
                </MenuItem>
            </Select>
        </FormControl>
    );
}
