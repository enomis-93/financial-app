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

	let saldo = 0;
	let valuta = "$";

	const clickOpenAdder = () => {
		setOpenAdder(true);
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
				<ListWallet clickOpenAdder={clickOpenAdder} />
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
				<MoneyAdder openAdder={openAdder} closeAdder={closeAdder}></MoneyAdder>
			</div>
		</>
	);
}

const ListWallet = (props) =>
	conti.map((conto) => {
		return (
			<section>
				<Button
					style={styles.bank_button}
					variant="contained"
					onClick={props.clickOpenAdder}
				>
					{conto.name} {conto.saldo} {conto.valuta}
				</Button>
			</section>
		);
	});
