function changeStream(url) {
    const player = document.getElementById('main-player');
    // We add autoplay parameters if the provider supports them
    player.src = url;
}

function toggleFullscreen() {
    const player = document.getElementById('main-player');
    if (player.requestFullscreen) {
        player.requestFullscreen();
    } else if (player.webkitRequestFullscreen) { /* Safari */
        player.webkitRequestFullscreen();
    } else if (player.msRequestFullscreen) { /* IE11 */
        player.msRequestFullscreen();
    }
}