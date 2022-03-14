import Link from 'next/link';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <section className={styles['footer-section']}>
      <div className={styles['footer-section-content']}>
        <img src="/logo-white.png" alt="Pillar Markets Logo footer" width={120} height={60} />
        <p>Digital Infrastructure Powering Private Real Estate</p>
        <a href="mailto:info@pillarmarkets.com">info@pillarmarkets.com</a>
        <div className={styles['button-container']}>
          <a target="_blank" rel="noopener noreferrer" className={styles['icon']}>
            <LinkedInIcon fontSize="large" sx={{ color: 'white', fontSize: 28 }} />
          </a>
          <a target="_blank" className={styles['icon']} rel="noopener noreferrer">
            <TwitterIcon fontSize="large" sx={{ color: 'white', fontSize: 28 }} />
          </a>
        </div>
      </div>
      <footer>
        <p>Copyright &copy; {new Date().getFullYear()} Pillar Markets Inc.</p>
        <Link href="/sponsor">Sponsors</Link>
        <Link href="/career">Careers</Link>
        <Link href="/terms-of-service">Terms of Service</Link>
        <Link href="/privacy-and-cookies">Privacy and Cookies</Link>
        <Link href="/confidentiality-agreement">Confidentiality Agreement</Link>
      </footer>
    </section>
  );
};

export default Footer;
