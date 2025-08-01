import { Outlet } from "react-router-dom";
import { Box, Button } from "@mui/material";
import SimpleBar from "simplebar-react";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ bgcolor: "white" }}>sidebar</Box>
      <Box sx={{ flexGrow: "1" }}>
        <Box>Main layout</Box>
        <Button variant="contained" color="primary">
          Hello MUI
        </Button>
        <SimpleBar style={{ maxHeight: "300px" }}>
          <div style={{ height: "120vh", background: "#ccc" }}>vc</div>
        </SimpleBar>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
