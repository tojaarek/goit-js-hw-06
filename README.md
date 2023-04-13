Live preview https://tojaarek.github.io/goit-js-hw-06/

# Task 1

In HTML, there is a list of categories, ul#categories.

Write a script that:

1. Will count and display in the console the number of categories in ul#categories, that is, li.item elements.
2. For each li.item element in the ul#categories list, will find and display in the console the element header text (<h2> tag) and the number of elements in the category (all nested <li>).

As a result, the following messages will be displayed in the console:

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5

# Task 2

In HTML, there is an empty ul#ingredients list.
In JavaScript, there is an array of strings.

Write a script that, for each element in the ingredients array:

1. Will create a separate <li> element. Be sure to use the document.createElement() method.
2. Will add the ingredient name as its text content.
3. Will add the item class to the element.
4. Then will insert all <li> to the ul#ingredients list in a single operation.

# Task 3

Write a script to create a gallery of images from an array of data. There is a list, ul.gallery, in HTML.

Use an array of objects images to create <img> elements nested in <li>. Use template strings and the insertAdjacentHTML() method to create markup.

1. All gallery items must be added to DOM in one insert operation.
2. Add at least some gallery design with flexboxes or grids using CSS classes.

# Task 4

The counter consists of a span and buttons, which, when clicked, should increase and decrease its value by one.

1. Create a variable, counterValue, that will store the current counter value and initialize it with 0.
2. Add listeners for clicks on the buttons; inside them, increase or decrease the value of the counter.
3. Update the interface with the new value of the variable counterValue.

# Task 5

Write a script that, when typing in the input#name-input input (input event), substitutes its current value into span#name-output. If the input is empty, the span should display the "Anonymous" string.

# Task 6

Write a script that, when focus on input is lost (blur event), checks its contents for the correct number of entered characters.

1. The number of characters in the input is specified in its data-length attribute.
2. If the number of characters entered is correct, the input's border turns green, or red with a wrong number.

To add styles, use the valid and invalid CSS classes, which you can find in the task source files.

# Task 7

Write a script that responds to changes in the value of input#font-size-control (input event) and changes the inline style of span#text by updating the font-size property. As a result, the text size will change responding to scrollbar dragging.

# Task 8

Write a script to manage the login form.

1. Form submission (form.login-form) must be processed on the submit event.
2. The page must not reload when the form is submitted.
3. If the form has empty fields, display alert saying that all fields must be filled in.
4. As soon as the user has filled in all the fields and submitted the form, collect the field values into an object, where the field name will be the property name and the field value will be the property value. Use the elements property to access form elements.
5. Display the object with the entered data in the console and clear the values of the form fields using the reset method.

# Task 9

Write a script that changes the background colors of the <body> element via inline style when clicking on button.change-color and outputs the color value to span.color.

1. Use the getRandomHexColor function to generate a random color.

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

# Task 10 (optional)

Write a script to create and clear a collection of elements. The user enters the number of elements into input and clicks the New button, after which a collection is rendered. When you click on the Clear button, the collection is cleared.

a) Create a createBoxes(amount) function that takes one parameter, a number. The function creates as many <div> as specified in amount and adds them to div#boxes.

1. The size of the very first <div> are 30px by 30px.
2. Each element after the first one should be 10px wider and higher than the previous one.
3. All elements must have a random HEX background color. Use the ready-made getRandomHexColor function to get a color.

b) Create a destroyBoxes() function that clears the contents of div#boxes, thereby removing all created elements.
