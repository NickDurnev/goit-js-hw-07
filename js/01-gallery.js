import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const galleryItemMarkUp = createGalleryItemMarkUp(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryItemMarkUp);

galleryEl.addEventListener('click', galleryModal);


function createGalleryItemMarkUp(galleryItems) {
        return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
        `})
        .join('');
};

function galleryModal(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }

    const activeGalleryItem = e.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${activeGalleryItem}" width="800" height="600">
    `);

    instance.show();

    const keyCloseClick = (e) => {
        if (e.key === 'Escape') {
            closeGalleryModal(instance)
        }
    };

    document.addEventListener('keydown', keyCloseClick);

    function closeGalleryModal(instance) {
    instance.close();
    document.removeEventListener('keydown', keyCloseClick);
    };
}   

