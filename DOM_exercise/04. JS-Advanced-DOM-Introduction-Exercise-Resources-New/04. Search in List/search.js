function search() {
   const towns = document.getElementById('towns').children;
   const searchedText = document.getElementById('searchText');
   const results = document.getElementById('result');

   let matches = [];
   for (let i = 0; i < towns.length; i ++) {
      if (towns[i].textContent.toLowerCase().includes(searchedText.value.toLowerCase())) {
         matches.push(i);
      }
   }

   results.textContent = `${matches.length} matches found`;

   for (let m of matches) {
      
      towns[Number(m)].style.fontWeight = 'bold';
      towns[Number(m)].style.textDecoration = 'underline';
   }
}
