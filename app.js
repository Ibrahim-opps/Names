let names = ["Ali", "Ahmed", "Bilal", "Areeba", "Sara"];
let count = 0;
for (let i = 0; i < names.length; i++) {
  if (names[i][0] === 'A') {
    console.log(names[i]);  
    count++;
    document.write(names[i] + "<br>");
    count++;
  }
}
if (count > 0) {
  console.log(count + " names start with 'A'");
} else {
  console.log("No names start with 'A'");
}
