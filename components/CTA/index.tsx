import { Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Toast from 'components/Toast';
import Link from 'next/link';
import { useRouter } from 'next/router';
import EmailIcon from '@mui/icons-material/Email';
import { FormEvent, useEffect, useState } from 'react';
import TextField from './components/TextField';
import styles from './CTA.module.scss';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#fff',
      light: '#fff',
      dark: '#fff',
    },
  },
});

const CTA = () => {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [baseUrl, setBaseUrl] = useState('');
  const salesforceUrl = 'https://webto.salesforce.com/test/test.WebToLead?encoding=UTF-8';

  const toggleTost = () => {
    setSuccess((value) => !value);
  };

  useEffect(() => {
    setBaseUrl(
      typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
        : 'https://www.test.com'
    );

    setSuccess(router.query.success ? true : false);

    setTimeout(() => {
      setSuccess(false);
    }, 60000);
  }, [router]);

  return (
    <section id="cta" className={styles['cta']}>
      <div className={styles['cta-content']}>
        <div className={styles['cta-content-part']}>
          <h4>Connect With Us</h4>
          <p>Speak to a team member to learn more about the Pillar commercial real estate marketplace.</p>

          <div style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
            <EmailIcon />
            <span style={{ marginLeft: '20px' }}>
              <a href="mailto:info@pillarmarkets.com">info@pillarmarkets.com</a>
            </span>
          </div>
        </div>
        <ThemeProvider theme={theme}>
          <div className={styles['cta-content-part']}>
            <form action={salesforceUrl} method="POST" target="_blank">
              <input type="hidden" name="oid" value="00D5f000006OVNu" />
              <input type="hidden" name="retURL" value={`${baseUrl}?success=true&cta=true`} />​
              {/* <!--  ----------------------------------------------------------------------  -->
            <!--  NOTE: These fields are optional debugging elements. Please uncomment    -->
            <!--  these lines if you wish to test in debug mode.                          -->
            <input type="hidden" name="debug" value={1} />
            <input type="hidden" name="debugEmail" value="steve@pillarmarkets.com" />
            <!--  ----------------------------------------------------------------------  --> */}
              {/* the code above is for testing */}
              <Grid container spacing={2} columnSpacing={4}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="first_name"
                    label="First Name"
                    inputProps={{ maxLength: 80 }}
                    name="first_name"
                    type="text"
                    placeholder="First Name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="last_name"
                    label="Last Name"
                    inputProps={{ maxLength: 80, color: 'white' }}
                    name="last_name"
                    color="secondary"
                    type="text"
                    placeholder="Last Name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="company"
                    label="Company"
                    inputProps={{ maxLength: 40 }}
                    name="company"
                    type="text"
                    placeholder="Company"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="email"
                    label="Email"
                    inputProps={{ maxLength: 80 }}
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    color="secondary"
                    style={{ height: 'auto', color: '#fff' }}
                    id="description"
                    label="Description"
                    inputProps={{
                      color: '#fff',
                    }}
                    multiline
                    rows={3}
                    InputProps={{
                      required: false,
                      disableUnderline: true,
                    }}
                    name="description"
                    type="text"
                    placeholder={'Description'.toUpperCase()}
                  />
                </Grid>
              </Grid>
              <p className={styles['small']}>
                By submitting your information, you agree to the{' '}
                <Link href="/privacy-and-cookies">privacy policy</Link> and to learn more about offers and
                promotions from Pillar.
              </p>
              <input
                className="ui-button secondary"
                type="submit"
                name="submit"
                value={'Submit'}
                onClick={() => toggleTost()}
              />
            </form>
          </div>
        </ThemeProvider>
      </div>
      <Toast
        open={success}
        content="Your information has been received. A team member will reach out to you soon."
        //subContent={'A team member will reach out to you soon.'}
        title="Message sent successfully"
      />
    </section>
  );
};

export default CTA;
