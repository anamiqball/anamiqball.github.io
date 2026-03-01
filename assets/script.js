// Highlight the active tab based on a data attribute on <body>
(function () {
  const page = document.body.getAttribute("data-page");
  if (!page) return;
  document.querySelectorAll(".tab").forEach(a => {
    if (a.getAttribute("data-tab") === page) a.classList.add("active");
  });

  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

// Project tag filter
(function () {
  const btns = document.querySelectorAll(".filter-btn");
  if (!btns.length) return;
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      document.querySelectorAll(".item[data-tags]").forEach(item => {
        if (filter === "all") {
          item.classList.remove("hidden");
        } else {
          const tags = item.dataset.tags.split(",").map(t => t.trim());
          item.classList.toggle("hidden", !tags.includes(filter));
        }
      });
    });
  });
})();
