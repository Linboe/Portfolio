import Section from '../../components/Section/Section';
import { contacts } from '../../data/contacts';
import styles from './Contact.module.css';

const ICON_SIZE = 24;

const isExternalLink = (href: string): boolean => /^https?:\/\//i.test(href);

function Contact() {
    return (
        <Section id="contact" title="Contact" variant="alt">
            <p className={styles.intro}>Feel free to get in touch!</p>

            <ul className={styles.contactList} aria-label="Contact links">
                {contacts.map(({ label, icon: Icon, href }) => {
                    const external = isExternalLink(href);

                    return (
                        <li key={href}>
                            <a
                                className={styles.contactLink}
                                href={href}
                                aria-label={
                                    external
                                        ? `${label} (opens in a new tab)`
                                        : label
                                }
                                {...(external
                                    ? {
                                          target: '_blank',
                                          rel: 'noopener noreferrer',
                                      }
                                    : {})}
                            >
                                <Icon size={ICON_SIZE} aria-hidden="true" />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </Section>
    );
}

export default Contact;
