First Page

Container Row Col
Hide Index [0] not shown on other pages

State
var game = {}
//store what page we are on
current page = 1 (integer)
pages = array []
pages [1], pages[2] //possible increment and JSON(updating buttons, text, hide on multiple pages)

view.bigText
view.actionButton (label, hide/show)
view.smallText
view.resetButton

array on page 5 to recreate symbol, with loop

circle button always in the bottom right
Use CASE_SWITCH

USER ONLY CLICKS

Display different views on page

Responsiveness 

// setup state(text & buttons)

// define mindReader constructor
// function MindReader(bigText, smallText, actionButton, resetButton)

// define state(mindReader) update method
// MindReader.prototype.update = function() {
// if page = 1
// display "I can read your mind" 
// display GO button
// } 

Requirements
To complete the assignment, you must complete the following:

1. Pseudocode the problem in its entirety before you start coding
2. Use JavaScript to successfully show the transition from one view to the next view
Successfully show state management for each step of the single page app ("view" 1, 2, 3, ...)
3. Only create a single index.html
4. No need to refresh the page (manually or using JS)
5. Update state using a variable that tells the computer what 'view' it is
6. Use functions to move forward a view, backward, reset to the first view, and display the correct view on load / after every state change
7. Use Icons of your choice, we recommend either Bootstrap Icons (best) or Font Awesome (second best) but feel free to find your own
8. All multiples of 9 should be the same symbol (this is important for the math gimmick to work)

---

---

---

START

var page = 1 //state

Create state/page
Create Symbols

PROPERTIES/METHODS

mindReader.bigText = "Text" //String
mindReader.actionButton (label, hide/show)
mindReader.smallText = "Text" //String
mindReader.resetButton (label, hide/show)


INIT

Create mindReader object
Create state/page
Create Symbols
Establish the click handlers (resetButton & actionButton)

Init()

startMind{
    populate page
}

symbol Shuffle {
    find information to randomizer symbols array that are divisible by 9
    for numbers to 99 incrementing
    if number is divisible by 9 return symbol
    else return random symbol
}

restartPage{
    return to first Page
}

nextPage{
    increment page
    display buttons and text of that page 
    hide buttons and text
}


If Page = 1

bigText - "I can read your mind"
smallText - Doesnt exist/Hide
actionButton - Doesnt exist/Hide
resetButton - "GO" to page 1

If Page = 2

bigText - "Pick a number from 01-99"
smallText - "when you have your number click next
actionButton - "Next" go to page 2
resetButton - "Reset" go back to page 0

If Page = 3

bigText "Add both digits together to get a new number"
smallText - "Ex 14 is 1 + 4 = 5" & "Click Next to Proceed"
actionButton - "Next" go to page 3
resetButton - "Reset" go back to page 0

If Page = 4

bigText - "Subtract your new number from the original"
smallText - "Ex 14 - 5 = 9" & "Click Next to Proceed"
actionButton "Next" go to page 4
resetButton - "Reset" go back to page 0

If Page = 5

bigText - List of symbols
smallText - "Find your number.  Note the symbol beside your number."
actionButton - "Reveal" go to page 5
resetButton - "Reset" go back to page 0
addSymbols - Add scrolling symbols to this page

If Page = 6

bigText - Symbol multiple of 9
smallText - "Your symbol is:" & Symbol multiple of 9
actionButton - Doesnt exist/Hide
resetButton - "Reset" go back to page 0



END

- need to figure out how to randomize symbols
