import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import ArticleIcon from '@mui/icons-material/Article';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RateReviewIcon from '@mui/icons-material/RateReview';
import SendIcon from '@mui/icons-material/Send';
import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AtmIcon from '@mui/icons-material/Atm';
import { LoginRounded } from '@mui/icons-material';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import AdsClickIcon from '@mui/icons-material/AdsClick';

import App from './menu/App';
import State from './menu/State';
import Effect from './menu/UseEffect1';
import ProductMain from './menu/ProductMain';
import Review from './menu/Review';
import Ref from './menu/Ref';
import Login from './menu/Login';
import ContextEx from './menu/ContextEx';
import Main from './menu/Main';
import ReducerEx from './menu/ReducerEx';
import ReducerEx2 from './menu/ReducerEx2';
import FeedList from './menu/FeedList';
import FeedEdit from './menu/FeedEdit';
import Memo from './menu/Memo';
import UseIdEx from './menu/UseIdEx';

const drawerWidth = 240;

const menuItems = [
  { text: 'Login', icon: <LoginRounded />, path: '/login' },
  { text: 'App', icon: <AppsIcon />, path: '/app' },
  { text: 'State', icon: <ArticleIcon />, path: '/state' },
  { text: 'Effect', icon: <SendIcon />, path: '/effect' },
  { text: 'ProductMain', icon: <ShoppingCartIcon />, path: '/product' },
  { text: 'Review', icon: <RateReviewIcon />, path: '/review' },
  { text: 'Ref', icon: <DashboardIcon />, path: '/ref' },
  { text: 'Context', icon: <PeopleIcon />, path: '/context' },
  { text: 'Main', icon: <HomeIcon />, path: '/main' },
  { text: 'ReducerEx', icon: <AtmIcon />, path: '/reducer' },
  { text: 'ReducerEx2', icon: <AtmIcon />, path: '/reducer2' },
  { text: 'FeedList', icon: <ArtTrackIcon />, path: '/feed' },
  { text: 'FeedEdit', icon: <ArtTrackIcon />, path: '/feedEdit' },
  { text: 'Memo', icon: <NoteAltIcon />, path: '/memo' },
  { text: 'UseIdEx', icon: <AdsClickIcon />, path: '/useId' },
];

function AppRouter() {
  const location = useLocation(); // 현재 URL 확인

  return (
    <Box sx={{ display: 'flex' }}>
      {/* 사이드바 */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { 
            width: drawerWidth, 
            boxSizing: 'border-box',
            backgroundColor: '#f5f5f5', // 배경 색
            paddingTop: 2,
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ textAlign: 'center', width: '100%' }}>
            js 메뉴 목록
          </Typography>
        </Toolbar>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                selected={location.pathname === item.path} // 현재 경로에 하이라이트
                sx={{
                  '&.Mui-selected': {
                    backgroundColor: '#c5cae9',
                    color: '#3949ab',
                    fontWeight: 'bold',
                  },
                  '&:hover': {
                    backgroundColor: '#e8eaf6',
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'inherit' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ fontSize: '18px' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* 메인 컨텐츠 영역 */}
      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#fafafa', p: 3 }}>
        <Toolbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<App />} />
          <Route path="/state" element={<State />} />
          <Route path="/effect" element={<Effect />} />
          <Route path="/product" element={<ProductMain />} />
          <Route path="/review" element={<Review />} />
          <Route path="/ref" element={<Ref />} />
          <Route path="/context" element={<ContextEx />} />
          <Route path="/main" element={<Main />} />
          <Route path="/reducer" element={<ReducerEx />} />
          <Route path="/reducer2" element={<ReducerEx2 />} />
          <Route path="/feed" element={<FeedList />} />
          <Route path="/feedEdit" element={<FeedEdit />} />
          <Route path="/memo" element={<Memo />} />
          <Route path="/useId" element={<UseIdEx />} />
        </Routes>
      </Box>
    </Box>
  );
}

function RouterWrapper() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default RouterWrapper;