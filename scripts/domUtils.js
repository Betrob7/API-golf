function displayResults(players) {
    let resultsMain = document.querySelector('#resultsMain');
    resultsMain.textContent = '';

    if(players.length === 0) {
        let errorRef = document.createElement('p');
        errorRef.textContent = 'Ingen spelare hittades!';
        resultsMain.appendChild(errorRef);
        return;
    }
    
    for(let player of players) {
        let playerRef = document.createElement('article');
        playerRef.classList.add('player-card');
        playerRef.innerHTML = `
        <h2>${player.Name}</h2>
        <p>Säsong: ${player.Season}</p>
        <p>Events: ${player.Events}
        <p>Total poäng: ${player.TotalPoints}
        <p>Ranking: ${player.WorldGolfRank + 1}`
        resultsMain.appendChild(playerRef);
    }
}

export {displayResults};