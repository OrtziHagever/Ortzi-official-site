// רשימת קישורים לתמונות
const imageSources = [
    'https://i9.ytimg.com/vi/dkyRcmUHACs/mqdefault.jpg?v=6533b5c3&sqp=CNC3nbYG&rs=AOn4CLDe09P4Sn_0h3zlGAuf4GGUZslo6w',
    'https://i9.ytimg.com/vi/dtPX9tBp0Cs/mqdefault.jpg?v=6635406e&sqp=CNC3nbYG&rs=AOn4CLCgu2nTNM-NEyO8o1hEUzIBBn3AMw',
    'https://i9.ytimg.com/vi/SRPnSK_dWY4/mqdefault_custom_1.jpg?sqp=CNC3nbYG&rs=AOn4CLCfGlnJPSy1241G5MxhkXuoBilvSQ'
];

// מיקום התמונה הנוכחית
let currentIndex = 0;

// מציאת התמונה על פי ה-ID
const rotatingImage = document.getElementById('rotating-image');

// שינוי התמונה כל 3 שניות
function changeImage() {
    currentIndex = (currentIndex + 1) % imageSources.length;
    rotatingImage.src = imageSources[currentIndex];
}

// הגדרת מחזור התמונה כל 3 שניות
setInterval(changeImage, 3000);
