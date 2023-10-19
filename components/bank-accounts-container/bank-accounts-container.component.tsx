import { Button, colors } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddIcon from '@mui/icons-material/Add';
import AddBankAccountDialog from './add-bank-account-dialog/add-bank-account-dialog';
import MoneyAdder from './MoneyAdder/MoneyAdderComponent';
import React, { useEffect } from 'react';
import { apiBankAccountService } from '../../Service/BankAccount.Service';

const styles = {
    container: {
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'space-between',
        gap: '5px',
        padding: '1em'
    },
    bank_button: {
        flex: 1,
        width: '100%'
    },
    add_account: {}
};

let conti = [
    {
        id: 123,
        name: 'contanti',
        color: 'none',
        tipo: 'portafoglio',
        saldo: 0,
        valuta: '$'
    }
];

export default function BankAccountContainer() {
    const [bankAccounts, setBankAccounts] = React.useState([{}]);
    const [open, setOpen] = React.useState(false);
    const [openAdder, setOpenAdder] = React.useState(false);
    const [selectedItemID, setSelectedItemID] = React.useState(null);

    let saldo = 0;
    let valuta = '$';
    let id = 0;
    useEffect(() => {
        apiBankAccountService.getAccount().then((res) => {
            setBankAccounts(res);
            console.log(res);
        });
    });
    const clickOpenAdder = (bankAccountID) => {
        setOpenAdder(true);
        setSelectedItemID(bankAccountID);
        console.log(bankAccountID);
    };

    const closeAdder = (value: boolean) => {
        setOpenAdder(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: boolean) => {
        setOpen(false);
    };

    return (
        <>
            <div style={styles.container}>
                <ListWallet
                    bankAccounts={bankAccounts}
                    onButtonClick={clickOpenAdder}
                />
                <Button
                    style={styles.add_account}
                    onClick={handleClickOpen}
                    variant='outlined'
                >
                    <AccountBalanceIcon
                        style={{ color: 'grey', padding: '0em 0.5em' }}
                    ></AccountBalanceIcon>
                    <p style={{ color: 'grey', margin: 0 }}>
                        Aggiungi un nuovo conto
                    </p>
                    <AddIcon style={{ color: 'grey' }}></AddIcon>
                </Button>
                <AddBankAccountDialog
                    backAccounts={bankAccounts}
                    open={open}
                    onClose={handleClose}
                ></AddBankAccountDialog>
                <MoneyAdder
                    conti={bankAccounts}
                    openAdder={openAdder}
                    bankAccountID={selectedItemID}
                    closeAdder={closeAdder}
                ></MoneyAdder>
            </div>
        </>
    );
}

function ListWallet({ onButtonClick, bankAccounts }) {
    const [selectedBankAccountID, setSelectedBankAccountID] =
        React.useState(null);
    /*const handleOpenAdderDialog = (conto_id:number) =>{

onButtonClick(conto_id)
}*/

    return bankAccounts.map((conto) => {
        return (
            <section>
                <Button
                    style={{
                        ...styles.bank_button,
                        backgroundColor: conto.color
                    }}
                    variant='contained'
                    onClick={() => {
                        onButtonClick(conto.id);
                    }}
                >
                    {conto.name} {conto.balance} {conto.currency}
                </Button>
            </section>
        );
    });
}
