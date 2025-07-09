import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const NavItem = ({ NavIcon, NavText, NavRoute, setIsOpen }) => {
    const router = useRouter()
    const isActive = router.asPath === NavRoute

    // Translation mapping for nav items
    const getTranslatedText = (text) => {
        const translations = {
            'Home': 'home',
            'Career & Education': 'background',
            'My Projects': 'portfolio',
            'Contact': 'contact'
        }
        return translations[text] || text
    }

    return (
        <Link
            href={NavRoute}
            onClick={() => setIsOpen(false)}
            className={`
                flex items-center gap-x-3 px-4 py-3 rounded-lg 
                transition-all duration-300 cursor-pointer
                text-sm font-medium tracking-wide
                ${isActive
                    ? 'bg-Green text-DeepNightBlack shadow-[0_0_12px_#1fdf64] font-bold'
                    : 'text-white hover:bg-white/10 hover:text-Green'}
            `}
        >
            <span className="text-xl">{NavIcon}</span>
            <span>{getTranslatedText(NavText)}</span>
        </Link>
    )
}

export default NavItem