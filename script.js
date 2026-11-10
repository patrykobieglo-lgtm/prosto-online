
// =====================================
// PROSTO ONLINE - ANIMACJE
// =====================================

// Sprawdzamy, czy użytkownik nie ograniczył animacji
const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

// Jeśli animacje są wyłączone w systemie,
// nie uruchamiamy efektów
if (!prefersReducedMotion) {

    // Pobieramy elementy do animowania
    const elements = document.querySelectorAll(
        ".section-heading, .service-card, .about-content, .contact"
    );

    // Przygotowujemy początkowy wygląd elementów
    elements.forEach((element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";
    });

    // Obserwujemy, czy element pojawia się na ekranie
    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    // Nie obserwujemy już widocznego elementu
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    // Uruchamiamy obserwowanie elementów
    elements.forEach((element) => {
        observer.observe(element);
    });

}
