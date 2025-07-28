document.addEventListener('DOMContentLoaded', () => {
    // Scroll Progress Bar
    const progressBar = document.querySelector('.progress-bar');
    window.addEventListener('scroll', () => {
        const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPosition = document.documentElement.scrollTop;
        const progress = (scrollPosition / scrollTotal) * 100;
        progressBar.style.width = `${progress}%`;
    });

    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', e => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Framer Motion Animations
    const { stagger, animate } = motion;

    const bentoItems = document.querySelectorAll('.bento-item');
    animate(bentoItems, { opacity: [0, 1], y: [20, 0] }, {
        delay: stagger(0.1),
        duration: 0.5,
    });

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        animate(item, { opacity: [0, 1], x: [-100, 0] }, {
            scrollTrigger: {
                target: item,
                offset: ["start end", "center center"]
            }
        });
    });

    // Glare Effect
    const bentoItems = document.querySelectorAll('.bento-item');
    bentoItems.forEach(item => {
        const glare = item.querySelector('.glare');
        item.addEventListener('mousemove', e => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            glare.style.left = `${x - rect.width}px`;
            glare.style.top = `${y - rect.height}px`;
        });
    });
});
