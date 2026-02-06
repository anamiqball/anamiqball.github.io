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
