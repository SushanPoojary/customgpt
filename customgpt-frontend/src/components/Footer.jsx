import { Typography } from "@mui/material";
import { Link } from "@mui/material";

function Footer(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Made with  💕 '}
        <Link color="inherit" href="https://github.com/SushanPoojary/customgpt">
          Sushan Poojary
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

export default Footer;