function calculateCurrentGrade(){
    document.getElementById("warning").innerHTML = "";
    var hw = parseInt(document.getElementById("hwweight").value);
    var tw = parseInt(document.getElementById("tstweight").value);
    var mw = parseInt(document.getElementById("mtmweight").value);
    var qw = parseInt(document.getElementById("qzweight").value);
    var sumofweights = hw + tw + qw + mw;
    if(sumofweights !== 100){
        document.getElementById("qwerty").innerHTML = "The weights you entered do not add up to 100%.";
    }


    var hg = document.getElementById("hwgrds").value;
    var tg = document.getElementById("tstgrds").value;
    var mg = document.getElementById("mtmgrds").value;
    var qg = document.getElementById("qzgrds").value;

    currentgrd = calcsectiongrades(hg, hw) + calcsectiongrades(qg, qw) + calcsectiongrades(tg, tw) + calcsectiongrades(mg, mw);
    document.getElementById("currentgrade").innerHTML = "Current Grade: " + currentgrd + "%";
    return currentgrd;

}
//  This converts the grades of a category to an array, and then finds the average
// of the grades in that category, and then accounts for weight. a is the grades, b is the weight.
function calcsectiongrades(a, b){
    var array = a.split(",");
    sumofarray = 0;
    for(i = 0; i < array.length; i++){
        if(array[i] > 100){
            document.getElementById("warning").innerHTML = "Attention: You entered a score greater than 100%.";
        }
        array[i] = parseInt(array[i]);
        sumofarray += array[i];
    }
    var endgrd = sumofarray * b / 100 / array.length;
    return endgrd;
}
function calculateGradeNeeded(){
    var fw = document.getElementById("finalWeight").value;
    var gd = document.getElementById("gradeDesired").value;
    var nonfinalweight = 100 - fw;
    var nonfinalgrade = nonfinalweight / 100 * calculateCurrentGrade();

    var percentneeded = gd - nonfinalgrade;
    var scoreneeded = percentneeded / fw * 100;

    document.getElementById("gradeneededonfinal").innerHTML = scoreneeded + "%";
    if(scoreneeded > 100){
        document.getElementById("alert").innerHTML = "Good luck on scoring higher than 100%."
    }

}