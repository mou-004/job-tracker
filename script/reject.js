console.log("rejected script loaded");

const rejectCountEl = document.getElementById("rejectcount");

document.querySelectorAll(".btn-error").forEach((btn) => {
  btn.addEventListener("click", () => {
    // card
    const card = btn.closest(".border");

    // not applied span
    const statusSpan = card.querySelector("span");

    //  double count
    if (statusSpan.innerText === "Rejected") return;

    // text change
    statusSpan.innerText = "Rejected";

    //  count ++
    rejectCountEl.innerText =
      Number(rejectCountEl.innerText) + 1;
  });
});