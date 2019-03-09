# Task 3: Creating JavaScript Libraries
In the prior task, we added JavaScript to our form, which was saved in a file automatically created by the IFB. This file was very specific to the form we created as it was coded agains the form's control elements. However, there will be use cases where we want to build libraries of reusable logic that can be shared across several forms without replicating the code in each form. 

This task demonstrates the process of creating a reusable JavaScript library that validates email addresses entered by users.

## Prerequisites
This task assumes you have already completed Task #3 as you will conitnue to build on those files. Additionally, this task requires:
* A *basic* knowledge of JavaScript (ES6/ES2017)

# Instructions
Follow the steps below to complete this task. The files in this task folder provide a sample implementation of the JavaScript that you will be creating. Feel free to reference it if you get stuck or wish to skip this task.

1. We will be creating a JavaScript library that contains a function used to valid email formats. To that end, create a new file on your computer named `email_validation.js`. Inside, paste the following code:

    ```javascript
    // Provides a generic function for email validation on a control
    async function validateEmail(ctrl) { 
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let val = await ctrl.value();
    
        if (val.length && !emailRegex.test(val)) {
            alert("Invalid email address!");
            ctrl.value('');
        }
    }
    ```

    The code above accepts a Control object as a parameter, validates its `value()` against a regular expression for email formats and, if it fails, displays a pop-up alert and clears the field. Save this file.

2. If you are not already, log into [LO Connect](https://www.encompassloconnect.com) using your Administrator credentials and navigate to the `Asset Management > JavaScript Files` area.

3. Click the `Upload` button and either browse to your JS file or drag-and-drop it into the designated region on the web page. (Note: you should be able to see the "Experience 19 Demo Form_default.js" file created in the prior task here as well!)

4. Once the upload is complete, click the script's name to open it in the JavaScript Editor. You can use this editor to make any changes required, or you can make changes locally on your computer and re-upload the file. For now, simply close the editor.

5. Navigate to the `Input Forms > Custom Forms` area and open the "Experience 19 Demo Form" in the IFB.

6. The Propeties pane should be showing the `Form1 Properties`. Select the `Scripts` tab in the Properties pane. The `Scripts` tab shows you all of the available JavaScript from from your **Asset Library** as well as which one(s) are currently *linked* to the input form. You should see the "Experience 19 Demo Form_default.js" selected as a linked file. This was done for you by default in a prior task.

7. From the list of script files, locate the "email_validation.js" file and click it to link it to the form. You should see the file's name appear in the list of linked files.

8. Next, click on the Borrower's Email TextBox in the form. In the Properties pane, select the `Events` tab. Click the dropdown for the `Change` event and select the `email_validation.validateEmail()` function. By connecting our new function to this TextBox's Change event, the email valdiation logic will run each time the user modifies this field.

9. Repeat the steps above for the Co-Borrower Email field. Note that you can reuse the same function for multiple controls in the same form. Save your form.

10. Open a new browser tab and log in with your non-administrative user account. Open a sample loan and load your custom input form as before.

11. In the Borrower Email field, enter an invalid value such as "test" and tab out. You should receive a pop-up indicating the email has an invalid form and your value should be removed. Try again, this time with a valid email address and confirm it is accepted.

By using the Asset Management features of LO Connect, you can upload JavaScript files that can be used across Input Forms. This allows you to modularize your code and then link the necessary libraries to your form. 

