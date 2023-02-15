// libs
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
// others
import styles from './ChangeLanguage.module.css';

export const ChangeLanguage = () => {
  const router = useRouter();
  const { locales, asPath, locale } = router;

  const [lang, setLang] = useState<any>('');

  useEffect(() => {
    setLang(locale);
  }, [locale]);

  return (
    <div className={styles.changeLanguageWrapper}>
      {locales?.map((locale, idx) => (
        <div key={locale} style={{ display: 'flex' }}>
          <Link href={asPath} locale={locale} replace>
            <div className={lang === locale ? styles.active : styles.activeNull}>
              <FormattedMessage id={`${locale}`} />
            </div>
          </Link>
          {idx != locales.length - 1 && <span style={{ margin: '0 20px', color: '#9DA5AE' }}>|</span>}
        </div>
      ))}
    </div>
  );
};
