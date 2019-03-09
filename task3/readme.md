### Task 3: Accessing the Loan Object
The prior task demonstrates how to interact with the controls on the form, but, is some cases, you'll want to interact directly with the Loan opened in the editor. For example, this will allow you to access or modify data values that may not be shown on the form. This task will demonstrate how you can read or write data from/to the Loan. It will also demonstrate how interacting with the Loan can often be easier than interacting with the form's UI controls and can achieve the same result.

## Prerequisites
This task assumes you have already completed Task #2 as you will conitnue to build on those files. Additionally, this task requires:
* A *basic* knowledge of JavaScript (ES6/ES2017)

# Instructions
Follow the steps below to complete this task. The files in this task folder provide a sample implementation of the JavaScript that you will be creating. Feel free to reference it if you get stuck or wish to skip this task.

1. If you are not already, log into [LO Connect](https://www.encompassloconnect.com) using your Administrator credentials and navigate to the `Input Forms > Custom Forms` area.
2. Click the name of the "Experience 19 Demo Form" to open the form in the Input Form Builder, which launches in a new browser tab.
3. Click the "Copy to Borrower" button to select it; the Button's properties will be displayed in the right-hand Property pane.
4. Within the Property pane, select the `Events` tab. Click the `</>` icon to open the code editor.
5. Within the code editor, create a new function named `copyBorrToCob` that has the same function signature as the `btnCopy_click` function already in the file. It should look as follows:

    ```javascript
    async function copyBorrToCob(ctrl) { 
    }
    ```

6. Like the previous task, our objective is to write code that copies the borrower email and phone number fields to the coborrower. However, this time we will achieve this objecive by directly reading and writing the data values to the Loan. We start this logic by retrieving a reference to the Loan object using the `elli.script.getObject()` function. Add the following line of code to your new function.

    ```javascript
    // Get the Loan object
    let loan = await elli.script.getObject("loan");
    ```

    The "loan" object being retrieved is a *scripting object* that provides functions for reading from and writing to the Loan opened in the editor.

7. Next, we'll use the Loan object's `getField()` function to read the values of our borrower's email and phone fields (Field IDs "1240" and "66," respectively) and the `setFields()` function to update the values of the co-borrower fields ("1268" and "98"). Add the following code beneath the line from the prior step:
    
    ```javascript
    // Copy the borrower loan fields to the
    // co-borrower fields
    loan.setFields({
        "1268": await loan.getField("1240"),   // Email
        "98": await loan.getField("66")        // Phone #
    });

    console.log("Data copied successfully");
    ```

    Note that we can set both co-borrower fields in a single call to `setFields()`. Doing so offers better performance than setting the fields one-at-a-time since the application can any business logic for these fields concurrently. Also notice that we must use `await` when calling `loan.getField()` as these calls are, as with all scripting object functions, asynchronous.

    Finally note that we included a call to the built-in `console.log()` function. This will write the specified text to the browser's JavaScript Console, which is available as part of the browser's Developer Tools. This line will allow us to verify that the new event handler is being called in place of the prior implementation.

7. Save and close your JavaScript file. In the dropdown for the Button's Click event, select the new `copyBorrToCob()` function. This will change the event handler to our new function. Save your form.

8. Open a new browser tab, and launch the browser's Developer Tools. In Chrome, this is done thru the top menu (three vertical dots) and selecting `More Ttols > Developer tools`. In Windows, you can also launch this using `Ctrl + Shirt + I`. Once the Dev Tools are open, ensure that the `Disable cache` checkbox is checked and that the `Console` tab is selected.

9. Log into LO Connect with your non-administrative login. Open a sample loan and navigate to your custom input form.

10. Ensure that the borrower email and phone fields are populated, and click the `Copy from Borrower` tab. The data from the borrower fields should be copied as before. In the Console window, you should see the message generated by the code above.

You've now seen how access the Loan data directly and how you can manipulate data wither thru the UI controls or directly on the Loan object. Often, the latter is easier, and it doesn't require that the source or target fields be on the form being edited.

Move to Task 4 to learn how to create reusable libraries that can be used on multiple forms.