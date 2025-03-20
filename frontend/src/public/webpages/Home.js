import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
    const [homeMessage, setHomeMessage] = useState("Loading..."); // Correct use of useState

    useEffect(() => { // useEffect should not be assigned to a variable
        axios.get("http://localhost:4000/")
            .then((res) => setHomeMessage(res.data.message))
            .catch(() => setHomeMessage("Error fetching data"));
    }, []);

    return <h1>{homeMessage}</h1>;
}

export default Home;
