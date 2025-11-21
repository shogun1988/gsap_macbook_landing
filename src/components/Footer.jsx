import {footerLinks} from "../constants/index.js";


const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="info">
                <p>More ways to shop: Find an Apple Store or other retailer near you. Or call 000800 040 1966.</p>
                <img src="/logo.svg" alt="Apple logo" />
            </div>

            <hr />

            <div className="links">
                <p>Copyright © {year} Apple Inc. All rights reserved.</p>

                <ul>
                    {footerLinks.map(({ label, link }) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <button
                type="button"
                className="scroll-to-top"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Scroll to top"
                style={{
                    position: 'fixed',
                    right: 20,
                    bottom: 20,
                    padding: '0.6rem 0.8rem',
                    borderRadius: '999px',
                    border: 'none',
                    background: '#000',
                    color: '#fff',
                    cursor: 'pointer',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                    zIndex: 9999
                }}
            >
                ↑
            </button>
        </footer>
    )
}
export default Footer
