document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.achievement-number');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target + '+';
        }
        
        function updateCount() {
            const count = +counter.innerText;
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target + (counter.getAttribute('data-count') === '8' ? '+' : '');
            }
        }
    });
});
