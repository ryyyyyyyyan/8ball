// Magic 8 Ball by Ryan

// Event Listener on Button Image
document.getElementById("btn").addEventListener("click", clicked);

function clicked() {
  // Get the question
  let question = document.getElementById("i").value;
  if (question.toLowerCase() === "Does a magic 8 ball actually work?") {
    document.getElementById("o").innerHTML = "How dare you doubt me!";
  } else if (question.toLowerCase() === "Is JavaScript awesome?") {
    document.getElementById("o").innerHTML = "Of Course!";
  } else {
    let r = Math.random();
    if (r < 0.2) {
      document.getElementById("o").innerHTML = "Without a Doubt!";
    } else if (r < 0.4) {
      document.getElementById("o").innerHTML = "As I see it, yes!";
    } else if (r < 0.6) {
      document.getElementById("o").innerHTML = "Concentrate and ask again!";
    } else if (r < 0.8) {
      document.getElementById("o").innerHTML = "Don't count on it!";
    } else {
      document.getElementById("o").innerHTML = "Outlook not so good!";
    }
  }
}
