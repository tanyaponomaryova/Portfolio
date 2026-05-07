document.addEventListener('DOMContentLoaded', () => {
  // #region NAV
  fetch('../components/nav.html')
    .then((res) => res.text())
    .then((data) => {
      document.getElementById('nav-placeholder').innerHTML = data;
    });
  // #endregion

  // #region FOOTER
  fetch('../components/footer.html')
    .then((res) => res.text())
    .then((data) => {
      document.getElementById('footer-placeholder').innerHTML = data;
    });
  // #endregion
});
