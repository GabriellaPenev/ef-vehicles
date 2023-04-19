export function Header() {
    return (
        <header
            style={{ zIndex: 100 }}
            className="bg-white top-0 position-sticky">
            <div className="pt-3 pb-2 px-3 d-flex justify-content-between flex-wrap">
                <a href="https://efleet.netlify.app/" rel="noopener noreferrer">
                    <img src="/images/eflogo.png" alt="Element Fleet Logo" height="50" />
                </a>
                <h1 className="fw-bolder mb-0 py-1">Fleet Management Solutions</h1>
            </div>
        </header>
    )
}