import CloseIcon from "@mui/icons-material/Close";
import { Dialog, DialogContent, Divider, TextField } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import { Button, Text } from "react-native";
import NumberInput from "../add-bank-account-dialog/number-input/number-input";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export interface Props {
  openAdder: boolean;

  closeAdder: (value: boolean) => void;
}

const styles = {};
const coso="saldo"
function MoneyAdder(props: Props) {
  const closeDialog = () => {
    props.closeAdder(false);
  };
  const [cash,setCash] = React.useState(0)

  return (
    <Dialog
      open={props.openAdder}
      onClose={props.closeAdder}
      aria-labelledby="customized-dialog-title"
    >
      <DialogTitle sx={{ m: 0, p: 1  ,}}>Contanti</DialogTitle>
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
        <div style={{display:"flex", justifyContent: "center",alignItems: "center"}}>
        <RemoveIcon onClick={()=>{cash > 0 ?setCash(cash-1):setCash(cash)}} /><TextField style={{}} type="number" value={cash} /><AddIcon onClick={()=>{setCash(cash+1)}} />
        </div>
        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",marginTop: 40}}>
          <Button title="Rimuovi" color={'red'}></Button>
          <Button title="Aggiungi" color={'black'}></Button>

        </div>
      </DialogContent>
    </Dialog>
  );
}

export default MoneyAdder;
