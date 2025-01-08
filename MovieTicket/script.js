const seats = document.querySelectorAll('.seat.available');
const ticketCount = document.getElementById('ticket-count');
const totalPrice = document.getElementById('total-price');
const ticketPrice = 10;

seats.forEach(seat => {
    seat.addEventListener('click', () => {
        // Toggle selected class on click
        seat.classList.toggle('selected');
        updateSummary();
    });
});

function updateSummary() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    const selectedCount = selectedSeats.length;

    // Update the ticket count and total price
    ticketCount.textContent = selectedCount;
    totalPrice.textContent = `$${selectedCount * ticketPrice}`;
}
