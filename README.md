# Hippity hoppity the answers are now my property
A simple javascript code snippet to show/reveal Flippity answers immadiately upon opening a question and fill it automatically into the text input field so you won't have to. To disable it you can just delete the textbox content, it only fills them when you run the code.
### 🔮 How to use?
1. Open the Flippity test in your browser, then open the browser's console (F12 usually, it opens a side window, look for "Console").
2. Copy-paste this javascript code into that console.
3. Press enter to run the script.
4. Done. Answers are automatically filled into the textboxes.
### 🔣 Code to copy:
```js
for(var i=0; i<data.length; i++) {
    document.getElementById('a'+i).value=data[i][2];
}
```
### ❗ Important:
 - The script can become outdated if Flippity updates their code. Please leave an issue if that happens, I'll fix it quickly. (Last tested: 2021.03.20.)
 - Only works for Scavenger Hunt.
