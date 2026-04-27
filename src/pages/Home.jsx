import { useState } from "react";
import { searchGames } from "../services/api";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import MyNavbar from "../components/Navbar";
import "../styles/cards.css";




export default function Home() {
    const [query, setQuery] = useState("");
    const [games, setGames] = useState([]);

    const handleSearch = async () => {
        try {
            const results = await searchGames(query);
            setGames(results);
        } catch (err) {
            console.log(err);
        }
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
                        <Col key={game.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                            <Card className="bg-dark text-white border-0 h-100 shadow">
                                <Card.Img
                                    variant="top"
                                    src={
                                        game.background_image ||
                                        "https://via.placeholder.com/300"
                                    }
                                    style={{ height: "180px", objectFit: "cover" }}
                                />

                                <Card.Body>
                                    <Card.Title style={{ fontSize: "14px" }}>
                                        {game.name}
                                    </Card.Title>

                                    <Button variant="warning" size="sm">
                                        Aggiungi al carrello
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}