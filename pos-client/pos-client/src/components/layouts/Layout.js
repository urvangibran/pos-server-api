import React from 'react'
import { useRouter } from 'next/router' // untuk mengetahui current path
import { MENU_LIST } from './constants'
import styles from "./index.module.css"

const Layout = ({ children }) => {
    const router = useRouter()

    // Re-usable component layout
    const handleChangePage = (path) => {
        router.push(path)
    }

    return (
        <main className={styles.layout}>
            <aside className={styles.sidebar}>
                <nav className={styles.sidebar__nav}>
                    <ul>
                        {MENU_LIST.map((menu, index) => {
                            return (
                                <li key={index}
                                    className={router.pathname === menu.path ? styles.active : ''}
                                    onClick={() => handleChangePage(menu.path)}
                                >
                                    {menu.name}
                                </li>)
                        })}
                    </ul>
                </nav>
            </aside>
            <section>
                {children}
            </section>
        </main>
    )
}

export default Layout;