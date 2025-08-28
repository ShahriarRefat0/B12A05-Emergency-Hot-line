### Questions Answer:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?  
Answer:  
_getElementById_
- It returns the element with a specific id.
- Return type is single element object or null if not fund.
- Example:  
```code
let firstItem = document.getElementById("idName");  
_getElementsByClassName_
- It returns all the elements that given class name.
- Return type is an HtmlCollection. HtmlCollection are live and it's auto update if anything change in DOM.
- Example:  
```code  
let firstItems = document.getElementsByClassName("className");  
_querySelector_
- It returns the first element that matches a CSS selector. It could be id, class, tag, attributes.
- Return type is single element object or null if not fund.
- Example:  
```code  
let menuItem = document.querySelector(".menu-item"); //element with class="menu-item"  
let header = document.querySelector("#header"); // element with id="header"  
let special = document.querySelector("div > p.note"); // CSS selector  
_querySelectorAll_
- It returns all the elements that match a CSS selector.
- Return type is NodeList.
- Example: let items = document.querySelectorAll(".menu-item");  


2. How do you **create and insert a new element into the DOM**?
Answer: First create a new element by using document.createElement(tagName). For add content or attributes
can use .innerText (for add text) or .innerHTML (for add HTML). Then insert it into the DOM using appendChild()
method for add as the first child.
_Example:_  
```code  
<div id="container"></div>  

<script>  
let newPara = document.createElement("p");  
newPara.innerHTML = "<p> This is a new paragraph! </p>";  
document.getElementById("container").appendChild(newPara);  
</script>  
3. What is **Event Bubbling** and how does it work?  
Answer:  
Event Bubbling-  
কোনো element এ event trigger করলে event টি শুধু সেই element এ থেমে যায় না। এই element তার parent,  
সেটি আবার তার grand Parent এই ভাবে Document পর্যন্ত উপরে উঠে যায়। এই উপরে উঠার প্রক্রিয়াকেই Event Bubbling বলে।  
how does it work-  
```code  
<div id="parent">  
<button id="child">Click Me</button>  
</div>  
এখানে button এ click event trigger করে child button এ click করলে first এখানে event হবে   
তারপর সেটা parent div এ যাবে এরপর সেটা body পর্যন্ত যাবে।  

  
4. What is **Event Delegation** in JavaScript? Why is it useful?  
Answer:  
Event Delegation-  
Child element কে আলাদা আলাদা event listener না দিয়ে, parent element কে একটি event listener দিয়ে  
event bubbling ব্যবহার করে child element এর কাজ করানোই হচ্ছে Event Delegation।  
Why is it useful-  
  
- Code কম লিখে বেশি কাজ করানো যায়।  
- website এর Performance optimization ভালো হয়।  
- Dynamic elements handle করা সহজ হয়ে যায়। DOM এ নতুন element এর জন্য আলাদা করে  
আবার event listener বসাতে হয় না। parent দিয়েই কাজ করা যায়।  

  
5. What is the difference between **preventDefault() and stopPropagation()** methods?  
Answer:  
_preventDefault()_  
- It stops default behavior  
- Does not stop Event Bubbling  
- Example: If click on (<a href="">), it's normally navigate to another page. By using preventDefault()  
navigation will stops but event bubbling will not stop.  
stopPropagation()_  
- It stops Event Bubbling  
- Does not stop default behavior  
- Example: If click a button inside a <div>, click event will normally bubble up and also  
trigger the <div> click event listener. By Using e.stopPropagation() on the button click will  
stop the event form reaching the <div>.
