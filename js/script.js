document.getElementById("startCalc").addEventListener("click", function () {
  let marks = [];
  let total = 0;
  let subjects = ["Malayalam", "English", "Maths", "Science", "Physics", "Chemistry"];

  // Loop through subjects
  for (let i = 0; i < subjects.length; i++) {
    let mark;

    do {
      let input = prompt(`Enter marks for Subject ${subjects[i]} (0-100):`);

      // Check for ESC or Cancel action 
      
      if (input === null) {
        alert("Calculation cancelled by user.");
        return; 
      }

      input = input.trim();

      mark = parseFloat(input);

    } while (isNaN(mark) || mark < 0 || mark > 100);

    marks.push(mark);
    total += mark;
  }

  // Calculate average and grade
  let average = total / marks.length;
  let grade = "";

  if (average >= 90) grade = "A+";
  else if (average >= 80) grade = "A";
  else if (average >= 70) grade = "B";
  else if (average >= 60) grade = "C";
  else if (average >= 50) grade = "D";
  else grade = "F";

  // Show results in alert
  alert(`Total Marks: ${total}\nAverage: ${average.toFixed(2)}\nGrade: ${grade}`);

  // Display on page
  document.getElementById("total").textContent = total;
  document.getElementById("average").textContent = average.toFixed(2);
  document.getElementById("grade").textContent = grade;
  document.getElementById("result").classList.remove("hidden");
});
