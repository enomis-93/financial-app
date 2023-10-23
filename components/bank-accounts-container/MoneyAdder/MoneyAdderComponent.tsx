import CloseIcon from "@mui/icons-material/Close";
import { Dialog, DialogContent, Divider, TextField } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import { Button, Text } from "react-native";
import NumberInput from "../add-bank-account-dialog/number-input/number-input";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export interface Props {
  openAdder: boolean;
  bankAccountID: number;
  conti: any;
  closeAdder: (value: boolean) => void;
}

const styles = {};
const coso = "saldo";
function MoneyAdder(props: Props) {
  const [valueToUpdate, setValueToUpdate] = React.useState(null);

  const closeDialog = () => {
    props.closeAdder(false);
  };

  const updateBalance = (
    bankAccountID: number,
    cash: number,
    addingCash: boolean
  ) => {
    let transactionInfo: { balance: number; addCash: boolean } = {
      balance: cash,
      addCash: addingCash,
    };
    const headers = { "Content-Type": "application/json" };

    fetch(
      `http://localhost:8080/api/bankAccount/update-balance/${bankAccountID}`,
      { body: JSON.stringify(transactionInfo), method: "PUT", headers }
    )
      .then(() => {
        alert("Cash updated !");
        closeDialog();
      })
      .catch((error) => {
        console.log(error);
      });
    return;
  };

  return (
    <Dialog
      open={props.openAdder}
      onClose={props.closeAdder}
      aria-labelledby="customized-dialog-title"
    >
      <DialogTitle sx={{ m: 0, p: 1 }}>Contanti</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={closeDialog}
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RemoveIcon
            onClick={() => {
              setValueToUpdate(valueToUpdate - 1);
            }}
          />
          <TextField
            id="numerField"
            style={{}}
            type="number"
            placeholder="0"
            value={+valueToUpdate}
          />
          <AddIcon
            onClick={() => {
              setValueToUpdate(valueToUpdate + 1);
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 40,
          }}
        >
          <Button
            onPress={() => {
              updateBalance(props.bankAccountID, valueToUpdate, false);
              
            }}
            title="Rimuovi"
            color={"red"}
          ></Button>
          <Button
            onPress={() => {
              updateBalance(props.bankAccountID, valueToUpdate, true);
            }}
            title="Aggiungi"
            color={"black"}
          ></Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default MoneyAdder;
