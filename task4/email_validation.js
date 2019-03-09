
// Provides a generic function for email validation on a control
async function validateEmail(ctrl) { 
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let val = await ctrl.value();
  
    if (val.length && !emailRegex.test(val)) {
      alert("Invalid email address!");
      ctrl.value('');
    }
  }
