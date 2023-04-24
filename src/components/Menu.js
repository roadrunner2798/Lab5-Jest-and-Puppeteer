import { Tab, Tabs } from "@mui/material";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function Menu() {

    const { pathname } = useLocation();

    return (

        <div>

            <Tabs value={pathname}>
                {/* <Tab component={Link} to="/about" value="/about" label="About" /> */}
                {/* <Tab component={Link} to="/clients" value="/clients" label="Clients" /> */}
                {/* <Tab component={Link} to="/contact" value="/contact" label="Contact" /> */}
                <Tab component={Link} to="/" value="/" label="" sx={{display:"none"}} />
                <Tab component={Link} to="/counter" value="/counter" label="Counter" />
                <Tab component={Link} to="/list" value="/list" label="List" />
            </Tabs>

        </div>

    )

}