import optoHeroImg from '../assets/images/optometrist_hero_1773248445907.png';
import storeHeroImg from '../assets/images/store_interior_hero_1773248463974.png';
import fashionHeroImg from '../assets/images/fashion_hero_eyewear.png';
import eyeCheckupImg from '../assets/images/service_eye_checkup_1773248480854.png';
import lensReplacementImg from '../assets/images/service_lens_replacement_1773248497897.png';
import frameRepairImg from '../assets/images/service_frame_repair_1773248516592.png';
import computerVisionImg from '../assets/images/service_computer_vision_1773248533880.png';
import contactLensImg from '../assets/images/service_contact_lens_1773248553198.png';
import kidsEyewearImg from '../assets/images/service_kids_eyewear_1773248573057.png';

import aviatorImg from '../assets/images/aviator_sunglasses_1773247984413.png';
import cateyeImg from '../assets/images/cateye_eyeglasses_1773248002844.png';
import roundImg from '../assets/images/round_eyeglasses_1773248020397.png';
import sportImg from '../assets/images/sport_sunglasses_1773248037568.png';
import semiRimlessImg from '../assets/images/semi_rimless_1773248058091.png';
import kidsImg from '../assets/images/kids_eyeglasses_1773248073676.png';
import contactLensesImg from '../assets/images/contact_lenses_1773248088333.png';
import wayfarerImg from '../assets/images/wayfarer_sunglasses_1773248103948.png';
export const whatsappNumber = "919494303030";

export const services = [
    {
        id: 1,
        title: 'Eye Checkup',
        description: 'Complete eye testing with the latest computer machines for perfect vision.',
        icon: 'Eye',
        price: 'Starts at ₹200',
        image: eyeCheckupImg,
    },
    {
        id: 2,
        title: 'Lens Replacement',
        description: 'Change your old lenses with new ones in just 10 minutes with expert care.',
        icon: 'Glasses',
        price: 'Starts at ₹499',
        image: lensReplacementImg,
    },
    {
        id: 3,
        title: 'Frame Setting & Repair',
        description: 'Free frame setting and quick repairs to make your glasses feel like new.',
        icon: 'ScanEye',
        price: 'Free / Varies',
        image: frameRepairImg,
    },
    {
        id: 4,
        title: 'Computer Glasses',
        description: 'Best blue-cut glasses for mobile and computer users to reduce eye strain.',
        icon: 'Monitor',
        price: 'Starts at ₹300',
        image: computerVisionImg,
    },
    {
        id: 5,
        title: 'Contact Lenses',
        description: 'Get the perfect and comfortable contact lenses for your eyes.',
        icon: 'Smile',
        price: 'Starts at ₹400',
        image: contactLensImg,
    },
    {
        id: 6,
        title: 'Kids Specialists',
        description: 'Strong, colorful and flexible glasses specially made for your kids.',
        icon: 'Sun',
        price: 'Starts at ₹599',
        image: kidsEyewearImg,
    }
];

export const products = [
    { id: 1, name: 'Classic Aviator', category: 'Sunglasses', price: 1299, image: aviatorImg },
    { id: 2, name: 'Chic Cat-Eye', category: 'Eyeglasses', price: 950, image: cateyeImg },
    { id: 3, name: 'Retro Round', category: 'Eyeglasses', price: 850, image: roundImg },
    { id: 4, name: 'Sport Wrap', category: 'Sunglasses', price: 1500, image: sportImg },
    { id: 5, name: 'Elegant Semi-Rimless', category: 'Eyeglasses', price: 1100, image: semiRimlessImg },
    { id: 6, name: 'Kids Flexible Flex', category: 'Kids Frames', price: 600, image: kidsImg },
    { id: 7, name: 'Daily Disposables', category: 'Contact Lenses', price: 400, image: contactLensesImg },
    { id: 8, name: 'Polarized Wayfarer', category: 'Sunglasses', price: 1800, image: wayfarerImg },
];

