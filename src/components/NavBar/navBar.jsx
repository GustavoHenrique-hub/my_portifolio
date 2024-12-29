import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box } from "@mui/material";

export default function NavBar() {
  const [value, setValue] = React.useState("home");

  const handleChange = (event, newValue) => {
    setValue(newValue);

    // Navegação suave até a seção correspondente
    const section = document.getElementById(newValue);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", transition: "ease in" });
    }
  };

  return (
    <Box sx={{ width: "37%", position: "fixed", bottom: 20}}>
      <BottomNavigation
        sx={{
          backgroundColor: "#383535",
          borderRadius: 3,
          boxShadow: "inset 0 0 50px rgba(0, 0, 0, 0.5)",
        }}
        value={value}
        onChange={handleChange}
      >
        {[
          { label: "Home", value: "home", icon: <HomeIcon /> },
          { label: "About Me", value: "about", icon: <PersonIcon /> },
          { label: "Techs", value: "techs", icon: <SchoolIcon /> },
          { label: "Projects", value: "projects", icon: <CodeIcon /> },
          { label: "Contact Me", value: "contact", icon: <PhoneIcon /> },
        ].map(({ label, value: val, icon }) => (
          <BottomNavigationAction
            key={val}
            label={label}
            value={val}
            disableRipple
            icon={
              <Box
                sx={{
                  width: value === val ? "70px" : "50px",
                  height: value === val ? "70px" : "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "30px",
                  background:
                    value === val
                      ? "linear-gradient(40deg, #7a42f4, #532da5)"
                      : "none",
                  transition: "all 0.3s ease-in-out",
                  boxShadow:
                    value === val
                      ? "0px 8px 15px rgba(122, 66, 244, 0.5)" // Box-shadow quando selecionado
                      : "none",
                }}
              >
                {icon}
              </Box>
            }
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: value === val ? "2rem" : "2.4rem",
                color: "#fff",
                transition: "all 0.3s ease-in-out",
              },
              "& .MuiBottomNavigationAction-label": {
                fontSize: value === val ? "1rem" : "0.8rem",
                transition: "all 0.3s ease-in-out",
                color: value === val ? "#fff" : "#fff",
              },
              transform: value === val ? "translateY(-10px)" : "translateY(0)",
              transition: "all 0.3s ease-in-out",
            }}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
