        // Add this script to handle scroll events
        const nav = document.querySelector('.nav');
        let lastScrollTop = 0;

        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Scrolling down
                nav.classList.add('scrolled');
            } else {
                // Scrolling up
                nav.classList.remove('scrolled');
            }

            lastScrollTop = scrollTop;
        });
