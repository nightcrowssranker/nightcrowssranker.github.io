function calculateRespawn() {
    const spawnTime = document.getElementById('spawnTime').value;
    const respawnInterval = document.getElementById('respawnInterval').value;
    const resultElement = document.getElementById('result');

    if (!spawnTime || !respawnInterval) {
        resultElement.innerText = 'Please enter both spawn time and respawn interval.';
        return;
    }

    const [hours, minutes] = spawnTime.split(':');
    const spawnDate = new Date();
    spawnDate.setHours(hours, minutes, 0, 0);

    const respawnDate = new Date(spawnDate.getTime() + respawnInterval * 60000);

    const formattedTime = respawnDate.toTimeString().split(' ')[0];
    resultElement.innerText = `Next Respawn Time: ${formattedTime}`;
}
