// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAdress: '11 Broadway'
}

// function updateEmployeeWithKeyAndValue(employee, key, value) {
//     return Object.assign({}, employee, {[key]:value})
// }


function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value};
} 

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}