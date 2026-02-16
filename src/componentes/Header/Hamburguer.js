export default function Hamburger({ isOpen = false }) {
    return (
        <>
            <div className={`hamburger ${isOpen ? 'open' : ''}`}>
                <div className="burger burger1"></div>
                <div className="burger burger2"></div>
                <div className="burger burger3"></div>
            </div>

            <style jsx>{`
                .hamburger {
                    width: 2rem;
                    height: 2rem;
                    display: flex;
                    justify-content: space-around;
                    flex-flow: column nowrap;
                    z-index: 10;
                    cursor: pointer;
                }

                .burger {
                    width: 2rem;
                    height: 0.25rem;
                    border-radius: 10px;
                    background-color: #333;
                    transform-origin: 1px;
                    transition: all 0.3s ease;
                }

                .hamburger.open .burger1 {
                    transform: rotate(45deg);
                }

                .hamburger.open .burger2 {
                    opacity: 0;
                    transform: translateX(100%);
                }

                .hamburger.open .burger3 {
                    transform: rotate(-45deg);
                }

                .hamburger:hover .burger {
                    background-color: #F684FF;
                }
            `}</style>
        </>
    )
}