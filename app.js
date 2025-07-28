document.addEventListener('DOMContentLoaded', () => {
    const compareButton = document.getElementById('compare');
    const p1Input = document.getElementById('p1_name');
    const p2Input = document.getElementById('p2_name');

    compareButton.addEventListener('click', () => {
        const player1Name = p1Input.value.trim();
        const player2Name = p2Input.value.trim();

        if (player1Name === '' || player2Name === '') {
            alert('Please enter names for both players.');
            return;
        }

        // confirm who is compared
        console.log(`Comparing ${player1Name} vs ${player2Name}`);
        alert(`Comparing ${player1Name} vs ${player2Name}`);
    });
});