8function calculateGrade() {
  const marks = [
    parseFloat(document.getElementById("sub1").value),
    parseFloat(document.getElementById("sub2").value),
    parseFloat(document.getElementById("sub3").value),
    parseFloat(document.getElementById("sub4").value),
    parseFloat(document.getElementById("sub5").value)
  ];

  if (marks.some(isNaN)) {
    document.getElementById("result").innerText = "Please enter valid marks for all subjects.";
    return;
  }

  const total = marks.reduce((a, b) => a + b, 0);
  const average = total / marks.length;
  let grade = "";

  if (average >= 90) grade = "A+";
  else if (average >= 80) grade = "A";
  else if (average >= 70) grade = "B";
  else if (average >= 60) grade = "C";
  else if (average >= 50) grade = "D";
  else grade = "F";

  document.getElementById("result").innerText = `Total: ${total}\nAverage: ${average.toFixed(2)}\nGrade: ${grade}`;
}
