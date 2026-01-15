async function includePartials() {
  const targets = document.querySelectorAll("[data-include]");
  await Promise.all([...targets].map(async (el) => {
    const file = el.getAttribute("data-include");
    const res = await fetch(file);
    el.innerHTML = res.ok ? await res.text() : "<!-- include failed -->";
  }));
}
document.addEventListener("DOMContentLoaded", includePartials);