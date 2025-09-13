// ===== Business Data =====
let businesses = [];

// Icons and Labels for business types
const businessIcons = {
    hotel: 'fas fa-hotel',
    restaurant: 'fas fa-utensils',
    transport: 'fas fa-bus',
    guide: 'fas fa-user-tie',
    activity: 'fas fa-map-marked-alt',
    other: 'fas fa-store'
};

const businessLabels = {
    hotel: 'Hotel/Resort',
    restaurant: 'Restaurant',
    transport: 'Transportation',
    guide: 'Tour Guide',
    activity: 'Activities/Tours',
    other: 'Other'
};

// ===== Sample Data =====
const sampleBusinesses = [
    { id: 1, name: 'Sunset Hotel', type: 'hotel', owner: 'Sokha Lim', phone: '012345678', email: 'sunset@example.com', address: '123 Riverside, Phnom Penh', province: 'phnom-penh', website: '', description: 'Luxury hotel with river view.', yearsInBusiness: 5, capacity: '50 rooms', languages: 'Khmer, English', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/499700022.jpg?k=5619dfdcf7e73240d2ad110684eb2a9dae321dbe31524d6d56039f9feda7f769&o=&hp=1' },
    { id: 2, name: 'Angkor Paradise', type: 'hotel', owner: 'Chenda Vong', phone: '012345679', email: 'angkor@example.com', address: '456 Siem Reap St', province: 'siem-reap', website: '', description: 'Comfortable stay near Angkor Wat.', yearsInBusiness: 8, capacity: '40 rooms', languages: 'Khmer, English', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/492645985.jpg?k=ac115b4e116b9642063d37d4c1b3c1fb410f372aa5c835507077472003fc02f4&o=&hp=1' },
    { id: 3, name: 'Kampot Riverside Hotel', type: 'hotel', owner: 'Rithy Chan', phone: '012345680', email: 'kampot@example.com', address: '78 Kampot Rd', province: 'kampot', website: '', description: 'Cozy hotel by the river.', yearsInBusiness: 3, capacity: '25 rooms', languages: 'Khmer, English', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/408716336.jpg?k=b15c2b60e78ed1554a3ac7dfc02c8e7ba3ffd82a49a1cc34feeeed897e4c518d&o=&hp=1' },
    { id: 4, name: 'Battambang Boutique', type: 'hotel', owner: 'Srey Mom', phone: '012345681', email: 'battambang@example.com', address: '12 Battambang St', province: 'battambang', website: '', description: 'Stylish boutique hotel.', yearsInBusiness: 6, capacity: '20 rooms', languages: 'Khmer, English', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/375981775.jpg?k=94032176b7da61c2b743c2fe8bc7b9596d94ca7dd286dc58f6b406e7b21f0a44&o=&hp=1' },
    { id: 5, name: 'Siem Reap Inn', type: 'hotel', owner: 'Vanna Chum', phone: '012345682', email: 'inn@example.com', address: '89 Old Market St', province: 'siem-reap', website: '', description: 'Budget-friendly inn.', yearsInBusiness: 4, capacity: '15 rooms', languages: 'Khmer, English', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/28/d7/22/saem-siemreap-hotel.jpg?w=900&h=500&s=1' },

    { id: 6, name: 'Mekong Dine', type: 'restaurant', owner: 'Sophea Heng', phone: '012345683', email: 'mekong@example.com', address: '22 Riverside, Phnom Penh', province: 'phnom-penh', website: '', description: 'Authentic Khmer cuisine.', yearsInBusiness: 7, capacity: '60 seats', languages: 'Khmer, English', image: 'https://cdn.myguestdiary.com/uploads/1079/__page__mekongdining1.jpg?width=0&height=0&mode=crop' },
    { id: 7, name: 'Angkor Taste', type: 'restaurant', owner: 'Kosal Dara', phone: '012345684', email: 'angkorTaste@example.com', address: '33 Siem Reap St', province: 'siem-reap', website: '', description: 'Fusion Cambodian dishes.', yearsInBusiness: 5, capacity: '40 seats', languages: 'Khmer, English', image: 'https://s3-media0.fl.yelpcdn.com/bphoto/evvRNwm2JTZRK0NNcd6m-Q/348s.jpg' },
    { id: 8, name: 'Pepper & Salt', type: 'restaurant', owner: 'Sreymom Nhean', phone: '012345685', email: 'pepper@example.com', address: '15 Battambang St', province: 'battambang', website: '', description: 'Modern cuisine and cocktails.', yearsInBusiness: 6, capacity: '50 seats', languages: 'Khmer, English', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/e7/a5/31/salt-pepper.jpg?w=900&h=500&s=1' },
    { id: 9, name: 'Kampot Seafood', type: 'restaurant', owner: 'Chakry Hem', phone: '012345686', email: 'kampotSeafood@example.com', address: '12 River St', province: 'kampot', website: '', description: 'Fresh seafood daily.', yearsInBusiness: 4, capacity: '45 seats', languages: 'Khmer, English', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7hY5SHePuWHFJ_0NqLFTaTwAI4ADiph7SnA&s' },
    { id: 10, name: 'Phnom Penh Bistro', type: 'restaurant', owner: 'Rithy Sok', phone: '012345687', email: 'bistro@example.com', address: '50 Central St', province: 'phnom-penh', website: '', description: 'Cozy bistro with local flavor.', yearsInBusiness: 3, capacity: '30 seats', languages: 'Khmer, English', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/c7/b5/f3/interior.jpg?w=900&h=-1&s=1' },

    { id: 11, name: 'Phnom Penh Bus Co', type: 'transport', owner: 'Vuthy Chhay', phone: '012345688', email: 'bus@example.com', address: '101 City Center', province: 'phnom-penh', website: '', description: 'Reliable city buses.', yearsInBusiness: 10, capacity: '50 passengers', languages: 'Khmer, English', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Phnom_Penh_bus_02.jpg' },
    { id: 12, name: 'Siem Reap Taxis', type: 'transport', owner: 'Sokun Phan', phone: '012345689', email: 'taxi@example.com', address: '12 Old Market Rd', province: 'siem-reap', website: '', description: 'Safe and comfortable taxis.', yearsInBusiness: 7, capacity: '10 vehicles', languages: 'Khmer, English', image: 'https://www.taxiincambodia.com/wp-content/uploads/2023/07/Siem-Reap-Taxi.jpg' },
    { id: 13, name: 'Kampot Mini Vans', type: 'transport', owner: 'Chenda Lim', phone: '012345690', email: 'van@example.com', address: '55 Kampot Rd', province: 'kampot', website: '', description: 'Private mini-van services.', yearsInBusiness: 5, capacity: '15 passengers', languages: 'Khmer, English', image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/8f/b1/0b.jpg' },

    { id: 14, name: 'Pisey Heng', type: 'guide', owner: 'Pisey Heng', phone: '012345691', email: 'guide@example.com', address: 'Siem Reap City', province: 'siem-reap', website: '', description: 'Certified local guides.', yearsInBusiness: 8, capacity: 'Groups up to 20', languages: 'Khmer, English', image: './img/pu6.png' },

    { id: 15, name: 'Sophal', type: 'activity', owner: 'Sophal Chum', phone: '012345692', email: 'boat@example.com', address: 'Tonle Sap', province: 'siem-reap', website: '', description: 'Experience floating villages.', yearsInBusiness: 5, capacity: '15 passengers', languages: 'Khmer, English', image: './img/pu5.jpg' },
    { id: 16, name: 'Heng Panha', type: 'activity', owner: 'Heng Panha', phone: '012345693', email: 'walk@example.com', address: 'Central Phnom Penh', province: 'phnom-penh', website: '', description: 'Walking tours of the capital.', yearsInBusiness: 4, capacity: '20 participants', languages: 'Khmer, English', image: './img/pu3.jpg' }
];

// ===== LocalStorage Functions =====
function saveBusinesses() {
    localStorage.setItem('businesses', JSON.stringify(businesses));
}

function loadBusinesses() {
    const stored = localStorage.getItem('businesses');
    if (stored) {
        businesses = JSON.parse(stored);
    } else {
        businesses = sampleBusinesses;
        saveBusinesses();
    }
}

// ===== Tabs =====
document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', e => {
        e.preventDefault();
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

// ===== Filters =====
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        filterBusinesses(this.dataset.filter);
    });
});

// ===== Modal =====
const modal = document.getElementById('registrationModal');
const registerBtn = document.getElementById('registerBtn');
const closeBtn = document.querySelector('.close');
const form = document.getElementById('businessRegistrationForm');
const successMessage = document.getElementById('successMessage');
const imageInput = document.getElementById('businessImage');
const imagePreview = document.getElementById('imagePreview');

registerBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', e => { if (e.target === modal) closeModal(); });

function openModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    form.style.display = 'block';
    successMessage.style.display = 'none';
    form.reset();
    imagePreview.src = '';
    imagePreview.style.display = 'none';
    delete form.dataset.editingId;
}

// ===== Image Preview =====
imageInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = e => {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        imagePreview.src = '';
        imagePreview.style.display = 'none';
    }
});

// ===== Form Submission =====
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const requiredFields = ['businessName', 'businessType', 'ownerName', 'phone', 'email', 'address', 'province', 'description'];
    let isValid = true;
    requiredFields.forEach(field => {
        const input = document.getElementById(field);
        if (!data[field] || data[field].trim() === '') {
            input.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            input.style.borderColor = '#e1e5e9';
        }
    });
    if (!data.terms) {
        document.getElementById('terms').style.outline = '2px solid #e74c3c';
        isValid = false;
    } else {
        document.getElementById('terms').style.outline = 'none';
    }

    if (!isValid) {
        alert('Please fill in all required fields and accept the terms of service.');
        return;
    }

    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;

    const file = imageInput.files[0];

    const newBusiness = {
        id: Date.now(),
        name: data.businessName,
        type: data.businessType,
        owner: data.ownerName,
        phone: data.phone,
        email: data.email,
        address: data.address,
        province: data.province,
        website: data.website || '',
        description: data.description,
        yearsInBusiness: data.yearsInBusiness || '0',
        capacity: data.capacity || 'Not specified',
        languages: data.languages || 'Khmer, English',
        joinedDate: new Date().toISOString().split('T')[0],
        image: ''
    };

    function finishSave() {
        const editingId = form.dataset.editingId;
        if (editingId) {
            const index = businesses.findIndex(b => b.id === Number(editingId));
            if (index !== -1) {
                businesses[index] = { ...businesses[index], ...newBusiness };
                if (newBusiness.image) businesses[index].image = newBusiness.image;
            }
            delete form.dataset.editingId;
        } else {
            businesses.push(newBusiness);
        }
        saveBusinesses();
        form.style.display = 'none';
        successMessage.style.display = 'block';
        submitBtn.textContent = 'Submit Registration';
        submitBtn.disabled = false;
        renderBusinesses();

        setTimeout(() => {
            closeModal();
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            document.querySelector('[data-tab="browse"]').classList.add('active');
            document.getElementById('browse').classList.add('active');
        }, 1500);
    }

    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            newBusiness.image = event.target.result;
            finishSave();
        };
        reader.readAsDataURL(file);
    } else {
        finishSave();
    }
});

