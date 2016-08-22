function employee (name, manager) {
  return {
    name: name,
    manager: manager
//    toString: function () {
//      return this.name
//    }
  }
}

/**
 * Returns an array of employees (chosen from the given array of employees)
 * whose manager is the same as the given manager. This should not alter
 * the given array! A new array should be created to contain the results.
 *
 * @param manager the manager to filter by
 * @param employees the employees to choose from
 */
/*
function underlings (manager, employees) {
  let result = []
  // for (let employee of employees) {
  // if (employee.manager === manager){
  //   result.push(employee)
  // }
// }
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].manager === manager) {
      result.push(employees[i])
    }
  }
  return result
}

// filtering
function highOrderUnderlings (manager, employees) {
  function hasManager (employee) {
    return employee.manager === manager
  }
  return employees.filter(hasManager)
}

// mapping / transforming
function highOrderNames (employee) {
  function getName (employee) {
    return employee.name
  }
  return employees.map(getName)
}

// iterating (forEach)
function log (names) {
  function logName (name) {
    console.log(name)
  }
}

function highOrderLog (name) {
  function logName (name) {
    console.log(name)
  }
  names.forEach(logName)
}
*/
// does it all at once
// function underlings (manager, employees) {
//  employees
//  .filter(function (employee) { return employee.manager === manager })
//  .map(function (employee) { return employee.name })
// .filter(function (name) { return name.length > 5 })
//  .forEach(function (name) { console.log(name) })
// }

function underlings (manager, employees) {
  employees.filter(e => e.manager === manager).map(e => e.name).forEach(n => console.log(n))
}

function groupByManagerName (employees) {
  let result = {}
  employees.filter(e => e.manager !== undefined).map(e => e.manager)
  .forEach(m => result[m.name] = employees.filter(e => e.manager === m))
  return result
}
function groupByManagerName2 (employees) {
  const result = {}

  employees
    .filter(function (employee) { return employee.manager !== undefined})
    .reduce(flatName(employee => employee.manager.name, employee),
    {}
  )
}

//     function (employee) {
//       const managerName = employee.manager.name
//
//       if (result[managerName] === undefined) {
//         result[managerName] = []
//       }
//
//       result[managerName].push(employee)
//     })
//   return result
// }

const flatName =
  (field, element) =>
     (result, arr) => {
       const itemName = field(arr)

      if (typeof element(arr) === 'number') {
        if (result[itemName] === undefined) {
          result[itemName] = 0
        }
        result[itemName] += element(arr)
        return result
      } else {
        if (result[itemName] === undefined) {
          result[itemName] = []
        }
        result[itemName].push(element)
        return result
      }
    }

// [1,2,3,4].reduce((sum, next) => {
// 	console.log(`previous sum: ${sum}`)
// 	console.log(`nest element: ${next}`)
// 	const result = sum + next
// 	console.log(`next sum: ${result}`)
// 	return result
// }, 0)
// OR
// [1,2,3,4].reduce((sum, next) => sum + next, 0)

let res = []
let arr = [1,2,3,4]
arr.reduce((sum, next) => [next, ...sum], [])

arr.reduceRight((sum, next) => [...sum, next], [])

module.exports = {
  employee,
  underlings,
  groupByManagerName
}
