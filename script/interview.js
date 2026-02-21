console.log("interview script loaded");

const interviewCountEl = document.getElementById("interviewcount");

document.querySelectorAll(".btn-success").forEach((btn) => {
  btn.addEventListener("click", () => {
    // find the card
    const card = btn.closest(".border");

    // not applied span
    const statusSpan = card.querySelector("span");

    // double count
    if (statusSpan.innerText === "Interview") return;

    // text change
    statusSpan.innerText = "Interview";

    // count++
    interviewCountEl.innerText =
      Number(interviewCountEl.innerText) + 1;
  });
});