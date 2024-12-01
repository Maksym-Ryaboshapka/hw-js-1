const listEl = document.querySelector(".js-gallery");
const lightboxEl = document.querySelector(".js-lightbox");
const lightboxOverlayEl = document.querySelector(".lightbox__overlay");
const closeModalEl = document.querySelector(
  'button[data-action="close-lightbox"]'
);
const lightboxImgEl = document.querySelector(".lightbox__image");

const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

galleryItems.map((img) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("gallery__item");

  const imgEl = document.createElement("img");
  imgEl.classList.add("gallery__image");
  imgEl.src = img.original;
  imgEl.dataset.source = img.preview;

  listEl.append(itemEl);
  itemEl.append(imgEl);
});

const openModal = (e) => {
  if (e.target.closest(".gallery__item")) {
    listEl.removeEventListener("click", openModal);

    closeModalEl.addEventListener("click", closeModal);
    lightboxEl.addEventListener("click", (e) => {
      if (e.target === lightboxOverlayEl) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") closeModal();
    });

    lightboxEl.classList.add("is-open");
    document.body.classList.add("no-scroll");
    lightboxImgEl.src =
      e.target.closest(".gallery__item").firstChild.dataset.source;
  }
};

const closeModal = (e) => {
  closeModalEl.removeEventListener("click", closeModal);
  lightboxEl.removeEventListener("click", (e) => {
    if (e.target === lightboxOverlayEl) {
      closeModal();
    }
  });
  document.removeEventListener("keydown", (e) => {
    if (e.code === "Escape") closeModal();
  });

  listEl.addEventListener("click", openModal);

  lightboxEl.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
};

listEl.addEventListener("click", openModal);
