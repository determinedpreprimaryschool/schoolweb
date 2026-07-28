/* Determined Primary School — main.js
   No frameworks. Handles: mobile nav toggle, gallery lightbox,
   WhatsApp-powered forms, and gentle scroll fade-ins. */

(function () {
  "use strict";

  var WHATSAPP_NUMBER = "260975401997";

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.querySelector(".nav-toggle");
  var mainNav = document.querySelector(".main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  /* ---------- Gallery lightbox ---------- */
  var galleryButtons = document.querySelectorAll("[data-lightbox-trigger]");
  var lightbox = document.querySelector(".lightbox");
  if (galleryButtons.length && lightbox) {
    var lightboxImg = lightbox.querySelector("img");
    var lightboxCaption = lightbox.querySelector("figcaption");
    var closeBtn = lightbox.querySelector(".lightbox-close");
    var lastFocused = null;

    function openLightbox(src, alt, caption) {
      lastFocused = document.activeElement;
      lightboxImg.src = src;
      lightboxImg.alt = alt || "";
      lightboxCaption.textContent = caption || "";
      lightbox.classList.add("open");
      closeBtn.focus();
      document.body.style.overflow = "hidden";
    }
    function closeLightbox() {
      lightbox.classList.remove("open");
      lightboxImg.src = "";
      document.body.style.overflow = "";
      if (lastFocused) lastFocused.focus();
    }

    galleryButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var img = btn.querySelector("img");
        openLightbox(img.getAttribute("src"), img.getAttribute("alt"), btn.getAttribute("data-caption"));
      });
    });
    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lightbox.classList.contains("open")) closeLightbox();
    });
  }

  /* ---------- WhatsApp-powered forms ---------- */
  function buildMessage(pairs) {
    return pairs
      .filter(function (p) { return p[1] && String(p[1]).trim() !== ""; })
      .map(function (p) { return p[0] + ": " + p[1]; })
      .join("\n");
  }

  function showStatus(statusEl, message, isError) {
    statusEl.textContent = message;
    statusEl.classList.add("visible");
    statusEl.classList.toggle("error", !!isError);
  }

  function openWhatsApp(message) {
    var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
    var win = window.open(url, "_blank");
    return !!win;
  }

  function handleForm(formId, statusId, buildPairs, introLine) {
    var form = document.getElementById(formId);
    if (!form) return;
    var statusEl = document.getElementById(statusId);

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var requiredFields = form.querySelectorAll("[required]");
      var valid = true;
      requiredFields.forEach(function (field) {
        if (!field.value || !field.value.trim()) {
          valid = false;
          field.style.borderColor = "#b8412f";
        } else {
          field.style.borderColor = "";
        }
      });

      if (!valid) {
        showStatus(statusEl, "Please fill in the required fields marked with *.", true);
        return;
      }

      var message = introLine + "\n\n" + buildMessage(buildPairs(form));
      var opened = openWhatsApp(message);

      if (opened) {
        showStatus(
          statusEl,
          "WhatsApp is opening in a new tab with your details filled in. Please press send there to finish."
        );
      } else {
        showStatus(
          statusEl,
          "We could not open WhatsApp automatically. Please message us directly on +260 97 540 1997.",
          true
        );
      }
    });
  }

  handleForm(
    "application-form",
    "application-status",
    function (form) {
      var f = form.elements;
      return [
        ["Child's full name", f.childName.value],
        ["Date of birth", f.dob.value],
        ["Grade applying for", f.grade.value],
        ["Parent/guardian name", f.guardianName.value],
        ["Phone", f.phone.value],
        ["Email", f.email.value],
        ["Home area/address", f.address.value],
        ["Message", f.message.value]
      ];
    },
    "New application enquiry — Determined Primary School"
  );

  handleForm(
    "contact-form",
    "contact-status",
    function (form) {
      var f = form.elements;
      return [
        ["Name", f.name.value],
        ["Phone", f.phone.value],
        ["Email", f.email.value],
        ["Subject", f.subject.value],
        ["Message", f.message.value]
      ];
    },
    "New message from the school website"
  );

  /* ---------- Gentle scroll fade-in ---------- */
  if ("IntersectionObserver" in window) {
    var fadeEls = document.querySelectorAll(".fade-in");
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    fadeEls.forEach(function (el) { observer.observe(el); });
  }
})();
