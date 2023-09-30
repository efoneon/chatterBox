function start() {
  document.getElementById("cts").addEventListener("click", (event) => {
    event.target.textContent = "Hello world!";
  });
}

start();