export const testimonials = [
    {
        id: 1,
        name: 'Ravi Teja Rao',
        rating: 5,
        text: 'Excellent collection of frames! The service at EyeMax Srikakulam main branch is very professional. Highly recommend.',
    },
    {
        id: 2,
        name: 'Anjali Varma',
        rating: 5,
        text: 'Best optical shop in Rajam. The frame designs are modern and the staff is very helpful in picking the right ones.',
    },
    {
        id: 3,
        name: 'Suresh Kumar',
        rating: 5,
        text: 'The eye testing was very precise. I got my progressive lenses delivered within 2 days. Truly a premium experience.',
    },
    {
        id: 4,
        name: 'Priya Madhavi',
        rating: 5,
        text: 'Chala bagundi collections! The blue-cut computer glasses have really reduced my eye strain. Staff is very friendly.',
    },
    {
        id: 5,
        name: 'Murali Krishna',
        rating: 5,
        text: 'Honest pricing and high-quality lenses. I have been a loyal customer for 5 years now across their Srikakulam branches.',
    },
];

export const branches = [
    {
        id: 1,
        name: 'EyeMax - Srikakulam',
        address: 'Krishnapark Junction, Srikakulam, Andhra Pradesh 532001',
        phone: '+91 94943 03030', // updated with a more realistic placeholder or keeping placeholder
        whatsappMessage: 'Hello EyeMax Srikakulam, I want to inquire about...',
        mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.645031206198!2d83.89566145!3d18.2988118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c14fb230d7b7b%3A0xc3b8a36ef0627e7f!2sKrishna%20Park%20Junction!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin'
    },
    {
        id: 2,
        name: 'LensHut - Srikakulam',
        address: 'Day and Night Junction, Beside Varam Residency, Srikakulam, Andhra Pradesh 532001',
        phone: '+91 94943 03030',
        whatsappMessage: 'Hello LensHut Srikakulam, I want to inquire about...',
        mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.645031206198!2d83.89966145!3d18.2988118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c139c87847b31%3A0x600c3b0dfada8d92!2sDay%20%26%20Night%20Junction%20Srikakulam!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin'
    },
    {
        id: 3,
        name: 'EyeMax - Rajam',
        address: 'Palakonda Road, Opp CMR Shopping Mall, Rajam, Andhra Pradesh 532127',
        phone: '+91 94943 03030',
        whatsappMessage: 'Hello EyeMax Rajam, I want to inquire about...',
        mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60741.53032120302!2d83.7431359!3d18.4419973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c631eaf000001%3A0x1d4bcdcb2f7aab59!2sRajam!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin'
    }
];

export const lensTypes = [
    {
        id: 1,
        name: 'Single Vision Lenses',
        description: 'Perfect for either distance vision or reading.',
    },
    {
        id: 2,
        name: 'Bifocal Lenses',
        description: 'Classic lenses for both far and near vision with a visible line.',
    },
    {
        id: 3,
        name: 'Progressive Lenses',
        description: 'Advanced no-line lenses for clear vision at all distances.',
    },
    {
        id: 4,
        name: 'Blue Cut Lenses',
        description: 'Specially made to protect your eyes from mobile and computer screens.',
    },
    {
        id: 5,
        name: 'Photochromatic Lenses',
        description: 'Auto-darkening lenses that turn into sunglasses in the sun.',
    },
    {
        id: 6,
        name: 'Anti-Glare Lenses',
        description: 'Reduces reflections for better vision while driving at night.',
    }
];

// Re-export images for components to use
export { optoHeroImg, storeHeroImg, fashionHeroImg };

export const heroSlides = [
    {
        id: 1,
        title: "Clear",
        subtitle: "Vision For You.",
        description: "Looking for the perfect glasses? Get expert eye testing and the most stylish frames all in one place.",
        image: optoHeroImg,
        badge: "No. 1 Optical Showroom in Srikakulam"
    },
    {
        id: 2,
        title: "Modern",
        subtitle: "Luxury Store.",
        description: "Step into our world-class optical boutique and experience the future of eyewear selection.",
        image: storeHeroImg,
        badge: "Premium Experience"
    },
    {
        id: 3,
        title: "Latest",
        subtitle: "Global Styles.",
        description: "Carry the look of the season with our curated collection of international designer frames.",
        image: fashionHeroImg,
        badge: "New Collection"
    }
];