// ===== Render Businesses =====
function renderBusinesses() {
    const grid = document.getElementById('businessGrid');
    const emptyState = document.getElementById('emptyState');

    if (!businesses.length) {
        emptyState.style.display = 'block';
        emptyState.innerHTML = `<i class="fas fa-search"></i><h3>No businesses registered yet. Be the first to add one!</h3>`;
        grid.innerHTML = '';
        return;
    }

    emptyState.style.display = 'none';
    grid.innerHTML = businesses.map(b => `
        <div class="business-card" data-type="${b.type}">
            <div class="business-header" style="background-image: url('${b.image || "img/no-image.png"}')">
                <div class="business-icon"><i class="${businessIcons[b.type] || businessIcons.other}"></i></div>
                <div class="business-name">${b.name}</div>
                <div class="business-type">${businessLabels[b.type] || b.type}</div>
            </div>
            <div class="business-info">
                <div class="business-detail"><i class="fas fa-user"></i><span>${b.owner}</span></div>
                <div class="business-detail"><i class="fas fa-map-marker-alt"></i><span>${b.province.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span></div>
                <div class="business-detail"><i class="fas fa-clock"></i><span>${b.yearsInBusiness} years</span></div>
                <div class="business-detail"><i class="fas fa-users"></i><span>${b.capacity}</span></div>
                <div class="business-detail"><i class="fas fa-language"></i><span>${b.languages}</span></div>
                <div class="business-description">${b.description}</div>
            </div>
            <div class="business-footer">
                <div class="business-rating">
                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                    <span style="margin-left:5px;">New Partner</span>
                </div>
                <a href="tel:${b.phone.replace(/\s+/g,'')}" class="contact-btn"><i class="fas fa-phone"></i></a>
                <a href="#" class="edit-btn" data-id="${b.id}"><i class="fas fa-edit"></i> Edit</a>
            </div>
        </div>
    `).join('');
}

