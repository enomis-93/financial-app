import { Button, colors } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddIcon from '@mui/icons-material/Add';
import AddBankAccountDialog from './add-bank-account-dialog/add-bank-account-dialog';
import MoneyAdder from './MoneyAdder/MoneyAdderComponent';
import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { apiBankAccountService } from '../../Service/BankAccount.service';
import { selectIsDialogOpen, setOpen} from '../../store/store';
import { moneyAdderActions } from '../../store/store';

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

export default function BankAccountContainer({ onBankAccountIDChange }) {
    const [bankAccounts, setBankAccounts] = React.useState([{}]);
    const [openAdder, setOpenAdder] = React.useState(false);
    const [selectedItemID, setSelectedItemID] = React.useState(null);

    let saldo = 0;
    let valuta = '$';
    let id = 0;

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('useEffect called');
        apiBankAccountService.getAccount().then((res) => {
            setBankAccounts(res);
            console.log(res);
            console.log(openAdder);
        });
    }, [openAdder == false]);

    const handleBankAccountIDChange = (bankAccountID: number) => {
        onBankAccountIDChange(bankAccountID);
        console.log(bankAccountID);
        console.log(selectedItemID);
    };
    const clickOpenAdder = (bankAccountID) => {
        dispatch(moneyAdderActions.setOpen())
        setSelectedItemID(bankAccountID);
        handleBankAccountIDChange(bankAccountID);
    };

    const closeAdder = (value: boolean) => {
        dispatch(moneyAdderActions.setClose())
    };

    const handleClickOpen = () => {
        dispatch(setOpen());
    };


    return (
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
            ></AddBankAccountDialog>
            <MoneyAdder
                conti={bankAccounts}
               
                bankAccountID={selectedItemID}
                closeAdder={closeAdder}
            ></MoneyAdder>
        </div>
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
