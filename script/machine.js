console.log("machine loaded");

const interviewCountEl = document.getElementById("interviewcount");
const rejectCountEl = document.getElementById("rejectcount");
const totalCountEl = document.getElementById("totalcount");

const allBtn = document.getElementById("allbtn");
const interviewTabBtn = document.getElementById("interviewbtn");
const rejectTabBtn = document.getElementById("rejectbtn");

const emptyState = document.getElementById("emptyState");

function updateDashboard() {
  let interview = 0;
  let rejected = 0;
  let total = 0;

  const cards = document.querySelectorAll(".border");

  cards.forEach((card) => {
    total++;

    const status = card.querySelector("span").innerText;

    if (status === "Interview") interview++;
    if (status === "Rejected") rejected++;
  });

  totalCountEl.innerText = total;
  interviewCountEl.innerText = interview;
  rejectCountEl.innerText = rejected;
}

function filterJobs(type) {
  let visible = 0;

  document.querySelectorAll(".border").forEach((card) => {
    const status = card.querySelector("span").innerText;

    if (type === "all") {
      card.style.display = "block";
      visible++;
    } else if (status === type) {
      card.style.display = "block";
      visible++;
    } else {
      card.style.display = "none";
    }
  });

  emptyState.classList.toggle("hidden", visible !== 0);
}

document.querySelectorAll(".btn-success").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".border");
    const statusSpan = card.querySelector("span");

    if (statusSpan.innerText === "Interview") return;

    statusSpan.innerText = "Interview";
    updateDashboard();
  });
});

document.querySelectorAll(".btn-error").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".border");
    const statusSpan = card.querySelector("span");

    if (statusSpan.innerText === "Rejected") return;

    statusSpan.innerText = "Rejected";
    updateDashboard();
  });
});

document.querySelectorAll(".absolute").forEach((deleteBtn) => {
  deleteBtn.addEventListener("click", () => {
    const card = deleteBtn.closest(".border");

    card.remove();

    updateDashboard();
    if (!interviewTabBtn.classList.contains("btn-outline")) {
      filterJobs("Interview");
    } else if (!rejectTabBtn.classList.contains("btn-outline")) {
      filterJobs("Rejected");
    } else {
      filterJobs("all");
    }
  });
});

allBtn.addEventListener("click", () => filterJobs("all"));
interviewTabBtn.addEventListener("click", () => filterJobs("Interview"));
rejectTabBtn.addEventListener("click", () => filterJobs("Rejected"));

filterJobs("all");
updateDashboard();