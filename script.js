
const photo = document.querySelector('.photo');
const img = document.querySelector('#profile-photo');
if (img) {
  img.addEventListener('load', () => photo.classList.add('has-image'));
}
