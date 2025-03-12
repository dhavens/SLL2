document.addEventListener("DOMContentLoaded", function () {
  // Tab functionality for framework page
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active classes
      tabButtons.forEach((b) => b.classList.remove("active"));
      tabPanes.forEach((pane) => pane.classList.remove("active"));

      // Activate clicked tab and corresponding pane
      this.classList.add("active");
      const tabId = this.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });
});
