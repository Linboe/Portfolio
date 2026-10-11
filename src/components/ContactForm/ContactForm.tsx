import { useState } from 'react';
import type { ChangeEvent, SubmitEvent } from 'react';
import styles from './ContactForm.module.css';

type FormValues = {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
};

type FieldName = keyof FormValues;
type FormErrors = Partial<Record<FieldName, string>>;

type FieldConfig = {
    readonly name: FieldName;
    readonly label: string;
    readonly type: 'text' | 'email' | 'tel' | 'textarea';
    readonly autoComplete?: string;
};

const FIELDS: readonly FieldConfig[] = [
    { name: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
    { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
    { name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel' },
    { name: 'subject', label: 'Subject', type: 'text' },
    { name: 'message', label: 'Message', type: 'textarea' },
];

const INITIAL_VALUES: FormValues = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
};

function validate(values: FormValues): FormErrors {
    const errors: FormErrors = {};

    for (const { name, label } of FIELDS) {
        if (values[name].trim() === '') {
            errors[name] = `${label} is required`;
        }
    }

    return errors;
}

function ContactForm() {
    const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSent, setIsSent] = useState(false);

    function handleChange(
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) {
        const name = e.target.name as FieldName;
        const { value } = e.target;

        setValues((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
        setIsSent(false);
    }

    function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        const newErrors = validate(values);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setValues(INITIAL_VALUES);
            setIsSent(true);
        } else {
            setIsSent(false);
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {FIELDS.map(({ name, label, type, autoComplete }) => {
                const error = errors[name];
                const errorId = `${name}-error`;
                const commonProps = {
                    id: name,
                    name,
                    value: values[name],
                    onChange: handleChange,
                    className: styles.input,
                    autoComplete,
                    'aria-invalid': error ? true : undefined,
                    'aria-describedby': error ? errorId : undefined,
                };

                return (
                    <div key={name} className={styles.field}>
                        <label htmlFor={name} className={styles.label}>
                            {label}
                        </label>

                        {type === 'textarea' ? (
                            <textarea rows={5} {...commonProps} />
                        ) : (
                            <input type={type} {...commonProps} />
                        )}

                        {error && (
                            <p id={errorId} className={styles.error}>
                                {error}
                            </p>
                        )}
                    </div>
                );
            })}

            <button type="submit" className={styles.submit}>
                Send
            </button>

            {isSent && (
                <p className={styles.success} role="status">
                    Thanks! Your email has been sent.
                </p>
            )}
        </form>
    );
}

export default ContactForm;
