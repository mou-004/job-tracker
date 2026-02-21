console.log("machine loaded");

/* ===== GET ELEMENTS ===== */
let interviewCountEl = document.getElementById("interviewcount");
let rejectCountEl = document.getElementById("rejectcount");
let totalCountEl = document.getElementById("totalcount");

let allBtn = document.getElementById("allbtn");
let interviewBtn = document.getElementById("interviewbtn");
let rejectBtn = document.getElementById("rejectbtn");

let emptyState = document.getElementById("emptyState");

/* ===== UPDATE DASHBOARD ===== */
function updateDashboard() {
  let interview = 0;
  let rejected = 0;
  let total = 0;

  let cards = document.querySelectorAll(".border");

  for (let i = 0; i < cards.length; i++) {
    total++;

    let statusText = cards[i].querySelector("span").innerText;

    if (statusText === "Interview") {
      interview++;
    }

    if (statusText === "Rejected") {
      rejected++;
    }
  }

  totalCountEl.innerText = total;
  interviewCountEl.innerText = interview;
  rejectCountEl.innerText = rejected;
}

/* ===== FILTER JOBS ===== */
function filterJobs(type) {
  let visible = 0;
  let cards = document.querySelectorAll(".border");

  for (let i = 0; i < cards.length; i++) {
    let statusText = cards[i].querySelector("span").innerText;

    if (type === "all") {
      cards[i].style.display = "block";
      visible++;
    } else if (statusText === type) {
      cards[i].style.display = "block";
      visible++;
    } else {
      cards[i].style.display = "none";
    }
  }

  if (visible === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }
}

/* ===== INTERVIEW BUTTON ===== */
let interviewButtons = document.querySelectorAll(".btn-success");

for (let i = 0; i < interviewButtons.length; i++) {
  interviewButtons[i].addEventListener("click", function () {
    let card = this.closest(".border");
    let statusSpan = card.querySelector("span");

    if (statusSpan.innerText === "Interview") {
      return;
    }

    statusSpan.innerText = "Interview";
    updateDashboard();
  });
}

/* ===== REJECT BUTTON ===== */
let rejectButtons = document.querySelectorAll(".btn-error");

for (let i = 0; i < rejectButtons.length; i++) {
  rejectButtons[i].addEventListener("click", function () {
    let card = this.closest(".border");
    let statusSpan = card.querySelector("span");

    if (statusSpan.innerText === "Rejected") {
      return;
    }

    statusSpan.innerText = "Rejected";
    updateDashboard();
  });
}

/* ===== DELETE BUTTON ===== */
let deleteButtons = document.querySelectorAll(".absolute");

for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", function () {
    let card = this.closest(".border");

    card.remove();
    updateDashboard();

    if (!interviewBtn.classList.contains("btn-outline")) {
      filterJobs("Interview");
    } else if (!rejectBtn.classList.contains("btn-outline")) {
      filterJobs("Rejected");
    } else {
      filterJobs("all");
    }
  });
}

/* ===== TAB BUTTONS ===== */
allBtn.addEventListener("click", function () {
  filterJobs("all");
});

interviewBtn.addEventListener("click", function () {
  filterJobs("Interview");
});

rejectBtn.addEventListener("click", function () {
  filterJobs("Rejected");
});

/* ===== DEFAULT LOAD ===== */
filterJobs("all");
updateDashboard();