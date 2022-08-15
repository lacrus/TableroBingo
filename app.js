const spans = document.querySelectorAll('span');
for (let span of spans) {
    span.addEventListener('click', function colorized() {
        console.log(span)
        span.classList.toggle("salio")
      })
}