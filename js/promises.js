const employee=[
    {Name: 'Nitish Singh', Designation: 'Lead Frontend Developer'},
    {Name: 'Priya Singh', Designation: 'Junior Frontend Developer'},
]

function getEmployee(){
    setTimeout(() => {
        let output='';

        //using high order each function
        employee.forEach((emp) =>{
            output += `<ul>
                <li><strong>${emp.Name}</strong><br>${emp.Designation}</li>
            </ul>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

getEmployee(); 
/* Nitish Singh
   Lead frontend developer
*/
/* Priya Singh
   Junior frontend developer
*/


// create employee
function createEmployee(emp){
    setTimeout(() =>{
        employee.push(emp);
    },2000);
}

createEmployee({Name: 'Ruchir Saxena', Designation: 'Sr. Developer'});

//Output will be this:
/* Nitish Singh
   Lead frontend developer
*/
/* Priya Singh
   Junior frontend developer
*/

// solving this by using promises

function createEmployee(emp){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            employee.push(emp);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error: something went wrong');
            }
        },2000);
    })
}
createEmployee({Name: 'Ruchir Saxena', Designation: 'Sr. Developer'})
.then(getEmployee)
.catch(err => console.log(err));

//In es6 where promises has been introduced. 
//A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred).
//A promise is an object which can be returned synchronously from an asynchronous function. It will be in one of 3 possible states:
/*
Fulfilled: onFulfilled() will be called (e.g., resolve() was called)
Rejected: onRejected() will be called (e.g., reject() was called)
Pending: not yet fulfilled or rejected
*/ 
// Promises give you a more allegiant way to handle asynchronous data.

//Promise all
const promises1 = Promise.resolve("Hello Nitish");
const promise2 = 10;
const promises3 = new Promise((resolve,reject) => {
    setTimeout(resolve, 2000, 'Good bye Nitish');
})

Promise.all([promises1,promise2,promises3])
.then(values => console.log(values))

// ["Hello Nitish", 10, "Good bye Nitish"]