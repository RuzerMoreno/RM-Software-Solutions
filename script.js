document.addEventListener("DOMContentLoaded", () => {

    // =====================================================
    // CONFIGURACIÓN GENERAL
    // =====================================================

    const WHATSAPP_NUMBER = "529833111706";


    // =====================================================
    // AÑO AUTOMÁTICO
    // =====================================================

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // =====================================================
    // WHATSAPP
    // =====================================================

    function createWhatsAppUrl(message) {
        return (
            `https://wa.me/${WHATSAPP_NUMBER}` +
            `?text=${encodeURIComponent(message)}`
        );
    }


    const whatsappButton =
        document.getElementById("whatsappButton");

    if (whatsappButton) {
        const generalMessage =
            "Hola, vi la página de RM Software & Solutions. " +
            "Me gustaría recibir información y cotizar " +
            "una solución para mi negocio.";

        whatsappButton.href =
            createWhatsAppUrl(generalMessage);

        whatsappButton.target = "_blank";
        whatsappButton.rel = "noopener noreferrer";
    }


    const planButtons =
        document.querySelectorAll(".plan-whatsapp");

    planButtons.forEach((button) => {

        const plan = button.dataset.plan || "Barber POS";
        const price = button.dataset.price || "";

        const planMessage =
            `Hola, vi la página de RM Software & Solutions. ` +
            `Me interesa ${plan}` +
            `${price ? ` (${price})` : ""}. ` +
            `Quisiera información para contratar e instalar ` +
            `el sistema.`;

        button.href =
            createWhatsAppUrl(planMessage);

        button.target = "_blank";
        button.rel = "noopener noreferrer";
    });


    // =====================================================
    // HEADER AL HACER SCROLL
    // =====================================================

    const siteHeader =
        document.getElementById("siteHeader");

    function updateHeader() {
        if (!siteHeader) {
            return;
        }

        siteHeader.classList.toggle(
            "scrolled",
            window.scrollY > 24
        );
    }

    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    // =====================================================
    // ANIMACIONES DE ENTRADA
    // =====================================================

    const revealElements =
        document.querySelectorAll(".reveal");

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    if (
        "IntersectionObserver" in window &&
        !prefersReducedMotion
    ) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    });

                },
                {
                    threshold: 0.12
                }
            );

        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach((element) => {
            element.classList.add("visible");
        });
    }


    // =====================================================
    // GALERÍA
    // =====================================================

    const screenshotCards =
        document.querySelectorAll(".screenshot-card");

    const imageModal =
        document.getElementById("imageModal");

    const modalImage =
        document.getElementById("modalImage");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalClose =
        document.getElementById("modalClose");


    function closeImageModal() {

        if (!imageModal || !modalImage) {
            return;
        }

        imageModal.classList.remove("open");
        imageModal.setAttribute("aria-hidden", "true");

        modalImage.src = "";

        document.body.classList.remove("modal-open");
    }


    screenshotCards.forEach((card) => {

        const previewImage =
            card.querySelector("img");

        if (previewImage) {

            previewImage.addEventListener(
                "error",
                () => {
                    card.classList.add("missing-image");
                }
            );

            previewImage.addEventListener(
                "load",
                () => {
                    card.classList.remove("missing-image");
                }
            );

            if (
                previewImage.complete &&
                previewImage.naturalWidth === 0
            ) {
                card.classList.add("missing-image");
            }
        }


        card.addEventListener("click", () => {

            if (
                card.classList.contains("missing-image") ||
                !imageModal ||
                !modalImage
            ) {
                return;
            }

            const imagePath =
                card.dataset.image || "";

            const imageTitle =
                card.dataset.title || "Barber POS";

            modalImage.src = imagePath;

            if (modalTitle) {
                modalTitle.textContent = imageTitle;
            }

            imageModal.classList.add("open");
            imageModal.setAttribute(
                "aria-hidden",
                "false"
            );

            document.body.classList.add("modal-open");
        });
    });


    if (modalClose) {
        modalClose.addEventListener(
            "click",
            closeImageModal
        );
    }


    if (imageModal) {
        imageModal.addEventListener(
            "click",
            (event) => {

                if (event.target === imageModal) {
                    closeImageModal();
                }
            }
        );
    }


    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                imageModal?.classList.contains("open")
            ) {
                closeImageModal();
            }
        }
    );

});
