// Product Data
const products = [
    {
        id: 1,
        name: "Micellar Cleansing Water",
        category: "cleansers",
        price: 9.99,
        oldPrice: 12.99,
        rating: 4.5,
        reviews: 42,
        image: "https://via.placeholder.com/300x300?text=Micellar+Water",
        description: "Gently removes makeup and cleanses skin without rubbing."
    },
    {
        id: 2,
        name: "Vitamin C Brightening Serum",
        category: "face-care",
        price: 14.99,
        oldPrice: 19.99,
        rating: 4.7,
        reviews: 36,
        image: "https://via.placeholder.com/300x300?text=Vitamin+C+Serum",
        description: "Brightens skin and reduces dark spots with natural vitamin C."
    },
    {
        id: 3,
        name: "Hair Food Coconut Mask",
        category: "hair-care",
        price: 12.99,
        oldPrice: 15.99,
        rating: 4.8,
        reviews: 28,
        image: "https://via.placeholder.com/300x300?text=Hair+Food",
        description: "Nourishes and repairs dry, damaged hair with coconut oil."
    },
    {
        id: 4,
        name: "BB Cream with SPF 20",
        category: "bb-creams",
        price: 13.99,
        oldPrice: 16.99,
        rating: 4.3,
        reviews: 31,
        image: "https://via.placeholder.com/300x300?text=BB+Cream",
        description: "Lightweight coverage with sun protection and skincare benefits."
    },
    {
        id: 5,
        name: "Aloe Vera Soothing Gel",
        category: "moisturizers",
        price: 8.99,
        oldPrice: 10.99,
        rating: 4.6,
        reviews: 24,
        image: "https://via.placeholder.com/300x300?text=Aloe+Vera",
        description: "Hydrates and soothes skin with pure aloe vera."
    },
    {
        id: 6,
        name: "Charcoal Purifying Scrub",
        category: "cleansers",
        price: 10.99,
        oldPrice: 12.99,
        rating: 4.4,
        reviews: 19,
        image: "https://via.placeholder.com/300x300?text=Charcoal+Scrub",
        description: "Deep cleans pores and removes impurities with activated charcoal."
    },
    {
        id: 7,
        name: "Rose Water Toner",
        category: "face-care",
        price: 7.99,
        oldPrice: 9.99,
        rating: 4.2,
        reviews: 15,
        image: "https://via.placeholder.com/300x300?text=Rose+Toner",
        description: "Refreshes and balances skin with natural rose water."
    },
    {
        id: 8,
        name: "Ultra-Lift Anti-Wrinkle Cream",
        category: "face-care",
        price: 16.99,
        oldPrice: 21.99,
        rating: 4.5,
        reviews: 27,
        image: "https://via.placeholder.com/300x300?text=Ultra+Lift",
        description: "Reduces appearance of wrinkles and firms skin."
    }
];

// Categories
const categories = [
    { name: "Face Care", id: "face-care", image: "https://via.placeholder.com/400x300?text=Face+Care" },
    { name: "Eye Care", id: "eye-care", image: "https://via.placeholder.com/400x300?text=Eye+Care" },
    { name: "Cleansers", id: "cleansers", image: "https://via.placeholder.com/400x300?text=Cleansers" },
    { name: "Moisturizers", id: "moisturizers", image: "https://via.placeholder.com/400x300?text=Moisturizers" },
    { name: "Makeup", id: "makeup", image: "https://via.placeholder.com/400x300?text=Makeup" },
    { name: "BB Creams", id: "bb-creams", image: "https://via.placeholder.com/400x300?text=BB+Creams" },
    { name: "Body Lotions", id: "body-lotions", image: "https://via.placeholder.com/400x300?text=Body+Lotions" },
    { name: "Shower Gels", id: "shower-gels", image: "https://via.placeholder.com/400x300?text=Shower+Gels" }
];

