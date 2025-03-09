function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const restaurants = document.querySelector('#inputs textarea').value;
      const bestRestaurant = document.querySelector('#bestRestaurant p');
      const workersInfo = document.querySelector('#workers p');

      let restFormat = restaurants.slice(1, restaurants.length - 2).split('",')
      console.log(restFormat);
      let allRestaurants = [];

      for (let r of restFormat) {
         let [name, employees] = r.split(' - ');
         name = name.slice(1);
         employees = employees.split(', ');
         
         check = true;

         let newRestaurant = {
            name: name,
            workers: {}
         }

         for (i = 0; i < employees.length; i ++) {
            let [empName, salary] = employees[i].split(' ');
            newRestaurant.workers[empName] = Number(salary);

         }

         for (let rest of allRestaurants) {
            if (name == rest.name) {
               for (let [key, value] of Object.entries(newRestaurant.workers)) {
                  rest.workers[key] = value;
               }
               check = false
            }
         }
         if (check == true) {

            allRestaurants.push(newRestaurant);

         }
      }

      let avgSalary = 0;
      let position = 0;
      let bestSalary = 0;

      for (let i = 0; i < allRestaurants.length; i++) {
         let thisAvg = 0;
         let count = 0;
         let thisTopSalary = 0;

         for (let sal of Object.values(allRestaurants[i].workers)) {
            thisAvg += Number(sal);
            count += 1;
            if (sal > thisTopSalary) {
               thisTopSalary = sal;
            }
         }

         thisAvg = thisAvg / count;

         if (avgSalary < thisAvg) {
            avgSalary = thisAvg;
            position = i;
            bestSalary = thisTopSalary;
         }
      }

   bestRestaurant.textContent = `Name: ${allRestaurants[position].name} Average Salary: ${avgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`

   const sortedWorkers = Object.entries(allRestaurants[position].workers).sort((a, b) => b[1] - a[1]);
   result = '';
   for (let [key, value] of sortedWorkers) {
      result += `Name: ${key} With Salary: ${value} `
   }

   workersInfo.textContent = result;
      
   }
}