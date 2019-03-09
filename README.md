# Encompass Custom Input Form Demo/Exercise
Just as with the Encompass SmartClient, the web-based LO Connect application supports the ability to customize the loan editing experience by creating Custom Input Forms. These forms allow for optimizing your users' experience for specific tasks, workflows, etc. based on their job function.

Custom Input Forms are created thru a WYSIWYG, web-based application called the **Input Form Builder (IFB)**. The IFB provides a simple, drag-and-drop experience for designing forms and binding the form elements to data from the loan. The tool is meant to be accessible to users with no development experience; however, it also provides capabilities that are more advanced for developers to more fully customize the behaviors behind the form.

This demo project focuses on the developer-oriented features of the IFB, demonstrating how to introduce code into a based form designed in the IFB. You will be led thru several tasks, each of which adds additional capabilities to the a sample form or demonstrates best practices in form development. If you prefer not to go thru the individual tasks, the project includes a complete version of the form and code in the "final" folder, which you can use as a reference throughout this exercise.

## Custom Input Form Tasks
The following table of contents list the different tasks included here as well as the objective of each. Each task includes a complete set of steps within the task folder's readme file. The tasks here assume that you are already familiar with HTML, CSS and JavaScript (ES6).

### Task 1: Importing and Validating a Form (Basic)
In the first task, you will import a pre-created input form that you will be building on in the later exercises. We'll then enable the form and verify it's working as expected in LO Connect.

### Task 2: Control Events (Basic)
Next, you'll learn how to subscribe to and code against *events* emitted by the controls on the input form. This task will also introduce the basic patterns for interacting with the LO Connect application thru the Ellie Mae JavaScript Framework (EMJSF).

### Task 3: Accessing the Loan Object (Basic)
The prior task demonstrates how to interact with the controls on the form, but, is some cases, you'll want to interact directly with the Loan opened in the editor. For example, this will allow you to access or modify data values not shown on the form. This task will demonstrate how you can read or write data from/to the Loan. It will also demonstrate how interacting with the Loan can often be easier than interacting with the form's UI controls.

### Task 4: Creating Reusable JavaScript Libraries (Basic)
Being able to reuse code across input forms allows you to create libraries of commonly-used functionality instead of using copy-and-paste to add this code to each form that needs it. In this task, you'll create a generic library for email validation that you can link into your form.

### Task 5: Dynamic Forms (Basic)
A common pattern for input forms is to dynamically hide or show portions of the form depending on the state of the Loan. In this exercise, we'll create extend the logic of our form so it displays only the sections appropriate to the current Loan.

### Task 6: Displaying Custom Dialogs (Advanced)
You may find that you want to add your own custom pop-up dialogs to the loan editing process. This task demonstrates how to open pop-ups and handle communication between your in-form code and the pop-up window.
