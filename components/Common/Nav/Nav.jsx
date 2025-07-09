import { ImCross } from 'react-icons/im'
import { FiAward } from 'react-icons/fi'
import { FaHandshake } from 'react-icons/fa'
import { ImHome } from 'react-icons/im'
import { HiIdentification } from 'react-icons/hi'
import NavItem from './NavItem'
import DrawerLayout from '../DrawerLayout'

const Nav = ({ setIsOpen, isOpen }) => {
    return (
        <DrawerLayout setIsOpen={setIsOpen} isOpen={isOpen}>
            <div className={`
                fixed top-0 right-0 z-50 flex flex-col 
                w-64 h-screen md:rounded-xl md:overflow-hidden
                bg-gradient-to-br from-[#1a1a1a] via-[#2e2e2e] to-[#121212] shadow-2xl
                border border-white/20
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                lg:mt-3 lg:mr-3 lg:h-[96%]
            `}>
                {/* Close Button */}
                <div 
                    onClick={() => setIsOpen(false)}
                    className="flex text-white hover:text-Green absolute top-0 w-full items-center justify-start pl-6 text-sm h-10 bg-white/5 backdrop-blur-md border-b border-white/10 cursor-pointer"
                >
                    <ImCross />
                </div>

                {/* Nav Items */}
                <div className="flex flex-col gap-y-3 px-6 mt-12 w-full">
                    <NavItem setIsOpen={setIsOpen} NavRoute="/" NavIcon={<ImHome />} NavText="Home" />
                    <NavItem setIsOpen={setIsOpen} NavRoute="/background" NavIcon={<HiIdentification />} NavText="Career & Education" />
                    <NavItem setIsOpen={setIsOpen} NavRoute="/portfolio" NavIcon={<FiAward />} NavText="My Projects" />
                    <NavItem setIsOpen={setIsOpen} NavRoute="/contact" NavIcon={<FaHandshake />} NavText="Contact" />
                </div>
            </div>
        </DrawerLayout>
    )
}

export default Nav
