function getRangeReport(start, end) {
  var finalObject = {};
  var numbersArr = [end];
  var number;
  var odds = [];
  var evens = [];

  for (var i = start; i < end; i++) {
    number = i;
    numbersArr.push(number);
  }
  var sorted = numbersArr.sort(function (a, b) { return a - b; });

  var total = 0;
  for (var j = 0; j < sorted.length; j++) {
    total += sorted[j];
    if (numbersArr[j] % 2 === 0) {
      evens.push(sorted[j]);
    } else {
      odds.push(sorted[j]);
    }
  }

  var average = total / sorted.length;

  finalObject.total = total;
  finalObject.odds = odds;
  finalObject.evens = evens;
  finalObject.range = sorted;
  finalObject.average = average;

  return finalObject;
}

getRangeReport(1, 10);
