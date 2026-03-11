import productPlaceholder from '../assets/images/product-placeholder.svg';
import heroPlaceholder from '../assets/images/hero-placeholder.svg';
import servicePlaceholder from '../assets/images/service-placeholder.svg';

export const whatsappNumber = "919876543210"; // dummy number 

export const services = [
    {
        id: 1,
        title: 'Eye Checkup',
        description: 'Comprehensive vision checking with high precision using the latest computerized equipment.',
        icon: 'Eye',
        price: 'Starts at ₹200',
    },
    {
        id: 2,
        title: 'Lens Replacement',
        description: 'Update your current frames with new prescription lenses quickly and easily.',
        icon: 'Glasses',
        price: 'Starts at ₹499',
    },
    {
        id: 3,
        title: 'Frame Adjustment & Repair',
        description: 'Get your frames adjusted perfectly to fit your face, or repaired quickly.',
        icon: 'ScanEye',
        price: 'Free / Varies',
    },
    {
        id: 4,
        title: 'Computer Vision Test',
        description: 'Specialized testing for those experiencing digital eye strain and blue light exposure.',
        icon: 'Monitor',
        price: 'Starts at ₹300',
    },
    {
        id: 5,
        title: 'Contact Lens Fitting',
        description: 'Professional fitting for daily, weekly, or monthly disposable contact lenses.',
        icon: 'Smile',
        price: 'Starts at ₹400',
    },
    {
        id: 6,
        title: 'Kids Eyewear Specialist',
        description: 'Durable, colorful, and flexible frames designed specifically for active children.',
        icon: 'Sun',
        price: 'Starts at ₹599',
    }
];

export const products = [
    { id: 1, name: 'Classic Aviator', category: 'Sunglasses', price: 1299, image: productPlaceholder },
    { id: 2, name: 'Chic Cat-Eye', category: 'Eyeglasses', price: 950, image: productPlaceholder },
    { id: 3, name: 'Retro Round', category: 'Eyeglasses', price: 850, image: productPlaceholder },
    { id: 4, name: 'Sport Wrap', category: 'Sunglasses', price: 1500, image: productPlaceholder },
    { id: 5, name: 'Elegant Semi-Rimless', category: 'Eyeglasses', price: 1100, image: productPlaceholder },
    { id: 6, name: 'Kids Flexible Flex', category: 'Kids Frames', price: 600, image: productPlaceholder },
    { id: 7, name: 'Daily Disposables', category: 'Contact Lenses', price: 400, image: productPlaceholder },
    { id: 8, name: 'Polarized Wayfarer', category: 'Sunglasses', price: 1800, image: productPlaceholder },
];

export const testimonials = [
    {
        id: 1,
        name: 'Sarah Jenkins',
        rating: 5,
        text: 'Great collection of frames and friendly service. Highly recommend the Srikakulam main branch!',
    },
    {
        id: 2,
        name: 'David Patel',
        rating: 5,
        text: 'Very professional staff. Helped me pick the perfect computer glasses that have eliminated my headaches.',
    },
    {
        id: 3,
        name: 'Emily Chen',
        rating: 4,
        text: 'Excellent eye checkup and super fast delivery on my custom prescription glasses.',
    },
];

export const branches = [
    {
        id: 1,
        name: 'Srikakulam Main Branch',
        address: '123 Main Road, Srikakulam CBD, Andhra Pradesh 532001',
        phone: '+91 98765 43210',
        whatsappMessage: 'Hello Srikakulam Main Branch, I want to inquire about...',
        mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15190.495031206198!2d83.89966145!3d18.2988118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c130000000001%3A0x0!2sSrikakulam!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin'
    },
    {
        id: 2,
        name: 'Srikakulam City Center Branch',
        address: 'Level 2, City Center Mall, Srikakulam, Andhra Pradesh 532001',
        phone: '+91 98765 43211',
        whatsappMessage: 'Hello Srikakulam City Center Branch, I want to inquire about...',
        mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15190.495031206198!2d83.89966145!3d18.2988118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c130000000001%3A0x0!2sSrikakulam!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin'
    },
    {
        id: 3,
        name: 'Rajam Branch',
        address: '45 Bazar Street, Rajam, Andhra Pradesh 532127',
        phone: '+91 98765 43212',
        whatsappMessage: 'Hello Rajam Branch, I want to inquire about...',
        mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60741.53032120302!2d83.7431359!3d18.4419973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c631eaf000001%3A0x1d4bcdcb2f7aab59!2sRajam!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin'
    }
];

// Re-export images for components to use
export { productPlaceholder, heroPlaceholder, servicePlaceholder };
