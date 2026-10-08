import Section from '../../components/Section/Section';
import { contacts } from '../../data/contacts';
import styles from './Contact.module.css';

function Contact() {
    return (
        <Section id="contact" title="Contact" variant="alt">
            <p className={styles.intro}>Feel free to get in touch!</p>

            <ul className={styles.contactList}>
                {contacts.map((contact) => {
                    const isExternal = contact.href.startsWith('http');

                    return (
                        <li key={contact.label} className={styles.contactItem}>
                            <span className={styles.contactLabel}>
                                {contact.label}
                            </span>
                            <a
                                className={styles.contactValue}
                                href={contact.href}
                                target={isExternal ? '_blank' : undefined}
                                rel={
                                    isExternal
                                        ? 'noopener noreferrer'
                                        : undefined
                                }
                            >
                                {contact.value}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </Section>
    );
}

export default Contact;
