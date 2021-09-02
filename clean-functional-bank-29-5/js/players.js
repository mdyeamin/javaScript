function setPlayerStyle(player) {
    player.style.border = '1px solid red';
    player.style.borderRadius = '15px';
    player.style.margin = '10px';
    player.style.padding = '10px';
}
const players = document.getElementsByClassName('player');

for (const player of players) {
    setPlayerStyle(player);
    // player.addEventListener('click', function () {
    //     player.style.backgroundColor = 'yellow'
    // })
}
function addPlayer() {
    const playerContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">new player</h4>
<p>Reprehenderit minus exercitationem quos ad consequatur fugiat quae odit eius deserunt explicabo libero illo pariatur at suscipit, deleniti consequuntur neque rem, consectetur       nisi voluptates tempora voluptatum. Sint, suscipit velit! Distinctio.</p>
    `;
    setPlayerStyle(player);
    playerContainer.appendChild(player);
    // player.addEventListener('click', function () {
    //     player.style.backgroundColor = 'yellow'
    // })
}
document.getElementById('players').addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'yellow'
    }
    else {
        event.target.parentNode.style.backgroundColor = 'yellow';
    }
})