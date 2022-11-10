import styles from "./Menu.module.css";

export const Menu = () => {
    const texts = [
        'Our Products',
        'Privacy Terms',
        'Twitter',
        'Facebook',
        'Email'
    ]
    return (
        <ul className={styles.footer_nav_list}>
            {texts.map((text) => {
                return <li key={text} className={styles.footer_nav_list_item}>
                    <a href="client/src/components/Menu/Menu#">{text}</a>
                </li>
            })}
        </ul>
    )
}

