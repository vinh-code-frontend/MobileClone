import { Outlet } from 'react-router-dom';
import { Button } from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';
const MainLayout = () => {
  return (
    <div>
      MainLayout
      <div>
        <Button variant="contained" color="primary">
          Hello MUI
        </Button>
        <PerfectScrollbar style={{ maxHeight: '300px' }}>
          <div style={{ height: '120vh', background: '#ccc' }}>vc</div>
        </PerfectScrollbar>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
