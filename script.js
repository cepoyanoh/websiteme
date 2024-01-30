const profilePhoto = document.querySelector('.profile-photo');

profilePhoto.addEventListener('mouseover', () => {
  profilePhoto.style.transform = 'scale(1.1)';
});

profilePhoto.addEventListener('mouseout', () => {
  profilePhoto.style.transform = 'scale(1)';
});