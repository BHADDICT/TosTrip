
    // ✅ Initialize EmailJS
    (function(){
        emailjs.init("gpdCGcS_YFBkq0RFH"); // replace with your Public Key
    })();

    // Filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const packageCards = document.querySelectorAll('.package-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            packageCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                    card.classList.remove('hidden');
                } else {
                    const cardCategories = card.getAttribute('data-category');
                    if (cardCategories.includes(filterValue)) {
                        card.style.display = 'block';
                        card.classList.remove('hidden');
                    } else {
                        card.style.display = 'none';
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });

    // ✅ Book tour function with EmailJS
    function bookTour(tourName) {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex; justify-content: center; align-items: center;
            z-index: 1000;
        `;

        modal.innerHTML = `
            <div style="background: white; padding: 40px; border-radius: 20px; text-align: center; max-width: 500px; width: 90%;">
                <h2 style="margin-bottom: 20px; color: #333;">Book Your Tour</h2>
                <h3 style="color: #667eea; margin-bottom: 30px;">${tourName}</h3>
                
                <form id="bookingForm" style="text-align: left;">
                    <div style="margin-bottom: 20px;">
                        <label>Full Name:</label>
                        <input type="text" name="user_name" style="width: 100%; padding: 12px;" required>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <label>Email:</label>
                        <input type="email" name="user_email" style="width: 100%; padding: 12px;" required>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <label>Phone:</label>
                        <input type="tel" name="user_phone" style="width: 100%; padding: 12px;" required>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <label>Travel Date:</label>
                        <input type="date" name="travel_date" style="width: 100%; padding: 12px;" required>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <label>Number of Travelers:</label>
                        <select name="travelers" style="width: 100%; padding: 12px;">
                            <option value="1">1 Person</option>
                            <option value="2">2 People</option>
                            <option value="3">3 People</option>
                            <option value="4">4 People</option>
                            <option value="5+">5+ People</option>
                        </select>
                    </div>
                    <input type="hidden" name="tour_name" value="${tourName}">
                    
                    <div style="text-align: center;">
                        <button type="submit" style="background: linear-gradient(45deg, #ff6b6b, #ff8e53); color: white; border: none; padding: 15px 30px; border-radius: 25px; font-weight: 600; cursor: pointer; margin-right: 10px;">Submit Booking</button>
                        <button type="button" onclick="this.closest('div').parentElement.parentElement.remove()" style="background: #6c757d; color: white; border: none; padding: 15px 30px; border-radius: 25px; font-weight: 600; cursor: pointer;">Cancel</button>
                    </div>
                </form>
            </div>
        `;

        document.body.appendChild(modal);

        // ✅ Send form data via EmailJS
        const form = modal.querySelector("#bookingForm");
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            emailjs.sendForm("service_ns14klj", "template_k8n3dup", this)
                .then(() => {
                    window.location.href = "thankyou.html"; // redirect on success
                }, (error) => {
                    console.error("FAILED...", error);
                    alert("❌ Something went wrong. Please try again later.");
                });
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    }

    // Smooth scrolling for CTA button
    document.querySelector('.cta-btn').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#packages').scrollIntoView({ behavior: 'smooth' });
    });

    // Animate stats on scroll
    const observerOptions = { threshold: 0.5, rootMargin: '0px 0px -100px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const finalValue = stat.textContent;
                    const isRating = finalValue.includes('★');
                    if (!isRating) {
                        const numValue = parseInt(finalValue.replace(/\D/g, ''));
                        animateNumber(stat, 0, numValue, finalValue);
                    }
                });
            }
        });
    }, observerOptions);
    observer.observe(document.querySelector('.stats-section'));

    function animateNumber(element, start, end, suffix) {
        const duration = 2000;
        const increment = (end - start) / (duration / 16);
        let current = start;
        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                element.textContent = suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + (suffix.includes('+') ? '+' : '');
            }
        }, 16);
    }

    // Hover effects
    packageCards.forEach(card => {
        card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-10px) rotateX(5deg)');
        card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0) rotateX(0)');
    });

    // Search box
    function addSearchBox() {
        const searchHTML = `
            <div style="text-align: center; margin-bottom: 30px;">
                <input type="text" id="searchBox" placeholder="Search tours..." style="width: 100%; max-width: 500px; padding: 15px 20px; border: 2px solid #eee; border-radius: 25px; font-size: 16px;">
            </div>
        `;
        document.querySelector('.filters').insertAdjacentHTML('beforebegin', searchHTML);
        const searchBox = document.getElementById('searchBox');
        searchBox.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            packageCards.forEach(card => {
                const title = card.querySelector('.package-title').textContent.toLowerCase();
                const location = card.querySelector('.package-location').textContent.toLowerCase();
                const description = card.querySelector('.package-description').textContent.toLowerCase();
                const price = card.querySelector('.package-price').textContent.toLowerCase();
                const matches = title.includes(searchTerm) || location.includes(searchTerm) || description.includes(searchTerm) || price.includes(searchTerm);
                card.style.display = matches || searchTerm === '' ? 'block' : 'none';
            });
        });
    }
    addSearchBox();

    // Price filter
    function addPriceFilter() {
        const priceFilterHTML = `
            <div style="text-align: center; margin: 20px 0;">
                <label style="font-weight: 600; margin-right: 10px;">Price Range:</label>
                <select id="priceFilter" style="padding: 8px 15px; border: 2px solid #eee; border-radius: 15px; background: white; font-size: 14px;">
                    <option value="all">All Prices</option>
                    <option value="0-200">Under $200</option>
                    <option value="200-400">$200 - $400</option>
                    <option value="400+">Over $400</option>
                </select>
            </div>
        `;
        document.querySelector('.filters').insertAdjacentHTML('afterend', priceFilterHTML);
        document.getElementById('priceFilter').addEventListener('change', (e) => {
            const priceRange = e.target.value;
            packageCards.forEach(card => {
                const price = parseInt(card.getAttribute('data-price'));
                let showCard = false;
                switch(priceRange) {
                    case 'all': showCard = true; break;
                    case '0-200': showCard = price < 200; break;
                    case '200-400': showCard = price >= 200 && price <= 400; break;
                    case '400+': showCard = price > 400; break;
                }
                card.style.display = showCard ? 'block' : 'none';
            });
        });
    }
    addPriceFilter();