// Testimonials
const testimonials = [
    {
        name: "Sarah J.",
        rating: 5,
        text: "The Micellar Water is a game changer! It removes all my makeup without irritating my sensitive skin.",
        image: "https://via.placeholder.com/80?text=Customer"
    },
    {
        name: "Michael T.",
        rating: 4.5,
        text: "I love the Vitamin C Serum! My skin looks brighter and more even after just two weeks of use.",
        image: "https://via.placeholder.com/80?text=Customer"
    },
    {
        name: "Emily R.",
        rating: 5,
        text: "The Hair Food mask saved my dry, damaged hair. It's now soft, shiny, and manageable again!",
        image: "https://via.placeholder.com/80?text=Customer"
    }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize page based on current URL
    const path = window.location.pathname.split('/').pop();
    
    if (path === 'index.html' || path === '') {
        initHomePage();
    } else if (path === 'products.html') {
        initProductsPage();
    } else if (path === 'product-detail.html') {
        initProductDetailPage();
    } else if (path === 'cart.html') {
        initCartPage();
    } else if (path === 'feedback.html') {
        initFeedbackPage();
    }
    
    // Common functionality
    initCommonFeatures();
});

function initCommonFeatures() {
    // Update cart count
    updateCartCount();
    
    // Search functionality
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = document.getElementById('searchInput');
            performSearch(searchInput.value);
        });
    }
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }
}

