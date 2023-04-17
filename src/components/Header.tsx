export function Header() {
    return (
        <header
            style={{ zIndex: 100 }}
            className="bg-white top-0 position-sticky" >
            <div className="py-5 d-flex justify-content-between flex-wrap">
                <img src="../public/images/ef_logo.png" alt="Element Fleet Logo" height="50" />
                <h1 className="fw-bolder mb-0 py-1">Fleet Management Solutions</h1>
            </div>
        </header>
    )
}