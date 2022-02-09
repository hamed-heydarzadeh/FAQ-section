// traversing the dom
const questions = document.querySelectorAll(".question");
const btns = document.querySelectorAll(".question-btn");
btns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    // console.log(question);
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  })
);
