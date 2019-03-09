# Task 2: Control Events
The form we created in the prior task is mostly functional: you can edit the fields on the form just as you would any standard input form and the system will apply the same business rules, calculations and behaviors as you're used to. But we want to add some additional behaviors that are custom to our form, and this task takes us thru the basic of responding to events from the UI controls in the form.

## Prerequisites
This task assumes you have already completed Task #1 as you will conitnue to build on those files. Additionally, this task requires:
* A *basic* knowledge of JavaScript (ES6/ES2017)

# Instructions
Follow the steps below to complete this task. The files in this task folder provide a sample implementation of the JavaScript that you will be creating. Feel free to reference it if you get stuck or wish to skip this task.

1. If you are not already, log into [LO Connect](https://www.encompassloconnect.com) using your Administrator credentials and navigate to the `Input Forms > Custom Forms` area.
2. Click the name of the "Experience 19 Demo Form" to open the form in the Input Form Builder, which launches in a new browser tab.
3. Click the "Copy from Borrower" button to select it; the Button's properties will be displayed in the right-hand Property pane.
4. Within the Property pane, select the `Events` tab. You should see a single event available: the `Click` event. 
5. We want to add code that, when the button is clicked, copies the Email and Phone information from the Borrower section of the form to the Co-Borrower section. To get started, click the `</>` icon to the right of the `Click` event line.
6. Once the built-in JavaScript editor opens, it should be populated with the skeleton of your new event handler:

    ```javascript
    function btnCopy_click(ctrl) { 
    }
    ```

    This function will be the one that gets called by the Ellie Mae JavaScript Framework (EMJSF) when the button is clicked. Note that the name of the function is unimportant, and you can change this to be anything that's meaningful to you. For now, we'll leave it as it. 

    Because all interactions with the EMJSF are asynchronous, we will add the `async` prefix to our function declaration. This qualifier was added, along with the `await` keyword, to the ES2017 JavaScript standard to simplify asynchronous programming in JavaScript. Used together, these keywords hide many of the complexities of using JavaScript Promises and make your code much more readable. 
    
    Modify the function declaration to be:

    ```javascript
    async function btnCopy_click(ctrl) { 
    }
    ```

7. In order to achieve the desired behavior of copying data from borrower to co-borrower fields, we will first retrieve references to all of the TextBox elements involved. We obtain references to objects within LO Connect using the `elli.script.getObject()` function. The parameter to the function is the Control ID of each TextBox element as established when the control was placed on the input form.

    Enter the following code into the body of your event handler:

    ```javascript
    // Retrieve references to all of the control elements
    let borEmail = await elli.script.getObject("txtBorrEmail");
    let borPhone = await elli.script.getObject("txtBorrPhone");
    let cobEmail = await elli.script.getObject("txtCobEmail");
    let cobPhone = await elli.script.getObject("txtCobPhone");
    ```

8. Now that we have references to the controls, we can use the `value()` function of the control object to read the text within the TextBox. Similarly, we can invoke the `value()` function on the co-borrower control to modify that control's text.

    Add the following code to your event handler beneath the code added in the prior step:

    ```javascript
    // Copy the values from the borrower control to the 
    // coborrower control
    cobEmail.value(borEmail.value());
    cobPhone.value(borPhone.value());
    ```

9. Now, click the `Save` button on the JavaScript editor. Note that at the top of the editor the IFB has automatically generated a name for your JavaScript file: `Experience 19 Demo Form_default.js`. This new file has been added to your *Asset Library*, which we'll view momentarilly. For now, click `Close` to close the window.

10. Back in the Input Form Builder, click the dropdown box for the `Click` event handler. You should now see your new function appear as an option in the dropdown. Select it and then save your form.

11. Open a new tab and log into LO Connect with a non-administrative login. Open a sample loan and load your custom form as before.

12. Ensure that Email and Home Phone textboxes for the Borrower are populated and then click the "Copy from Borrower" button.

Assuming your form has functioned correctly, you're ready for the next task, which demonstrates how to create reusable JavaScript libraries instead of form-specific scripts like the one above.

