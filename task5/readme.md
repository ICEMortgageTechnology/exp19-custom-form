# Task 5: Task 5: Dynamic Forms
A common pattern for input forms is to dynamically hide or show portions of the form depending on the state of the Loan. In this exercise, we'll create extend the logic of our form so it displays only the sections appropriate to the current Loan.

## Prerequisites
This task assumes you have already completed Task #3 as you will conitnue to build on those files. Additionally, this task requires:
* A *basic* knowledge of JavaScript (ES6/ES2017)

# Instructions
Follow the steps below to complete this task. The files in this task folder provide a sample implementation of the JavaScript that you will be creating. Feel free to reference it if you get stuck or wish to skip this task.

1. Log into [LO Connect](https://www.encompassloconnect.com) using your administrative credentials. Open the `Experience 19 Demo Form` in the Input Form Builder.

2. Once the form is open, click the `</>` button in the top toolbar to open the JavaScript editor. Select the `Experience 19 Demo Form_default.js` file in the `File Name` dropdown if it is not already selected.

3. We will create a new function in the code that uses the value of the Loan Type dropdown to show or hide the VA- and FHA-specific sections of the form. In the JavaScript Editor, create the following new function:

    ```javascript
    async function showLoanTypeGroup() {
        // Get the value of the Loan Type dropdown control
        let drpLoanType = await elli.script.getObject("drpLoanType");
        let val = await drpLoanType.value();

        let vaBox = await elli.script.getObject("groupVA");
        vaBox.visible(val == "VA");

        let fhaBox = await elli.script.getObject("groupFHA");
        fhaBox.visible(val == "FHA");
    }
    ```

    The function first above retrieves the value from the `drpLoanType` dropdown control. It then shows or hides the VA and FHA CategoryBox controls by invoking their `visible()` functions. A `true` value will display the control while a `false` value will cause it be hidden.

4. Next, we must hook this function up to the `Change` event handler for the Loan Type dropdown. Select the dropdown on the form, click the `Events` tab in the Properties pane and click the `</>` button to open the JavaScript editor. The editor will open with an empty implementation of your new event handler. Replace the new function with the following:

    ```javascript
    async function drpLoanType_change(ctrl) { 
        showLoanTypeGroup();
    }   
    ```

5. To complete the behavior, we must also ensure that the proper GroupBox is displayed when the form is initially loaded. Click the white area of the form above the "Borrower Information" CategoryBox. You should see "Form1" as the active control in the Properties pane. Select the `Events` tab and then click the `</>` button next to the `Load` event.

6. Just as before, the JavaScript editor will open with a default implementation of the `form_load` event. Replace the generated code with the following:

    ```javascript
    async function form_load(ctrl) { 
        showLoanTypeGroup();
    }
    ```

    This code will cause our logic to be invoked immediately after the form is loaded in the UI.

7. Save the JavaScript and the form.

8. In a new browser tab, log into LO Connect, open a sample loan and navigate to your custom input form.

9. When the form loads, note that the FHA and VA sections will be hidden (unless you have selected a loan with one of those loan types). In the Loan Type dropdown, change the type to FHA (or VA) and verify that the appropriate lower section of the form is hidden or shown. Similarly, select a Conventional loan type and verify that both sections are hidden.

Unlike the statically-positioned forms of the SmartClient, the layout of the LO Connect form is automatically modified when elements are shown or hidden. This eliminates the need to have to manually re-position elements thru code, which simplifies dynamic form creation significantly.

