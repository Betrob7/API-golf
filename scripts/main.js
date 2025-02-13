import { fetchPlayers } from "./api.js";
import { searchListener } from "./eventHandlers.js";
import { displayResults } from "./domUtils.js";

document.addEventListener("DOMContentLoaded", () => {
    searchListener();
});


