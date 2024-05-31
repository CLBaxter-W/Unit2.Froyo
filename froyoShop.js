/* create a function to print the object to the console. */
const printObject = (toPrint) => {
  for (const element in toPrint)
    console.log(`Input Object ${element} : ${toPrint[element]}`);
};

// define function to move order from a split array
// to an object counting the order number for each 
// flavor.
const getOrder = (flavorArray) => {
  let tempFlavorObj = {};

  // loop thru the input array
  for (let index = 0; index < flavorArray.length; index++) {
    const currentFlavor = flavorArray[index];

    if (!(currentFlavor in tempFlavorObj)) {
      tempFlavorObj[currentFlavor] = 1;
    } else {
      tempFlavorObj[currentFlavor] += 1;
    }
  }
  return tempFlavorObj;
};

const main = () => {
  // Split the input into a flavor array
  const inputFlavorArray = userInputString.split(",");
  // console.log(`Orginal Order ${inputFlavorArray}`);

  // Convert the array of flavors into an object that
  // includes a count of how many of each flavor are in the input string.
  let userFlavors = {};

  userFlavors = getOrder(inputFlavorArray);

  printObject(userFlavors);
  console.log(userFlavors);
  console.table(userFlavors);
};

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter a list of your favorite Fozen Yogurt Flavors: ",
  " Vanilla, Vanilla, Vanilla, Strawberry, Coffee, Coffee"
);

main();
