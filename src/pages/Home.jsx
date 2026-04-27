import { useState, useEffect } from "react";
import { searchGames, getGameDetails, getTrendingGames } from "../services/api";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import MyNavbar from "../components/Navbar";
import "../styles/cards.css";




export default function Home() {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            const data = await getTrendingGames();
            setGames(data);
        };

        fetchGames();
    }, []);

    useEffect(() => {
        const delay = setTimeout(() => {
            handleSearch();
        }, 500);
        return () => clearTimeout(delay);
    }, [query]);




    const handleSearch = async () => {
        if (!query.trim()) {
            const data = await getTrendingGames();
            setGames(data);
            return;
        }
        const results = await searchGames(query);
        setGames(results);
    };

    return (
        <>
            <MyNavbar
                query={query}
                setQuery={setQuery}
                onSearch={handleSearch}
            />

            <Container fluid className="bg-dark text-white min-vh-100 p-4">
                <Row>
                    {games.map((game) => (
                        <Col key={game.id} xs={6} md={4} lg={3} xl={2} className="mb-4">
                            <div className="ig-card"
                                onClick={() => navigate(`/game/${game.id}`)}
                            >


                                <img
                                    src={game.background_image || "https://placeholder.co/300x200"}
                                    alt={game.name}
                                    className="ig-card-img"
                                />


                                <div className="ig-discount">
                                    -{Math.floor(Math.random() * 60) + 10}%
                                </div>


                                <div className="ig-card-info">
                                    <p className="ig-title">{game.name}</p>
                                    <span className="ig-price">
                                        {(Math.random() * 50).toFixed(2)}€
                                    </span>
                                </div>

                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}