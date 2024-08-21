const theParagraph = document.querySelectorAll(".paragraph");

document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".container");

  faqContainer.addEventListener("click", (e) => {
    const faqHeader = e.target.closest(".main-header");
    if (!faqHeader) return;
    const faqGroup = faqHeader.parentElement;

    const faqParagraph = faqGroup.querySelector(".paragraph");
    const btnIcon = faqHeader.querySelector(".btn");

    btnIcon.classList.toggle("open");
    faqParagraph.classList.toggle("open");

    const otherGroups = faqContainer.querySelectorAll(".main-section");
    otherGroups.forEach((group) => {
      if (group !== faqGroup) {
        const otherParagraph = group.querySelector(".paragraph");
        const otherBtnIcon = group.querySelector(".btn");
        otherBtnIcon.classList.remove("open");
        otherParagraph.classList.remove("open");
      }
    });
  });
});
