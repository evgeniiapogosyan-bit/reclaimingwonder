// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize animations only after ALL assets (images, stylesheets, fonts) are fully loaded.
// This ensures that ScrollTrigger's offset calculations are 100% accurate.
window.addEventListener("load", () => {
    initHeroScroll();
});

/**
 * Initializes the parallax scroll effects on the Hero screen.
 * The title, subtitle, and indicator fade out and move upwards at different speeds (staggered parallax).
 */
function initHeroScroll() {
    // Parallax fade-out for the hero title
    gsap.to(".hero-title", {
        y: -140,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom 30%",
            scrub: true,
            invalidateOnRefresh: true
        }
    });

    // Parallax fade-out for the subtitle and the scroll indicator line
    gsap.to([".hero-subtitle", ".scroll-indicator"], {
        y: -80,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom 50%",
            scrub: true,
            invalidateOnRefresh: true
        }
    });
}
