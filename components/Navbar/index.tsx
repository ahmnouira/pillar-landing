import Image from 'next/image';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { useScrollTrigger } from '@mui/material';
import classNames from 'classnames';
import styles from './Navbar.module.scss';
import { handleMoveToId } from 'utils';
import { useRouter } from 'next/router';

const Navbar: React.FC<any> = ({ dark = false, setOpen }) => {
  const router = useRouter();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 80,
  });

  const handleButtonClick = () => {
    router.pathname !== '/' && router.push('/?cta=true');
    router.pathname === '/' && handleMoveToId();
  };

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
                src="/logo-white.png"
                alt="Pillar Markets Logo"
                width={120}
                height={60}
                className={styles.logo}
              />
            </a>
          </Link>
        </div>
        <div className={styles['navbar-content-box']}>
          <button className={`ui-button primary ${styles['get-started']}`} onClick={handleButtonClick}>
            Get Started
          </button>
        </div>
        {/* Disable sidebar menu for now - KR Dec 29, 2021
        <div className={styles['sidebar-trigger']} onClick={setOpen}>
          <MenuIcon />
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
