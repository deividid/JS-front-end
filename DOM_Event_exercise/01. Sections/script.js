function create(words) {
   console.log('TODO:...');

   const thisDiv = document.getElementById('content');

   words.forEach((word) => {
      const newDiv = document.createElement('div');
      const createContent = document.createElement('p');
      createContent.textContent = word;
      createContent.style.display = 'none';
      newDiv.appendChild(createContent);

      newDiv.addEventListener('click', (e) => {
         e.currentTarget.children[0].style.display = 'block';

      })


      thisDiv.appendChild(newDiv);
   })
}