import React from "react";
import { Typography, Link } from "@material-ui/core/";

const Copyright = () => {
  return (
    <div>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://github.com/OktarianTB">
          Deep
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
      <br />
      <Typography variant="body2" color="textSecondary" align="center">
        This simulator is for educational purposes only and uses
        fake money.
      </Typography>
      
    </div>
  );
};

export default Copyright;
