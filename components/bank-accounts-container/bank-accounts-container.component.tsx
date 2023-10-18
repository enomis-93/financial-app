import { Button } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AddIcon from "@mui/icons-material/Add";
import AddBankAccountDialog from "./add-bank-account-dialog/add-bank-account-dialog";
import MoneyAdder from "./MoneyAdder/MoneyAdderComponent";
import React from "react";

const styles = {
  container: {
    display: "flex",
    "justify-content": "space-between",
    gap: "5px",
    padding: "1em",
  },
  bank_button: {
    flex: 1,
  },
  add_account: {},
};

let conti = [
  {
    id: 123,
    name: "contanti",
    color: "none",
    tipo: "portafoglio",
    saldo: 0,
    valuta: "$",
  },
];

export default function BankAccountContainer() {
  const [open, setOpen] = React.useState(false);
  const [openAdder, setOpenAdder] = React.useState(false);
  const [selectedItemID, setSelectedItemID] = React.useState(null);

  let saldo = 0;
  let valuta = "$";
  let id = 0;

  const clickOpenAdder = (bankAccountID) => {
    setOpenAdder(true);
    setSelectedItemID(bankAccountID);
	console.log(bankAccountID)
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
        <ListWallet  onButtonClick={clickOpenAdder} />
        <Button
          style={styles.add_account}
          onClick={handleClickOpen}
          variant="outlined"
        >
          <AccountBalanceIcon style={{ color: "grey" }}></AccountBalanceIcon>
          <AddIcon style={{ color: "grey" }}></AddIcon>
        </Button>
        <AddBankAccountDialog
          backAccounts={conti}
          open={open}
          onClose={handleClose}
        ></AddBankAccountDialog>
        <MoneyAdder
		  conti = {conti}
          openAdder={openAdder}
          bankAccountID={selectedItemID}
          closeAdder={closeAdder}
        ></MoneyAdder>
      </div>
    </>
  );
}

function ListWallet({onButtonClick}){ 
	const [selectedBankAccountID,setSelectedBankAccountID] =React.useState(null)
/*const handleOpenAdderDialog = (conto_id:number) =>{

onButtonClick(conto_id)
}*/


    return (
		conti.map((conto) =>{return (<section>
			<Button
			  style={styles.bank_button}
			  variant="contained"
			  onClick={()=>{onButtonClick(conto.id)}}
			>
			  {conto.name} {conto.saldo} {conto.valuta}
			</Button>
		  </section>)})
      
  );}
 
