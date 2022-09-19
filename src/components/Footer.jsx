import cl from './Footer.module.css'

export default function Footer () {
    return (
        <footer className={cl.footer}>
            <a href='https://bobrarium.ru/cv/' target='blank'><div className={cl.signature}>Made by Klyukin Mikhail</div></a>
        </footer>
    )
}