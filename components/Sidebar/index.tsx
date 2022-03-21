import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import SecurityIcon from '@mui/icons-material/Security';
import LockIcon from '@mui/icons-material/Lock';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, ListItemIcon } from '@mui/material';

import { handleMoveToId } from 'utils';
import { useRouter } from 'next/router';

const options = [
  { title: 'Get Started' },
  { title: 'Sponsors', link: '/sponsor' },
  { title: 'About us', link: '/?about-us=true' },
  { title: 'Careers', link: '/career' },
];

const Sidebar: React.FC<any> = ({ setOpen, open }) => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.pathname !== '/' && router.push('/?cta=true');
    router.pathname === '/' && handleMoveToId();
  };

  const handleAboutUsClick = () => {
    router.pathname !== '/' && router.push('/?about-us=true');
    router.pathname === '/' && handleMoveToId('about-us');
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <div
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          width: '100%',
          display: 'flex',
        }}>
        <IconButton onClick={setOpen}>
          <CloseIcon htmlColor="black" />
        </IconButton>
      </div>
      <List>
        {options.map((option, index) => (
          <ListItem button key={index}>
            {/* <ListItemIcon>
              <>
                {index === 1 && <TextSnippetIcon />}
                {index === 2 && <SecurityIcon />}
                {index === 3 && <LockIcon />}
              </>
            </ListItemIcon> */}
            <ListItemText>
              {option.link ? (
                <Link href={option.link}>
                  <a onClick={option.title === 'About us' ? handleAboutUsClick : undefined}>{option.title}</a>
                </Link>
              ) : (
                <a onClick={handleButtonClick}>{option.title}</a>
              )}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor="right" open={open} onClose={setOpen}>
        {list()}
      </Drawer>
    </div>
  );
};

export default Sidebar;
