"use strict";
const examples = {
  original: {
    src: "https://raw.githubusercontent.com/Ido-Cohen/TheUnseenView/ce628980ea8888a3225bb7318cf0d2e1971c38f0/src/Components/App/media/cropped.jpg",
    alt: "Original project example before segmentation.",
    caption:
      "Input: the original cropped image from the project’s example files.",
  },
  segmented: {
    src: "https://raw.githubusercontent.com/Ido-Cohen/TheUnseenView/ce628980ea8888a3225bb7318cf0d2e1971c38f0/src/Components/App/media/segmented.png",
    alt: "The example image separated into colored object regions by the segmentation pipeline.",
    caption:
      "Segmentation: the image is separated into regions for pattern selection.",
  },
  pattern: {
    src: "https://raw.githubusercontent.com/Ido-Cohen/TheUnseenView/ce628980ea8888a3225bb7318cf0d2e1971c38f0/src/Components/App/media/pattern.png",
    alt: "Example image transformed into distinct geometric patterns for the detected objects.",
    caption:
      "Pattern assignment: each detected region receives a distinct texture.",
  },
};
const image = document.querySelector("#project-image");
const caption = document.querySelector("#project-caption");
const controls = document.querySelectorAll("[data-example]");
controls.forEach((button) =>
  button.addEventListener("click", () => {
    const example = examples[button.dataset.example];
    if (!example || !image || !caption) return;
    image.src = example.src;
    image.alt = example.alt;
    caption.textContent = example.caption;
    controls.forEach((control) =>
      control.setAttribute("aria-pressed", String(control === button)),
    );
  }),
);
