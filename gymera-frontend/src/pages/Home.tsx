export default function Home() {
    return (
        <>
            <nav className='navbar'>
                <div className='nav-container'>
                    <div className='logo-container'>
                        <img src="/gymeraLogo.png" alt="GymEra Logo" className='logo' />
                        <h2 className='brand-name'>GymEra</h2>
                    </div>

                    <ul className='nav-links'>
                        <li><a href="/login">Log in</a></li>
                        <li><a href="/register">Get Started</a></li>
                    </ul>
                </div>
            </nav>

            {/* Hero Section */}
            <div className='hero'>
                <div style={{ maxWidth: "900px" }}>
                    <h1 style={{ fontSize: "56px", marginBottom: "10px", fontWeight: "800", color: "#e5e7eb" }}>Welcome to the GymEra</h1>
                    <h2 style={{ fontSize: "30px", marginBottom: "20px", color: "#22c55e", fontWeight: "600" }}>The New Era of Beginner Fitness</h2>
                    <p style={{
                        fontSize: "18px",
                        color: "#cbd5f5",
                        marginBottom: "6px"
                    }}>
                        Stop wasting money on random equipment.
                    </p>
                    <p style={{
                        fontSize: "18px",
                        color: "#cbd5f5",
                        marginBottom: "32px"
                    }}>
                        Start with what actually works.
                    </p>
                    <div className='button'>
                        <button style={{ backgroundColor: "#22c55e", border: "none", marginRight: "15px" }}>
                            🟢 Shop Beginner Essentials
                        </button>
                        <button style={{ backgroundColor: "transparent", border: "2px solid #22c55e", color: "#22c55e" }}>
                            🔥 Start Strong Today
                        </button>
                    </div>
                </div>
            </div >
            <span className='hero'>
                <div >
                    <h2 style={{ fontSize: "46px", marginBottom: "20px", color: "#bb5a15", fontWeight: "600" }}>The Beginner Problem</h2>
                    <h3 style={{ fontSize: "20px", marginBottom: "10px", fontWeight: "800", color: "#e5e7eb" }}>Starting the gym feels confusing</h3>
                    <p style={{
                        fontSize: "18px",
                        color: "#cbd5f5",
                        marginTop: "10px"
                    }}>
                        Too many products
                    </p>
                    <p style={{
                        fontSize: "18px",
                        color: "#cbd5f5",
                    }}>
                        Too much advice
                    </p>
                    <p style={{
                        fontSize: "18px",
                        color: "#cbd5f5",
                        marginBottom: "10px"
                    }}>
                        Too much pressure
                    </p>
                    <h4 style={{ fontSize: "18px", marginBottom: "10px", fontWeight: "800", color: "#e5e7eb" }}>You don&apos;t need:</h4>
                    <p style={{
                        fontSize: "18px",
                        color: "#cbd5f5",
                        marginTop: "10px"
                    }}>
                        ❌ Expensive machines
                    </p>
                    <p style={{
                        fontSize: "18px",
                        color: "#cbd5f5"
                    }}>
                        ❌ Fancy supplements
                    </p>
                    <p style={{
                        fontSize: "18px",
                        color: "#cbd5f5",
                        marginBottom: "10px"
                    }}>
                        ❌ Complicated setups
                    </p>
                    <h4 style={{ fontSize: "18px", marginBottom: "10px", fontWeight: "800", color: "#e5e7eb" }}>You need:</h4>
                    <p style={{
                        fontSize: "18px",
                        color: "#cbd5f5",
                        marginTop: "10px"
                    }}>
                        ✅ The right basics
                    </p>
                    <p style={{
                        fontSize: "18px",
                        color: "#cbd5f5",
                    }}>
                        ✅ Budget-friendly gear
                    </p>
                    <p style={{
                        fontSize: "18px",
                        color: "#cbd5f5",
                        marginBottom: "10px"
                    }}>
                        ✅ Confidence to start
                    </p>
                    <br />
                    <br />
                    <br />
                    <p style={{ fontSize: "32px", marginBottom: "10px", fontWeight: "800", color: "#e5e7eb" }}>That&apos;s why GymEra exists.</p>
                </div>
            </span>
        </>
    )
}