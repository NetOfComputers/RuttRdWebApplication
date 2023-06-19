import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate, useLocation } from "react-router-dom";
export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");
  const navigate = useNavigate();
  const actions = {
    home: () => {
      navigate("/InitialView");
    },
    explore: () => {
      navigate("/Search");
    },
    me: () => {
      navigate("/CreateEvent");
    },
    favorite: () => {
      navigate("/Favorites");
    },
    profile: () => {
      navigate("/Profile");
    },
  };

  const handleChange = (event, newValue) => {
    window.localStorage.setItem("newValue", newValue);
    setValue(newValue, () => {
      actions[newValue]();
    });
  };

  return (
    <BottomNavigation
      sx={{
        width: "auto",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        value="home"
        icon={<HomeIcon />}
        showLabel={false}
        sx={{
          color: "black",
        }}
      />
      <BottomNavigationAction
        value="explore"
        icon={<SearchIcon />}
        showLabel={false}
        sx={{
          color: "black",
        }}
      />
      <BottomNavigationAction
        value="me"
        icon={<AddIcon />}
        showLabel={false}
        sx={{
          color: "black",
        }}
      />
      <BottomNavigationAction
        value="favorite"
        icon={<FavoriteIcon />}
        showLabel={false}
        sx={{
          color: "black",
        }}
      />
      <BottomNavigationAction
        value="profile"
        icon={<AccountCircleIcon />}
        showLabel={false}
        sx={{
          color: "black",
        }}
      />
    </BottomNavigation>
  );
}


