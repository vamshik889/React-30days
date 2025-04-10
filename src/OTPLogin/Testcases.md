

1.Forward functionality

    -when no digit in the input > upon typing digit apply the new key in it and focus the immidiate next input

    -when there is a digit
            -when cursor position at the end of the digit:apply the new value to the next input and focus the next to next input
            
            -when cursor is at the beginning of the digit :apply new value to current input and slide it's older value to next input and focus the next to next input

2.Backward functionality
3.Arrow keys functionality

each box should take one input only
Forward functionality: when enter the digit in the input cursor should be moved to next input means focus should be the next input

whenever you are clicking backspace cursor should come to previous input

we can also navigate by using the arrow keys from keyboard

cursor position testcases:
        1)if the cursor is next to the digit  upon entering the value it should appear in the next input box and then it should focus next to next input box
        2)cursor position left to the digit and enter any digit again then the current entered value should be for the same input box and the existing digit should be slided to the next input box