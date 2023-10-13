import { Button, SvgIcon } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddIcon from '@mui/icons-material/Add';

const styles = {
    container: {
        display: 'flex',
        'justify-content': 'space-between',
        gap: '5px',
        padding: '1em'
    },
    bank_button: {
        flex: 1
    },
    add_account: {}
};

function BankAccountContainer() {
    return (
        <>
            <div style={styles.container}>
                <Button style={styles.bank_button} variant='contained'>
                    Contanti
                </Button>
                <Button style={styles.add_account} variant='outlined'>
                    <AccountBalanceIcon
                        style={{ color: 'grey' }}
                    ></AccountBalanceIcon>
                    <AddIcon style={{ color: 'grey' }}></AddIcon>
                </Button>
            </div>
        </>
    );
}

export default BankAccountContainer;
