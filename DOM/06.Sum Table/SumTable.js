function sumTable() {
    const recipe = document.querySelectorAll('table tr td:nth-child(2)');
    const sum = document.getElementById('sum');

    let totalSum = 0;

    for (i = 0; i < recipe.length - 1; i++) {

        totalSum += Number(recipe[i].textContent);
    } 
        
    

    sum.textContent = totalSum;
}