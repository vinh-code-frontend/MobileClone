import { RouterProvider } from "react-router-dom";
import router from "./routes";

import { Box, useTheme, alpha } from "@mui/material";

import "@fontsource/inter";
import "./assets/style.css";
import "simplebar-react/dist/simplebar.min.css";

const App = () => {
  const theme = useTheme();

  console.log(theme);
  return (
    <Box
      sx={{
        backgroundColor: alpha(theme.palette.primary.main, 0.1),
        height: "100dvh",
        width: "100%",
      }}
    >
      <RouterProvider router={router} />;
    </Box>
  );
};

export default App;
