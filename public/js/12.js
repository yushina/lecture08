function isLeapYear(year){ 
  if (year < 4) return false;

  return year % 400 == 0 || (year % 100 != 0 && year % 4 == 0);
}

function countLeapYear(fromYear, toYear){
  var count = 0;

  for (var i = fromYear; i <= toYear; i++)
    if (isLeapYear(i)) count++;

  return count;
}

console.log(countLeapYear(1, 2000))
