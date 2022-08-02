// Code your solution in this file!

const returnFirstTwoDrivers= function(drivers) {
    return drivers.slice(0,2);
  }
  returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
  
  const returnLastTwoDrivers= function(drivers) {
    return drivers.slice(drivers.length-2);
  }
 returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
  
 const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
 

 function createFareMultiplier(multiplier) {
    return function(x) {
    return x * multiplier
    } 
    }
    
    const fareDoubler = createFareMultiplier(2);
    
  fareDoubler(10);
 
  const fareTripler = createFareMultiplier(3);

  fareTripler(12);

  function selectDifferentDrivers(drivers, pickDrivers) {
    if (pickDrivers === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    }
    else if (pickDrivers === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers);
    }
  }

selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers);
 selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers);