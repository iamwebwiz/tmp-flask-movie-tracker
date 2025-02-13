document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".add-to-watchlist").forEach((button) => {
    button.addEventListener("click", function () {
      let form = this.closest(".add-to-watchlist-form");
      let title = form.dataset.title;
      let year = form.dataset.year;
      let poster = form.dataset.poster;

      fetch("/watchlist/add", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `title=${encodeURIComponent(title)}&year=${encodeURIComponent(year)}&poster=${encodeURIComponent(
          poster
        )}`,
      }).then((response) => {
        if (response.ok) {
          this.textContent = "Added ✅";
          this.disabled = true;
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".mark-watched").forEach((button) => {
    button.addEventListener("click", function () {
      let movieId = this.dataset.movieId;

      fetch(`/watchlist/mark_watched/${movieId}`, { method: "POST" })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            this.parentElement.innerHTML = "<p class='text-success'><strong>✅ Watched</strong></p>";
          }
        });
    });
  });
});
