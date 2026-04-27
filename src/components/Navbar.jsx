import { Container } from "react-bootstrap";
import "../styles/navbar.css";



export default function MyNavbar({ query, setQuery, onSearch }) {
    return (
        <div className="ig-navbar">
            <Container className="ig-navbar-inner">

                {/* LEFT */}
                <div className="ig-left">
                    <span className="ig-logo">GameStore</span>
                    <div className="ig-menu">
                        <span>PC</span>
                        <span>PlayStation</span>
                        <span>Xbox</span>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="ig-right">
                    <input
                        type="text"
                        placeholder="Cerca giochi..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="ig-search"
                    />

                    <button className="ig-search-btn" onClick={onSearch}>
                        Cerca
                    </button>

                    <span className="ig-icon">🛒</span>
                    <span className="ig-icon">👤</span>
                </div>

            </Container>
        </div>
    );
}