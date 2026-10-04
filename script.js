
/* ---------- Footer quotes ---------- */

const quotes = [
  "The man who never alters his opinion is like standing water, and breeds reptiles of the mind.",
  "quote_2",
];
let currentQuote = -1;
// Shows a random quote, never the same one twice in a row
function showRandomQuote() {
  const quoteEl = document.getElementById("random-quote");
  if (!quoteEl) return;
  let next;
  do {
    next = Math.floor(Math.random() * quotes.length);
  } while (quotes.length > 1 && next === currentQuote);
  currentQuote = next;
  quoteEl.textContent = quotes[currentQuote];
}
// Shows a first quote and connects the "Another quote" button
function initQuotes() {
  showRandomQuote();
  const button = document.getElementById("new-quote");
  if (button) button.addEventListener("click", showRandomQuote);
}


/* ---------- Night / day theme ---------- */

// Applies the visitor's saved choice; call it in the <head> to avoid a flash
function applySavedTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) document.documentElement.dataset.theme = saved;
  } catch (e) {}
}

function currentTheme() {
  return document.documentElement.dataset.theme ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

// Connects the dark / light button
function initThemeToggle() {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  function updateLabel() {
    toggle.textContent = currentTheme() === "dark" ? "light" : "dark";
  }

  toggle.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
    updateLabel();
  });

  updateLabel();
}
