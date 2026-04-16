document.addEventListener('DOMContentLoaded', () => {
    // Identity & Bio Data (Logic from SetupPortfolioData)
    const bioText = "I have a deep interest in website designing and development. " +
                    "My academic journey focuses on creating efficient, user-centered applications using modern technical frameworks. " +
                    "I specialize in bridging the gap between database management and clean, responsive interface design. " +
                    "Through my projects, I aim to solve real-world problems by delivering polished and functional digital solutions. " +
                    "I am constantly exploring new tools to enhance my expertise in both front-end aesthetics and back-end logic.";
    
    document.getElementById('lblBio').innerText = bioText;

    // Slider Logic
    let dentalIdx = 0; 
    const dentalSlides = document.querySelectorAll('.dental-slide');
    
    window.showDental = (n) => {
        if (dentalSlides.length === 0) return;
        dentalSlides[dentalIdx].classList.remove('active');
        dentalIdx = (n + dentalSlides.length) % dentalSlides.length;
        dentalSlides[dentalIdx].classList.add('active');
    };

    window.nextDental = () => showDental(dentalIdx + 1);
    window.prevDental = () => showDental(dentalIdx - 1);

    let constructIdx = 0; 
    const constructSlides = document.querySelectorAll('.construct-slide');

    window.showConstruct = (n) => {
        if (constructSlides.length === 0) return;
        constructSlides[constructIdx].classList.remove('active');
        constructIdx = (n + constructSlides.length) % constructSlides.length;
        constructSlides[constructIdx].classList.add('active');
    };

    window.nextConstruct = () => showConstruct(constructIdx + 1);
    window.prevConstruct = () => showConstruct(constructIdx - 1);

    // Auto-slide
    setInterval(nextDental, 5000);
    setInterval(nextConstruct, 6500);
});