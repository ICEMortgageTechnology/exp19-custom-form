
async function btnCopy_click(ctrl) { 
  // Retrieve references to all of the control elements
  let borEmail = await elli.script.getObject("txtBorrEmail");
  let borPhone = await elli.script.getObject("txtBorrPhone");
  let cobEmail = await elli.script.getObject("txtCobEmail");
  let cobPhone = await elli.script.getObject("txtCobPhone");

  // Copy the values from the borrower control to the 
  // coborrower control
  cobEmail.value(borEmail.value());
  cobPhone.value(borPhone.value());
}


async function copyBorrToCob(ctrl) { 
  // Get the Loan object
  let loan = await elli.script.getObject("loan");

  // Copy the borrower loan fields to the
  // co-borrower fields
  loan.setFields({
  "1268": await loan.getField("1240"),   // Email
  "98": await loan.getField("66")        // Phone #
  });

  console.log("Data copied successfully");
}

async function showLoanTypeGroup() {
  // Get the value of the Loan Type dropdown control
  let drpLoanType = await elli.script.getObject("drpLoanType");
  let val = await drpLoanType.value();

  let vaBox = await elli.script.getObject("groupVA");
  vaBox.visible(val == "VA");

  let fhaBox = await elli.script.getObject("groupFHA");
  fhaBox.visible(val == "FHA");
}

async function drpLoanType_change(ctrl) { 
  showLoanTypeGroup();
}

async function form_load(ctrl) { 
  showLoanTypeGroup();
}

