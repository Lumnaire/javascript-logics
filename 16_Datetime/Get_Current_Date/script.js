// Define a JavaScript function called curday with a parameter sp
var curday = function (sp) {
  // Create a new Date object representing today's date
  today = new Date();
  // Get the day of the month
  var dd = today.getDate();
  // Get the month, adding 1 because JavaScript months are zero-based (January is 0)
  var mm = today.getMonth() + 1; // As January is 0.
  // Get the full year
  var yyyy = today.getFullYear();

  // If the day of the month is less than 10, prepend '0' to it to ensure two digits
  if (dd < 10) dd = "0" + dd;
  // If the month is less than 10, prepend '0' to it to ensure two digits
  if (mm < 10) mm = "0" + mm;

  // Return the formatted date string with the specified separator
  return mm + sp + dd + sp + yyyy;
};

// Output today's date formatted with '/' separator
console.log(curday("/"));
// Output today's date formatted with '-' separator
console.log(curday("-"));
