# How to get console at the bottom of browser
 Ctrl + Shift + D will dock all devtools to left, right, bottom in turn. Press Ctrl + Shift + F if your JS console disappeared, and you want it docked back to bottom within dev tools.

# TASK 1

>> headlines = document.getElementsByTagName("h2")
        HTMLCollection { 0: h2, 1: h2, 2: h2, 3: h2, 4: h2, 5: h2#gallery, 6: h2, 7: h2, 8: h2, 9: h2
        , … }

>> headlines[0].innerHTML
        ""
>> headlines[1].innerHTML
        "Welcome to Pet Resorts Australia’s Doggy Daycare: Where Every Pup is a Priority"
>>headlines[1].innerHTML = "COMP2110 Found to be the Best Unit in the Universe!"
        "COMP2110 Found to be the Best Unit in the Universe!"

- Using for loop

for(let i=0;i<headlines.length;i++) {
  headlines[i].innerHTML = "Welcome to Web Programming";
}


- Using function

const headlines2 = document.getElementsByTagName("h2");
function changeHeader2(message){
      for(let i = 0; i<headlines2.length; i++){
       headlines2[i].innerHTML = message;   } }
changeHeader2("Learning DOM is made so easy");

const headlines3 = document.getElementsByTagName("h3");
function changeHeader3(message){
      for(let i = 0; i<headlines3.length; i++){
       headlines3[i].innerHTML = message;   } }
changeHeader3("Targetting Headlines <h3>");

# Task 2
https://developer.mozilla.org/en-US/docs/Web/CSS/display