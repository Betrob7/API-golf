async function fetchPlayers() {
    try {let response = await fetch('https://api.sportsdata.io/golf/v2/json/Rankings/2025?key=7b5134f339b8458e8c5b7bd3e242fd69');
        if(!response.ok) {
            throw new Error('Something went wrong');
        }
        let data = await response.json();
        let top200 = data.slice(0, 200);
        console.log(top200);
        
        return top200;
        
    } catch (error) {
        console.log(error.message);
        return [];
        
    }
}

export {fetchPlayers};