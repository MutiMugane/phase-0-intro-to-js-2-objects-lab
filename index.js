const employee = {
    name: "Test",
    streetAddress:"Nairobi"
};



const copyOfEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "John",
    "123"
  );

  function updateEmployeeWithKeyAndValue(object,key,value){
    const copyOfEmployee = { ...employee };

  copyOfEmployee[key] = value;

  return copyOfEmployee;}

  function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    employee.name="Sam";
    employee.streetAddress="12 Broadway"

    return employee;
  }

 
  function destructivelyDeleteFromEmployeeByKey(employee,name){
    delete employee ['name'];
    

    return employee;
  }

  function deleteFromEmployeeByKey(employee, key){
    const deleteFromEmployeeByKey = { ...employee };
 
    delete deleteFromEmployeeByKey.name; 

  return deleteFromEmployeeByKey;
  }
  