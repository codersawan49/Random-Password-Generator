let length = 12;
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let nums = "0123456789";
let symobols = "~!@#$%^&*()_-+={[}]|\:;<,>.?/";
let all = upper + lower + nums + symobols;
let inputval = document.querySelector("input");
function passGenerate() {
  let pass = "";
  pass += upper[Math.floor(Math.random() * upper.length)]

  pass += lower[Math.floor(Math.random() * lower.length)];

  pass += nums[Math.floor(Math.random() * nums.length)];

  pass += symobols[Math.floor(Math.random() * symobols.length)];
  while (length > pass.length) {
    // Tab to edit
    pass += all[Math.floor(Math.random() * all.length)];
    
  }
  inputval.value = pass;
}
function copy() {
  // Tab to edit
   inputval.select()
   document.execCommand('copy');
}
