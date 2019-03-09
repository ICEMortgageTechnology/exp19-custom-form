# Task 6: Displaying Custom Dialogs
Displaying pop-up windows that provide custom UI is another common behavior required by complex forms. Opening a new window and interacting with it requires understanding how two browsers windows communicate with each other. This task will demonstrate a pattern for cross-window communication that can be used in your forms.

For this demonstration, we'll assume that we are building a pop-up window that will provide a mock UI for generating an FHA Case Number of a loan. When the case number is generated, it will be returned to the input form window and populated into the FHA Case Number field (Field 1040).

## Prerequisites
This task assumes you have already completed Task #3 as you will conitnue to build on those files. Additionally, this task requires:
* A *basic* knowledge of JavaScript (ES6/ES2017)
* A web server capable of serving static HTML content. This can be hosted on "localhost" or on any accessible web server for this task.

# Instructions
Follow the steps below to complete this task. The files in this task folder provide a sample implementation of the JavaScript that you will be creating. Feel free to reference it if you get stuck or wish to skip this task.

1. We begin this task by creating the dialog window for generating our mock FHA Case Number. Using the editor of your choice, create a new HTML file named `fha_dialog.html`. Paste the following contents into the file:

    ```html
    <html>
        <head>
            <script>
                // Generates a case number and notifes the opener window
                function generateCaseNum() {
                    // Generate a random string
                    let caseNum = "F" + Date.now().valueOf().toString();
                    document.getElementById("caseNum").value = caseNum;
                }

                // Generates a case number and notifes the opener window
                function applyToLoan() {
                    let caseNum = document.getElementById("caseNum").value;
                    window.opener.postMessage({
                        "fhaCaseNumber": caseNum
                    }, "*");
                }

            </script>
            <style>
                body { font-family: Arial, Helvetica, sans-serif }
                .header { font-size: large }
            </style>
        </head>
        <body onload="generateCaseNum();">
            <img src="http://www.hud.gov/sites/dfiles/Housing/images/FHA3.JPG" width="200" height="100"><br>
            <br>
            <div class="header">FHA Case Number Generator</div><br>
            <div class="body">
                A new FHA Case Number has been generated for you:<br>
                <input id="caseNum" type="text"></input>
                <button onclick="generateCaseNum();">Generate New</button>
                <button onclick="applyToLoan();">Apply to Loan</button>
            </div>
        </body>
    </html>    
    ```

    The page above contains logic to generate a fake, random FHA case number based on the current time. When the user clicks the `Apply to Loan` button, the page uses the `window.opener.postMessage()` call to send the new FHA Case Number back to the window that opened this pop-up.

2. Deploy your HTML file to a web server of your choice and verify it is accessible via HTTP (or HTTPS). 

3. Next, create a new JavaScript file named `fha_case.js` in your local editor. This file will contain the code that launches the HTML file we just created, receives the newly generated case number and applies it to the Loan. We'll start by writing the function that opens the HTML page in a new window. Add the following code to your new JS file:

    ```javascript
    var fha_win = null;

    // Function to get FHA case number
    function showFHACaseNumberDialog() {
        fha_win = window.open("http://localhost/fha_dialog.html", 
            "fha_dialog", "");
    }
    ```

    In the code above, replace the URL in the `window.open()` call with the URL of your HTML page.

4. Next, we'll add the code that will listen for and process the `window.message` event. This event will be fired in response to the pop-up calling the `window.opener.postMessage()` function. 

    ```javascript
    // Subscribe to the window's message event
    window.addEventListener("message", onMessageReceived);

    async function onMessageReceived(msg) {
        if (msg.data && msg.data.fhaCaseNumber) {
            let loan = await elli.script.getObject("loan");
            loan.setFields({
                "1040": msg.data.fhaCaseNumber
            });
            fha_win.close();
        }
    }
    ```

    Note that the `onMessageReceived` function listens for *all* message events, including those that may be come from sources other than our pop-up. For that reason, it's important that this function only act on the messages that originate from our FHA Case Number generation pop-up window.

    To that end, the function inspects the contents of the message's `data` attribute to see if it contains the `fhaCaseNumber` attribute that was set by the pop-up window in the payload of the `window.opener.postMessage()` call. If the attribute is present, the code reads the attribute's value and sets it into field "1040." The pop-up window is then closed. 

5. Log into [LO Connect](https://www.encompassloconnect.com) using your administrative credentials and navigate to the `Asset Management > JavaScript Files` section.

6. Click the upload button and browse to your `fha_case.js` file created above. Alternatively, you can drag-and-drop the file onto the upload area of the LO Connect page.

7. Once the file is uploaded, navigate to the `Input Forms > Custom Input Forms` section and open the `Experience 19 Demo Form`.

8. In the Properties pane, select the `Scripts` tab and click the `fha_case.js` script to link it to the form.

9. Select the "..." button next to the FHA Case Number TextBox and click the `Events` tab in the Properties pane.

10. For the `Click` event, select the `fha_case.showFHACaseNumberDialog()` function from the dropdown. Save the form.

11. In a new browser tab, log into LO Connect as a non-administrive user. Open a sample loan and navigate to your custom input form.

12. If the Loan Type is not already set to FHA, select FHA from the Loan Type dropdown box. This should case the "FHA Loan Information" section to become visible.

13. Click the "..." button next to the "FHA Case Number" field. Your new pop-up window should open. If the pop-up is blocked, you will need to allow pop-ups and then click the button again. The window should show a generated case number.

14. Click the `Apply to Loan` button. The pop-up window should close and the generated case number should appear in the FHA Case Number field of the loan.

Using the technique above, you can move data between the pop-up window and the input form. This allows you to create completely custom UIs that are launched from within a custom input form and can be used to write data back into the form (or into the Loan opened in the editor).
