import { fetchPlayers } from "./api.js";
import { displayResults } from "./domUtils.js";
async function searchListener(search) {
    document.querySelector('#searchForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        
        let searchInput = document.querySelector('#playerName')
        let playerName = document.querySelector('#playerName').value.toLowerCase();
        if (!playerName) return;
    
        let players = await fetchPlayers();
        let matchedPlayers = players.filter(player => 
        player.Name.toLowerCase().includes(playerName)) // Matcha sökningen
        
        
        displayResults(matchedPlayers);
        searchInput.value = '';
    })
    
    
}

export {searchListener};