import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import TextField from './components/TextField';
import styles from './CTA.module.scss';

const CTA = () => {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [baseUrl, setBaseUrl] = useState('');
  const salesforceUrl = 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8';

  useEffect(() => {
    setBaseUrl(
      typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
        : 'https://www.pillarmarkets.com'
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
        </div>
        <div className={styles['cta-content-part']}>
          <form action={salesforceUrl} method="POST">
            <input type="hidden" name="oid" value="00D5f000006OVNu" />
            <input type="hidden" name="retURL" value={`${baseUrl}?success=true&cta=true`} />​
            {/* <!--  ----------------------------------------------------------------------  -->
            <!--  NOTE: These fields are optional debugging elements. Please uncomment    -->
            <!--  these lines if you wish to test in debug mode.                          -->
            <input type="hidden" name="debug" value={1} />
            <input type="hidden" name="debugEmail" value="steve@pillarmarkets.com" />
            <!--  ----------------------------------------------------------------------  --> */}
            {/* the code above is for testing */}
            <input
              id="first_name"
              required
              maxLength={40}
              name="first_name"
              size={20}
              type="text"
              placeholder="First Name"
            />
            <input
              id="last_name"
              required
              maxLength={80}
              name="last_name"
              size={20}
              type="text"
              placeholder="Last Name"
            />
            <input
              id="company"
              maxLength={40}
              name="company"
              size={20}
              type="text"
              required
              placeholder="Company"
            />
            <TextField
              id="email"
              variant="standard"
              label="Email"
              inputProps={{ maxLength: 80, size: 20 }}
              name="email"
              type="text"
              fullWidth
              placeholder="Email"
            />
            <p className={styles['small']}>
              By submitting your information, you agree to the{' '}
              <Link href="/privacy-and-cookies">privacy policy</Link> and to learn more about offers and
              promotions from Pillar.
            </p>
            {success && (
              <>
                ​<h5>Your information has been received. A team member will reach out to you soon.</h5>
                <br />
              </>
            )}
            <input className="ui-button secondary" type="submit" name="submit" value={'Submit'} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