function initHomePage() {
    // Load featured products
    const featuredProductsContainer = document.querySelector('.featured-products');
    if (featuredProductsContainer) {
        const featuredProducts = products.slice(0, 3);
        featuredProductsContainer.innerHTML = featuredProducts.map(product => `
            <div class="col-md-4 mb-4">
                <div class="card product-card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <span class="price">$${product.price.toFixed(2)}</span>
                                ${product.oldPrice ? `<span class="old-price ms-2">$${product.oldPrice.toFixed(2)}</span>` : ''}
                            </div>
                            <button class="btn btn-sm btn-outline-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Load categories
    const categoriesContainer = document.querySelector('.categories');
    if (categoriesContainer) {
        categoriesContainer.innerHTML = categories.slice(0, 3).map(category => `
            <div class="col-md-4 mb-4">
                <div class="category-card">
                    <img src="${category.image}" alt="${category.name}" class="img-fluid rounded">
                    <div class="category-overlay">
                        <h3>${category.name}</h3>
                        <a href="products.html?category=${category.id}" class="btn btn-light">Explore</a>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Load testimonials
    const testimonialsContainer = document.querySelector('.testimonials');
    if (testimonialsContainer) {
        testimonialsContainer.innerHTML = testimonials.map(testimonial => `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <div class="stars mb-3">
                            ${renderStars(testimonial.rating)}
                        </div>
                        <p class="card-text">"${testimonial.text}"</p>
                        <div class="customer">
                            <img src="${testimonial.image}" alt="${testimonial.name}" class="rounded-circle mb-2" width="60">
                            <h5 class="mb-1">${testimonial.name}</h5>
                            <p class="text-muted small">Verified Buyer</p>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Add to cart buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        }
    });
}

function initProductsPage() {
    // Get category from URL
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    // Set category title
    const categoryTitle = document.getElementById('categoryTitle');
    if (categoryTitle && category) {
        const categoryObj = categories.find(c => c.id === category);
        if (categoryObj) {
            categoryTitle.textContent = categoryObj.name;
        }
    }
    
    // Filter products by category if specified
    let filteredProducts = [...products];
    if (category) {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    // Render products
    renderProducts(filteredProducts);
    
    // Sort functionality
    const sortOptions = document.querySelectorAll('.sort-option');
    sortOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const sortType = this.getAttribute('data-sort');
            sortProducts(filteredProducts, sortType);
        });
    });
    
    // Filter functionality
    document.getElementById('applyFilters').addEventListener('click', function() {
        applyFilters(filteredProducts);
    });
    
    document.getElementById('resetFilters').addEventListener('click', function() {
        resetFilters(filteredProducts);
    });
    
    // Price range slider
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.addEventListener('input', function() {
            document.getElementById('priceRangeValue').textContent = `$0 - $${this.value}`;
        });
    }
}

function initProductDetailPage() {
    // Get product ID from URL (in a real app, this would come from the URL)
    const productId = 1; // Default to first product for demo
    const product = products.find(p => p.id === productId);
    
    if (product) {
        // Set product details
        document.getElementById('productTitle').textContent = product.name;
        document.getElementById('productDescription').textContent = product.description;
        document.querySelector('.price .h4').textContent = `$${product.price.toFixed(2)}`;
        if (product.oldPrice) {
            document.querySelector('.price .text-decoration-line-through').textContent = `$${product.oldPrice.toFixed(2)}`;
        } else {
            document.querySelector('.price .text-decoration-line-through').style.display = 'none';
            document.querySelector('.price .badge').style.display = 'none';
        }
        
        // Rating stars
        document.querySelector('.rating .stars').innerHTML = renderStars(product.rating);
        document.querySelector('.rating span').textContent = `(${product.reviews} reviews)`;
        
        // Thumbnail click functionality
        const thumbnails = document.querySelectorAll('.thumbnail-image');
        const mainImage = document.getElementById('mainProductImage');
        
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // Remove active class from all thumbnails
                thumbnails.forEach(t => t.classList.remove('active'));
                // Add active class to clicked thumbnail
                this.classList.add('active');
                // Update main image (in a real app, this would change the image source)
                mainImage.src = this.src;
            });
        });
        
        // Quantity selector
        const minusBtn = document.querySelector('.minus-btn');
        const plusBtn = document.querySelector('.plus-btn');
        const quantityInput = document.querySelector('.quantity-input');
        
        minusBtn.addEventListener('click', function() {
            let value = parseInt(quantityInput.value);
            if (value > 1) {
                quantityInput.value = value - 1;
            }
        });
        
        plusBtn.addEventListener('click', function() {
            let value = parseInt(quantityInput.value);
            if (value < 10) {
                quantityInput.value = value + 1;
            }
        });
        
        // Add to cart button
        document.querySelector('.add-to-cart-btn').addEventListener('click', function() {
            const quantity = parseInt(quantityInput.value);
            addToCart(product.id, quantity);
            alert(`${product.name} has been added to your cart!`);
        });
        
        // Wishlist button
        document.querySelector('.wishlist-btn').addEventListener('click', function() {
            this.innerHTML = '<i class="fas fa-heart"></i> In Wishlist';
            this.classList.remove('btn-outline-secondary');
            this.classList.add('btn-outline-danger');
            alert(`${product.name} has been added to your wishlist!`);
        });
        
        // Rating input
        const ratingStars = document.querySelectorAll('.rating-input i');
        ratingStars.forEach(star => {
            star.addEventListener('click', function() {
                const rating = parseInt(this.getAttribute('data-rating'));
                document.getElementById('selectedRating').value = rating;
                
                // Update star display
                ratingStars.forEach((s, index) => {
                    if (index < rating) {
                        s.classList.add('active');
                        s.classList.remove('far');
                        s.classList.add('fas');
                    } else {
                        s.classList.remove('active');
                        s.classList.remove('fas');
                        s.classList.add('far');
                    }
                });
            });
        });
        
        // Review form
        document.getElementById('reviewForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your review!');
            this.reset();
            // Reset stars
            ratingStars.forEach(star => {
                star.classList.remove('fas', 'active');
                star.classList.add('far');
            });
            document.getElementById('selectedRating').value = 0;
        });
        
        // Load related products
        const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id);
        const relatedContainer = document.querySelector('.related-products');
        if (relatedContainer && relatedProducts.length > 0) {
            relatedContainer.innerHTML = relatedProducts.slice(0, 4).map(p => `
                <div class="col-md-3 mb-4">
                    <div class="card product-card h-100">
                        <img src="${p.image}" class="card-img-top" alt="${p.name}">
                        <div class="card-body">
                            <h5 class="card-title">${p.name}</h5>
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="price">$${p.price.toFixed(2)}</span>
                                <a href="product-detail.html" class="btn btn-sm btn-outline-primary">View</a>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }
}

function initCartPage() {
    renderCart();
    
    // Clear cart button
    document.getElementById('clearCart').addEventListener('click', function() {
        if (confirm('Are you sure you want to clear your cart?')) {
            clearCart();
        }
    });
    
    // Checkout button
    document.getElementById('checkoutBtn').addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Your cart is empty. Please add some products before checking out.');
        } else {
            alert('Proceeding to checkout! In a real app, this would redirect to the checkout page.');
        }
    });
    
    // Promo code form
    document.getElementById('promoForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Promo code applied! In a real app, this would validate and apply the discount.');
    });
    
    // Load recently viewed (demo with random products)
    const recentlyViewed = [...products].sort(() => 0.5 - Math.random()).slice(0, 4);
    const recentlyViewedContainer = document.querySelector('.recently-viewed');
    if (recentlyViewedContainer) {
        recentlyViewedContainer.innerHTML = recentlyViewed.map(product => `
            <div class="col-md-3 mb-4">
                <div class="card product-card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <div class="d-flex justify-content-between align-items-center">
                            <span
