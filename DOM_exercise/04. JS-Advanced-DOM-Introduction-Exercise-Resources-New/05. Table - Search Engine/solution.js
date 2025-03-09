function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const tableElements = document.querySelectorAll('table.container tbody tr');
      const searchValue = document.getElementById("searchField").value;

      function checkForMatches(checkValue) {
         return Array.from(tableElements).filter((row) => 
            row.textContent.toLowerCase().includes(checkValue.toLowerCase()));
      }

      function clearPrevious() {
         Array.from(tableElements).forEach((el) =>
             el.classList.remove('select'));
      }

      clearPrevious();

      const searchMatches = checkForMatches(searchValue);

      searchMatches.forEach((row) => row.classList.add('select'));

   }
}