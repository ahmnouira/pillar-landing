import Link from 'next/link';
import { useScrollTrigger } from '@mui/material';
import classNames from 'classnames';
import styles from './Navbar.module.scss';
import { handleMoveToId } from 'utils';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
type Menu = {
  text: string;
  onClick?: () => void;
  path: string;
};

export type NavbarProps = {
  dark?: boolean;
  setOpen?: () => void;
  logoColor?: string;
  home?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({
  dark = false,
  logoColor = 'black',
  setOpen,
  home = false,
}: NavbarProps) => {
  const router = useRouter();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 80,
  });

  const menus: Menu[] = [
    {
      text: 'Sponsors',
      onClick: () => router.push('/sponsor'),
      path: '/sponsor',
    },
    {
      text: 'About us',
      path: '/?about-us=true',
    },
    {
      text: 'Careers',
      onClick: () => router.push('/career'),
      path: '/career',
    },
    // {
    //   text: 'Contact Us',
    //   onClick: () => handleButtonClick(),
    // },
    {
      text: 'Get Started',
      path: '/?cta=true',
    },
  ];

  const [activeLogoColor, setActiveLogoColor] = useState('');

  if (!activeLogoColor) setActiveLogoColor(logoColor);

  useEffect(() => {
    setActiveLogoColor(trigger ? 'white' : logoColor);
  }, [trigger]);

  return (
    <nav
      className={classNames(`${styles.navbar} padding-wrapper`, {
        [styles.active]: trigger || dark,
      })}>
      <div className={styles['navbar-content']}>
        <div className={styles['navbar-content-box']}>
          <Link href="/">
            <a>
              <img
                src={`/logo-${activeLogoColor}.png`}
                alt="Pillar Markets"
                width={120}
                height={60}
                className={styles.logo}
              />
            </a>
          </Link>
        </div>
        <div className={styles['sidebar-desktop']}>
          {menus &&
            menus.map((menu, idx) => {
              const linkClass =
                idx !== menus.length - 1
                  ? trigger || dark
                    ? 'link-trigger'
                    : 'link'
                  : trigger || dark
                  ? 'button-trigger'
                  : 'button';
              const homeClass = home ? (trigger ? 'home-trigger' : 'home') : '';
              return (
                <div className={styles['navbar-content-box']} key={idx}>
                  <Link href={menu.path} passHref>
                    <a>
                      <button className={`ui-button primary ${linkClass} ${homeClass}`}>{menu.text}</button>
                    </a>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
      <div className={styles['sidebar-trigger']} onClick={setOpen}>
        <MenuIcon style={{ fontSize: 30 }} htmlColor={trigger ? 'white' : logoColor} />
      </div>
    </nav>
  );
};

export default Navbar;
