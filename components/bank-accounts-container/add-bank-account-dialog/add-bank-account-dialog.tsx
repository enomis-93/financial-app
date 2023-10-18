import CloseIcon from "@mui/icons-material/Close";
import {
	Button,
	Container,
	Divider,
	FormControlLabel,
	MenuItem,
	Switch,
	TextField,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import ColorPicker from "./color-picker-input/color-picker-input";
import ColorPickerInput from "./color-picker-input/color-picker-input";
import BankAccountInput from "./bank-account-type-input/bank-account-type";
import NumberInput from "./number-input/number-input";

export interface AddBankAccountDialogProps {
	open: boolean;
	onClose: (value: boolean) => void;
	backAccounts: Object[];
}

const currencies = [
	{
		value: "USD",
		label: "$",
	},
	{
		value: "EUR",
		label: "€",
	},
	{
		value: "BTC",
		label: "฿",
	},
	{
		value: "JPY",
		label: "¥",
	},
];

export default function AddBankAccountDialog(props: AddBankAccountDialogProps) {
	const { onClose, open } = props;
	const [excludeFromStats, setExcludeFromStats] = React.useState(false);
	const [archive, setArchive] = React.useState(false);

	const handleExcludeFromStatsChange = (event) => {
		setExcludeFromStats(event.target.checked);
	};

	const handleArchiveChange = (event) => {
		setArchive(event.target.checked);
	};

	const handleClose = () => {
		onClose(false);
	};

	const [name, setName] = React.useState("");
	const [saldo, setSaldo] = React.useState(0);
	const [valuta, setValuta] = React.useState("");

	const handleOnchangeName = (event) => {
		setName(event.target.value);
	};

	const handleOnchangeSaldo = (saldo) => {
		console.log(saldo);
		setSaldo(saldo);
	};

	const handleOnchangeValuta = (event) => {
		console.log(event.target.value);
		setValuta(event.target.value);
	};

	const saveAccount = () => {
		props.backAccounts.push({
            id:props.backAccounts.length,
			name: name,
			color: "none",
			tipo: "portafoglio",
			saldo: saldo,
			valuta: valuta,
		});
		handleClose();
		return;
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="customized-dialog-title"
		>
			<DialogTitle sx={{ m: 0, p: 1 }} id="customized-dialog-title">
				MODIFICA CONTO
			</DialogTitle>
			<IconButton
				aria-label="close"
				onClick={handleClose}
				sx={{
					position: "absolute",
					right: 8,
					top: 8,
					color: "black",
				}}
			>
				<CloseIcon />
			</IconButton>
			<Divider />
			<DialogContent>
				<Container>
					<div
						style={{
							display: "flex",
							gap: "5px",
							marginBottom: "0.5em",
						}}
					>
						<TextField
							required
							id="outlined-required"
							value={name}
							onChange={handleOnchangeName}
							label="Name"
						/>
						<ColorPickerInput />
					</div>
					<div
						style={{
							display: "flex",
							gap: "5px",
							marginBottom: "0.5em",
						}}
					>
						<BankAccountInput></BankAccountInput>
					</div>
					<div
						style={{
							display: "flex",
							gap: "5px",
							marginBottom: "0.5em",
						}}
					>
						<NumberInput
							style={{ width: "50%" }}
							value={saldo}
							onChange={handleOnchangeSaldo}
							handleOnchangeSaldo={handleOnchangeSaldo}
						></NumberInput>
						<TextField
							style={{ width: "50%" }}
							id="outlined-select-currency"
							select
							label="Valuta"
							defaultValue="EUR"
							value={valuta}
							onChange={handleOnchangeValuta}
						>
							{currencies.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
					</div>

					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "5px",
							marginBottom: "0.5em",
						}}
					>
						<FormControlLabel
							control={
								<Switch
									checked={excludeFromStats}
									onChange={handleExcludeFromStatsChange}
									name="excludeFromStats"
								/>
							}
							label="Escludi dalle statistiche"
						/>
						<FormControlLabel
							control={
								<Switch
									checked={archive}
									onChange={handleArchiveChange}
									name="archive"
								/>
							}
							label="Archivia"
						/>
					</div>
				</Container>
			</DialogContent>
			<DialogActions
				sx={{ p: 1 }}
				style={{ display: "flex", justifyContent: "center" }}
			>
				<Button
					onClick={saveAccount}
					variant="contained"
					color="success"
					style={{ borderRadius: "20px", padding: "0.5em 3em" }}
				>
					Save
				</Button>
			</DialogActions>
		</Dialog>
	);
}
