import React from "react";
import "./Form.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Form = () => {
  return (
    <div className="formContainer">
      <div className="formSection">
        <div className="formHeader">
          <h4>Užpildykite formą, skambinkite dabar!</h4>
          <p>
            Jūsų namų santechnika yra mūsų prioritetas. Skambinkiet telefonu
            <span>+370(646)27 181</span> arba užpildykite mūsų kontaktinę formą,
            kad galėtumėte susisiekti su mūsų profesionalia ir patikima komanda.
          </p>
        </div>

        <div className="forma">
          <Box
            component="form"
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            noValidate
            autoComplete="off"
          >
            <Box
              sx={{
                display: "flex",
                gap: "4%",
                flexWrap: "wrap",
              }}
            >
              <TextField
                sx={{ flex: 1 }}
                id="outlined-basic"
                label="Fist Name"
                variant="outlined"
              />
              <TextField
                sx={{ flex: 1 }}
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "4%",
                flexWrap: "wrap",
              }}
            >
              <TextField
                sx={{ flex: 1 }}
                id="outlined-basic"
                label="Phone"
                variant="outlined"
              />
              <TextField
                sx={{ flex: 1 }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
            </Box>
            <TextField id="outlined-basic" label="Adress" variant="outlined" />
            <TextField id="outlined-basic" label="Adress2" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="New Costumer?"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="How can we help You?"
              variant="outlined"
            />
            <Box
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Button
                sx={{
                  width: "20%",
                  height: "60px",
                  backgroundColor: "#ADD3D0",
                  fontFamily: "'DM Serif Display', serif",
                  color: "#153250",
                  fontWeight: "600",
                  letterSpacing: "0.1em",
                  "&:hover": {
                    backgroundColor: "#153250",
                    color: "white",
                  },
                }}
                variant="contained"
              >
                Siųsti!
              </Button>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Form;
