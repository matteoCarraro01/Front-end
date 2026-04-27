import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getGameDetails } from "../services/api";
import MyNavbar from "../components/Navbar";

export default function GameDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [game, setGame] = useState(null);

    useEffect(() => {
        const fetchGames = async () => {
            const data = await getGameDetails(id);
            setGame(data);
        };

        fetchGames();
    }, [id]);

    if (!game) return <p style={{ padding: "20px" }}>Loading...</p>;

    return (
        <>
            <MyNavbar />

            <div className="detail-container" style={{ padding: "20px" }}>
                {/* BACK */}
                <button className="back-btn" onClick={() => navigate(-1)}>
                    ← Indietro
                </button>

                <h1>{game.name}</h1>

                <div className="detail-grid">

                    {/* LEFT - IMAGE */}
                    <div className="detail-left">
                        <img
                            src={game.background_image}
                            alt={game.name}
                            className="detail-img"
                        />
                    </div>

                    {/* RIGHT - INFO */}
                    <div className="detail-right">

                        <p className="rating">⭐ {game.rating} / 5</p>

                        <p className="price">
                            {(Math.random() * 50).toFixed(2)}€
                        </p>

                        <button className="cart-btn">
                            🛒 Aggiungi al carrello
                        </button>

                        <div
                            className="description"
                            dangerouslySetInnerHTML={{ __html: game.description }}
                        />

                    </div>

                </div>
            </div>


        </>
    )
}