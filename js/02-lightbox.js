import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const galleryItemMarkUp = createGalleryItemMarkUp(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryItemMarkUp);

galleryEl.addEventListener('click', createLigthBoxGallery);


function createGalleryItemMarkUp(galleryItems) {
        return galleryItems.map(({ preview, original, description }) => {
            return `
        <a class="gallery__item" href="${original}">
            <img loading="lazy" class="gallery__image" data-src="${preview}" alt="${description}"/>
        </a>
        `})
            .join('');
};

function createLigthBoxGallery(e) {
        e.preventDefault();
    var lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: '250'})
}

 if ('loading' in HTMLImageElement.prototype) {
     imageBuiltInLazyLoad();
  } else {
     imageLazySizesLoad();
 }
  
function imageBuiltInLazyLoad () {
     const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src;
    });
}

function imageLazySizesLoad() {
    const script = document.createElement('script');
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';
    document.body.appendChild(script);
}