const seatsContainer = document.querySelector(".seat-container");
const count = document.querySelector("#count");
const total = document.querySelector("#total");
const movieSelect = document.querySelector("#movieSelect");

let ticketPrice = Number(movieSelect.value);

seatsContainer.addEventListener("click", modifySeatSelection);

function modifySeatSelection(event) {
  const clickedElement = event.target;
  if (
    clickedElement.classList.contains("seat") &&
    !clickedElement.classList.contains("occupied")
  ) {
    clickedElement.classList.toggle("selected");
  }
  updateTotalPrice();
}

function updateTotalPrice() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const numberOfTickets = selectedSeats.length;

  count.innerHTML = numberOfTickets;
  total.innerHTML = numberOfTickets * ticketPrice;
}

movieSelect.addEventListener("change", changeMovieSelection);

function changeMovieSelection(event) {
  ticketPrice = Number(event.target.value);
  updateTotalPrice();
}
