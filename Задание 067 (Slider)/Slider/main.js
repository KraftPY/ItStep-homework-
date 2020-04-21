const imagesData = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg'
];

const dom = {
  btnNext: document.querySelector('.btn-next'),
  btnPrev: document.querySelector('.btn-prev'),
  imgContainer: document.querySelector('.images'),
  miniImgContainer: document.querySelector('.mini_images'),
  numPic: document.querySelector('.num_pic'),
  img: document.querySelector('.img'),
  cur: 0,
  imgHeight: 480,
  imgWidth: 800,
};

dom.imgContainer.innerHTML = imagesData.map(url => `<img src="${url}" alt="slider image" class="img">`).join('');
dom.miniImgContainer.innerHTML = imagesData.map((url, i) => `<img src="${url}" alt="slider image" class="img" data-num="${i}">`).join('');

[...dom.miniImgContainer.childNodes].forEach(el => {
  el.addEventListener('click', (ev) => {
    const num = +ev.target.dataset.num;
    changeImageForNum(num);
  });
});


blurFilter(0);


dom.btnNext.addEventListener('click', () => changeImage());
dom.btnPrev.addEventListener('click', () => changeImage('prev'));

function changeImage(dir = 'next') {
  if (dir == 'next') {
    dom.cur++;
    if (dom.cur >= imagesData.length) {
      dom.cur = 0;
    }
  } else {
    dom.cur--;
    if (dom.cur < 0) {
      dom.cur = imagesData.length - 1;
    }
  }

  dom.imgContainer.style.left = -1 * dom.imgWidth * dom.cur + 'px';
  dom.numPic.innerText = dom.cur + 1;
  blurFilter(dom.cur);
}

function changeImageForNum(num) {
  dom.imgContainer.style.left = -num * dom.imgWidth + 'px';
  dom.numPic.innerText = num + 1;
  dom.cur = num;
  blurFilter(dom.cur);
}

function blurFilter(num) {
  [...dom.miniImgContainer.children].forEach((img, i) => {
    (i !== num) ? img.style.filter = `blur(2px)` : img.style.filter = '';
  });
}


