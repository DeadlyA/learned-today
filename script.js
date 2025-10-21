const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

factsList.innerHTML = "";

async function loadFacts() {
  const res = await fetch(
    "https://toulnlwitnjrvwdbbbne.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvdWxubHdpdG5qcnZ3ZGJiYm5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5OTcyMTksImV4cCI6MjA3NjU3MzIxOX0.aAC5-koWGjUrmu2QfQMPXjnVR6lxXgE2mWKJg8LyPF0",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvdWxubHdpdG5qcnZ3ZGJiYm5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5OTcyMTksImV4cCI6MjA3NjU3MzIxOX0.aAC5-koWGjUrmu2QfQMPXjnVR6lxXgE2mWKJg8LyPF0",
      },
    }
  );
  const data = await res.json();
  createFactsList(data);
}

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) =>
      `<li class="fact">
    <p>
    ${fact.text}
    <a class="source"
    href="${fact.source}"
    target="_blank"
    >(Source)</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((category) => category.name === fact.category).color
    } ">${fact.category}</span>
              <div class="vote-buttons">
              <button>👍 ${fact.votesInteresting}</button>
              <button>🤯 ${fact.votesMindblowing}</button>
              <button>⛔️ ${fact.votesFalse}</button>
              </div></li>`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

btn.addEventListener("click", function () {
  form.classList.toggle("hidden");
  if (form.classList.contains("hidden")) {
    btn.textContent = "Share a fact";
  } else {
    btn.textContent = "Close";
  }
});

loadFacts();
