import { fetchPlayers } from "./api.js";
import { displayResults } from "./domUtils.js";
async function searchListener(search) {
    document.querySelector('#searchForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        
        let searchInput = document.querySelector('#playerName')
        let playerName = document.querySelector('#playerName').value.toLowerCase();
        if (!playerName) return;
    
        let players = await fetchPlayers();
        let matchedPlayers = players.filter(player => //.filter skapar en ny array där bara spelare som uppfyller villkoret finns kvar
        player.Name.toLowerCase().includes(playerName)) 
        
        
        displayResults(matchedPlayers);
        searchInput.value = '';
    })
    
    
}

export {searchListener};