// ===== Edit Button Click =====
document.addEventListener('click', function(e) {
    if (e.target.closest('.edit-btn')) {
        e.preventDefault();
        const id = Number(e.target.closest('.edit-btn').dataset.id);
        openEditModal(id);
    }
});

function openEditModal(id) {
    const business = businesses.find(b => b.id === id);
    if (!business) return;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    form.businessName.value = business.name;
    form.businessType.value = business.type;
    form.ownerName.value = business.owner;
    form.phone.value = business.phone;
    form.email.value = business.email;
    form.address.value = business.address;
    form.province.value = business.province;
    form.website.value = business.website;
    form.description.value = business.description;
    form.yearsInBusiness.value = business.yearsInBusiness;
    form.capacity.value = business.capacity;
    form.languages.value = business.languages;

    if (business.image) {
        imagePreview.src = business.image;
        imagePreview.style.display = 'block';
    } else {
        imagePreview.src = '';
        imagePreview.style.display = 'none';
    }

    form.dataset.editingId = id;
}

// ===== Filter Businesses =====
function filterBusinesses(filter) {
    const cards = document.querySelectorAll('.business-card');
    const emptyState = document.getElementById('emptyState');
    let visibleCount = 0;

    cards.forEach(card => {
        if (filter === 'all' || card.dataset.type === filter) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    if (visibleCount === 0 && businesses.length > 0) {
        emptyState.innerHTML = `<i class="fas fa-search"></i><h3>No businesses found for this filter.</h3>`;
        emptyState.style.display = 'block';
    } else if (businesses.length > 0) {
        emptyState.style.display = 'none';
    }
}


// ===== Initial Load =====
loadBusinesses();
renderBusinesses();
filterBusinesses('all');
