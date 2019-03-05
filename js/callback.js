// What is callback?
// A callback is funcation that is to be executed after another funcation has finish executing   -- hence the name 'call back'.

//Why do we need callback?
/*JavaScript is synchronous. This means that it will execute your code block by order after hoisting. Before the code executes, var and function declarations are “hoisted” to the top of their scope.

*/

//This is an example of a synchronous code:
console.log(1);
console.log(2);

//output: 1, 2

//Asynchronous requests will wait for a timer to finish or a request to respond while the rest of the code continues to execute. Then when the time is right a callback will spring these asynchronous requests into action.

//let's create a asynchronous exmple

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

// solving this by using callback

function createEmployee(emp, callback){
    setTimeout(() =>{
        employee.push(emp);
        callback();
    },2000);
}

createEmployee({Name: 'Ruchir Saxena', Designation: 'Sr. Developer'}, getEmployee);

//now output will be:
/* Nitish Singh
   Lead frontend developer
*/
/* Priya Singh
   Junior frontend developer
*/
/* Ruchir saxena
   Sr Developer
*/

