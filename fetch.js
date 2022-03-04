import fetch from "node-fetch";

async function getWithFetch() {
    const res = await fetch(
        "https://622108eeafd560ea69a58cbf.mockapi.io/Users");
        const finalRes = await res.json();
        console.log(finalRes);
}

getWithFetch()