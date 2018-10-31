const commentsContent = [
    {
        commentText: '"Suspendisse tempor turpis odio, sit amet cursus leo consequat non. Maecenas lacinia faucibus enimqui interdum dolor pulvinar vitae"',
        author: 'John Doe',
    },
    {
        commentText: '"Artemus temporus turpisozekovo odio, cursus leo consequat non. Faucibus enimqui interdum dolor pul, amine dos vintos grande panto"',
        author: 'Artem Zekov',
    },
    {
        commentText: '"Turpis odio, sit amet cursus leo consequat non. Lacinia faucibus enimqui interdum dolor pul. Artemus temporus turpisozekovo odio."',
        author: 'Egor Zekov',
    },
];
const slides = [...document.getElementById('slides').children];
slides.forEach((item, id) => {
    item.addEventListener('click', () => {
        const comment = document.getElementById('comment');
        const author = document.getElementById('author-name');

        comment.innerHTML = commentsContent[id].commentText;
        author.innerHTML = commentsContent[id].author;

        slides.forEach((slide, index) => {
            if (index === id) {
                slide.style.backgroundColor = 'white';
            } else {
                slide.style.backgroundColor = 'transparent';
            }
        });
    });
});