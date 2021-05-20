# Hippity hoppity the answers are now my property
A simple javascript code to autofill Flippity answers. To disable it you can just delete the textbox content, it only fills them when you run the code. The funny version let's you hijack the flippity email service. The textboxes' content is used to create the email itself. Click the submit button to send it (it has a 1 minute delay).
### Manual use:
1. Open a Flippity test in your browser, then open the browser's console (```F12```/```Ctrl+Shift+I``` usually, it opens a side window, look for "Console").
2. Copy-paste this javascript code into that console:
```js
for(let i in data) document.getElementById('a'+i).value=data[i][2]
```
3. Press enter to run the script, and your answers should show up in the textboxes.
### Automation with Tampermonkey:
1. Install Tampermonkey into your browser. ([Link](https://www.tampermonkey.net))
2. Click this [link](https://github.com/mark-sharp/flippity/raw/main/flippity-tamperm.user.js) to install the basic script, or this [link](https://github.com/mark-sharp/flippity/raw/main/ultimity-tamperm.user.js) to install the funny one.
### ❗ Important:
 - The script can become outdated if Flippity updates their code. Please leave an issue if that happens, I'll try to fix it quickly. (Last tested: 2021.05.21.)
 - Only works for Scavenger Hunt.
 - The funny version is just an experiment, please don't use it on real tests, if you have to, do it on Flippity's [Demo test](https://www.flippity.net/sh.php?k=1ubDVulJpW7B2NDDuHMA1CtBwRxGiehQQZzeJpExdcwQ).