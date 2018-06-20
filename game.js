function sumItem(arr, callback) {
    var sum = arr.reduce(function(acc, e) {
        return acc + e;
    }, 0);
    
    callback(sum);
}

sumItem([1,2,3], function(sum1) {
    console.log("res is: " + sum1);
})


function counter() {
    var i = 0;
    return function() {
        i++;
        console.log(i);
    }
}

counter();
counter();

document.addEventListener('DOMContentLoaded', function() {
  let app = document.getElementById('todo-app');
  // attach event listener to whole container
  app.addEventListener('click', function(e) {
    if (e.target && e.target.nodeName === 'LI') {
      let item = e.target;
      alert('you clicked on item: ' + item.innerHTML);
    }
  });
});

//Closure 
//https://medium.com/@dis_is_patrick/practical-uses-for-closures-c65640ae7304
//https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e

//Use closure for function factories

function dwightJob(title) {
    return function(prefix) {
        return prefix + ' ' + title;
    };
}
var sales = dwightJob('Salesman');
var manager = dwightJob('Manager');
alert(sales('Top'));  // Top Salesman
alert(manager('Assistant to the Regional')); // Assistant to the Regional Manager
alert(manager('Regional')); // Regional Manager

//Use closure to implement private functions

var dwightSalary = (function() {
    var salary = 60000;
    function changeBy(amount) {
        salary += amount;
    }
    return {
        raise: function() {
            changeBy(5000);
        },
        lower: function() {
            changeBy(-5000);
        },
        currentAmount: function() {
            return salary;
        }
    }; 
})();

alert(dwightSalary.currentAmount()); // $60,000
dwightSalary.raise();
alert(dwightSalary.currentAmount()); // $65,000
dwightSalary.lower();
dwightSalary.lower();
alert(dwightSalary.currentAmount()); // $55,000

dwightSalary.changeBy(10000) // TypeError: undefined is not a function