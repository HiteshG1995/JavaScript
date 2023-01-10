var monthOfYear = function (month) {
  switch (month) {
      case 1:
        console.log(`January`);
        console.log(`This is first month: ${month}\n`);
      break;
      case 2:
        console.log(`Febuary`);
        console.log(`This is second month: ${month}\n`);
      break;
      case 3:
        console.log(`March`);
        console.log(`This is third month: ${month}\n`);
      break;
      case 4:
        console.log(`April`);
        console.log(`This is 4th month: ${month}\n`);
      break;
      case 5:
        console.log(`May`);
        console.log(`This is 5th month: ${month}\n`);
      break;
      case 6:
        console.log(`June`);
        console.log(`This is 6th month: ${month}\n`);
      break;
      case 7:
        console.log(`July`);
        console.log(`This is middle month: ${month}\n`);
      break;
      case 8:
        console.log(`August`);
        console.log(`This is 8th month: ${month}\n`);
      break;
      case 9:
        console.log(`September`);
        console.log(`This is 9th month: ${month}\n`);
      break;
      case 10:
        console.log(`October`);
        console.log(`This is 10th month: ${month}\n`);
      break;
      case 11:
        console.log(`November`);
        console.log(`This is second last month: ${month}\n`);
      break;
      case 12:
        console.log(`December`);
        console.log(`This is last month: ${month}\n`);
      break;

    default:
        console.log(`You provided "${month}" Please provide range till 12 which is max month date\n`);
      break;
  }
};
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);

