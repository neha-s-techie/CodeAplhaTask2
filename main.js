const images = document.querySelectorAll('.gallery img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImage');
    let currentIndex = 0;

    images.forEach((img, index) => {
      img.addEventListener('click', () => {
        currentIndex = index;
        showImage(currentIndex)
        modal.style.display = 'flex'
      })
    })

    function showImage(index) {
      modalImg.src = images[index].src
    }

    function closeModal() {
      modal.style.display = 'none';
    }

    function changeImage(direction) {
      currentIndex += direction;
      if (currentIndex < 0) currentIndex = images.length - 1
      if (currentIndex >= images.length) currentIndex = 0
      showImage(currentIndex);
    }

    window.addEventListener('click', (e) => {
      if (e.target === modal) closeModal()
    })