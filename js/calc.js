document.addEventListener("DOMContentLoaded", function(){
var sum = "";
  var buttonsNums = document.querySelectorAll(".buttonNum")
  var scrninput = document.getElementById("screen")
  for (var i = 0; i < buttonsNums.length; i++) {
    var num = buttonsNums[i];

    num.addEventListener("click", function(event){
      // screeninput.innerHTML = this.innerHTML;
      sum += this.innerHTML
      scrninput.innerHTML = sum
    })
  }
    var allOperators = document.querySelectorAll(".operator")
    // var screeninput = document.getElementById("screen")
    for (var i = 0; i < allOperators.length; i++) {
      var ops = allOperators[i];

      ops.addEventListener("click", function(event){
        // screeninput.innerHTML = this.innerHTML;
        sum += this.innerHTML
        scrninput.innerHTML = sum
  })
}
    var equality = document.querySelectorAll(".equals")[0]
    equality.addEventListener("click", function(event){
      // var scrninput = document.getElementById("screen")
      // screeninput.innerHTML = this.innerHTML;
      var result = eval(sum)
      sum = ""
      scrninput.innerHTML = result
    })

    var clear = document.querySelectorAll(".buttonClear")[0]
    clear.addEventListener("click", function(event){
      var screeninput = document.getElementById("screen")
      sum=""
      screeninput.innerHTML = sum;
    })
})
