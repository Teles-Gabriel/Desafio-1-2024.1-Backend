function checkCashRegister(price, cash, cid) {
    const currencyUnits = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ];
  
    let changeDue = cash - price;
    let originalChangeDue = changeDue;
    
    let totalCID = cid.reduce((acc, curr) => acc + curr[1], 0).toFixed(2);
  
    let change = {
      status: "",
      change: []
    };
  
    if (changeDue > totalCID) {
      change.status = "INSUFFICIENT_FUNDS";
      change.change = [];
      return change;
    }
  
    if (changeDue.toFixed(2) === totalCID) {
        change.status = "CLOSED";
        change.change = cid;
        return change;
    }
  
    let changeArray = [];
    let reversedCID = cid.slice().reverse();
  
    for (let i = 0; i < reversedCID.length; i++) {
        let currencyName = reversedCID[i][0];
        let currencyTotal = reversedCID[i][1];
        let currencyValue = currencyUnits.find(unit => unit[0] === currencyName)[1];
        let currencyAmount = 0;
  
      while (changeDue >= currencyValue && currencyTotal > 0) {
        changeDue -= currencyValue;
        currencyTotal -= currencyValue;
        currencyAmount += currencyValue;
        changeDue = changeDue.toFixed(2);
      }
  
      if (currencyAmount > 0) {
        changeArray.push([currencyName, currencyAmount]);
      }
    }
  
    if (changeDue > 0) {
      change.status = "INSUFFICIENT_FUNDS";
      change.change = [];
      return change;
    }
  
    change.status = "OPEN";
    change.change = changeArray;
    return change;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);