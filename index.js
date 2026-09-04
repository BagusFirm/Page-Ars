<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
  >

  <meta name="theme-color" content="#070707">
  <meta
    name="description"
    content="ARS Studio - Fotobox Jatibarang. Paket foto, birthday, room concept dan berbagai pilihan cetak."
  >

  <title>ARS Studio | Fotobox</title>

  <style>
    /* =========================================================
       ROOT
    ========================================================= */

    :root {
      --black: #070707;
      --black-soft: #0d0d0d;
      --black-card: #121212;
      --black-card-2: #181818;

      --gold: #d89b24;
      --gold-light: #f2bd4b;
      --orange: #e99520;
      --gold-dark: #a86e0c;

      --white: #ffffff;
      --text: #eeeeee;
      --muted: #999999;

      --border: rgba(216, 155, 36, 0.22);

      --radius: 20px;
      --radius-small: 14px;

      --container: 1180px;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family:
        Inter,
        ui-sans-serif,
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;

      background: var(--black);
      color: var(--white);

      line-height: 1.6;

      overflow-x: hidden;
    }

    img {
      max-width: 100%;
      display: block;
    }

    button,
    a {
      font: inherit;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button {
      border: none;
      cursor: pointer;
    }

    section {
      scroll-margin-top: 90px;
    }

    .container {
      width: min(var(--container), calc(100% - 32px));
      margin-inline: auto;
    }

    /* =========================================================
       GLOBAL
    ========================================================= */

    .section {
      padding: 90px 0;
    }

    .section-header {
      max-width: 720px;
      margin: 0 auto 45px;
      text-align: center;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;

      color: var(--gold-light);

      font-size: 12px;
      font-weight: 800;

      letter-spacing: 2px;
      text-transform: uppercase;

      margin-bottom: 12px;
    }

    .eyebrow::before,
    .eyebrow::after {
      content: "";
      width: 25px;
      height: 1px;
      background: var(--gold);
    }

    .section-title {
      font-size: clamp(30px, 5vw, 48px);
      line-height: 1.1;

      font-weight: 900;

      margin-bottom: 15px;
    }

    .section-title span {
      color: var(--gold-light);
    }

    .section-desc {
      color: var(--muted);
      font-size: 15px;
    }

    .gold-text {
      color: var(--gold-light);
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      min-height: 48px;
      padding: 0 22px;

      border-radius: 999px;

      font-weight: 800;
      font-size: 14px;

      transition:
        transform 0.25s ease,
        box-shadow 0.25s ease,
        background 0.25s ease;
    }

    .btn:hover {
      transform: translateY(-2px);
    }

    .btn-primary {
      color: #080808;
      background: linear-gradient(
        135deg,
        var(--gold-light),
        var(--gold)
      );

      box-shadow:
        0 10px 30px rgba(216, 155, 36, 0.18);
    }

    .btn-primary:hover {
      box-shadow:
        0 14px 35px rgba(216, 155, 36, 0.28);
    }

    .btn-outline {
      color: var(--gold-light);

      border: 1px solid var(--border);
      background: rgba(216, 155, 36, 0.05);
    }

    .btn-outline:hover {
      background: rgba(216, 155, 36, 0.12);
    }

    /* =========================================================
       NAVBAR
    ========================================================= */

    .navbar {
      position: fixed;
      z-index: 1000;

      top: 0;
      left: 0;

      width: 100%;

      background: rgba(7, 7, 7, 0.82);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);

      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .nav-inner {
      height: 72px;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .brand-mark {
        width: 42px;
        height: 42px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 10px;
        overflow: hidden;

        background: transparent;
        }

    .brand-mark img {
        width: 100%;
        height: 100%;

        object-fit: contain;
    }

    .brand-text {
      font-size: 18px;
      font-weight: 900;
      letter-spacing: 1px;
    }

    .brand-text span {
      color: var(--gold-light);
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 26px;

      list-style: none;
    }

    .nav-links a {
      color: #cfcfcf;
      font-size: 13px;
      font-weight: 700;

      transition: color 0.2s ease;
    }

    .nav-links a:hover {
      color: var(--gold-light);
    }

    .nav-cta {
      padding: 10px 17px;
      border-radius: 999px;

      color: #080808 !important;

      background: var(--gold);

      font-weight: 900 !important;
    }

    .menu-toggle {
      display: none;

      width: 42px;
      height: 42px;

      border-radius: 12px;

      color: white;
      background: var(--black-card);

      border: 1px solid var(--border);

      font-size: 20px;
    }

    /* =========================================================
       HERO
    ========================================================= */

    .hero {
      min-height: 100vh;

      display: flex;
      align-items: center;

      position: relative;

      padding-top: 72px;

      overflow: hidden;

      background:
        radial-gradient(
          circle at 80% 20%,
          rgba(216, 155, 36, 0.16),
          transparent 30%
        ),
        radial-gradient(
          circle at 20% 80%,
          rgba(233, 149, 32, 0.08),
          transparent 35%
        ),
        var(--black);
    }

    .hero::before {
      content: "";

      position: absolute;
      inset: 0;

      background:
        linear-gradient(
          120deg,
          transparent 0%,
          rgba(216, 155, 36, 0.035) 50%,
          transparent 100%
        );

      pointer-events: none;
    }

    .hero-grid {
      display: grid;

      grid-template-columns: 1.05fr 0.95fr;

      gap: 55px;

      align-items: center;
    }

    .hero-content {
      position: relative;
      z-index: 2;
    }

    .hero-badge {
      display: inline-flex;

      align-items: center;
      gap: 8px;

      padding: 8px 13px;

      margin-bottom: 20px;

      border: 1px solid var(--border);
      border-radius: 999px;

      background: rgba(216, 155, 36, 0.06);

      color: var(--gold-light);

      font-size: 12px;
      font-weight: 800;
    }

    .hero-title {
      font-size: clamp(45px, 7vw, 82px);

      line-height: 0.95;

      font-weight: 1000;

      letter-spacing: -3px;

      margin-bottom: 22px;
    }

    .hero-title span {
      color: var(--gold-light);
    }

    .hero-desc {
      max-width: 600px;

      color: #aaaaaa;

      font-size: 16px;

      margin-bottom: 30px;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    .hero-image {
      position: relative;
    }

    .hero-image-card {
      position: relative;

      aspect-ratio: 4 / 5;

      overflow: hidden;

      border-radius: 30px;

      border: 1px solid var(--border);

      background:
        linear-gradient(
          145deg,
          #1b1b1b,
          #090909
        );

      box-shadow:
        0 35px 100px rgba(0, 0, 0, 0.6);
    }

    .hero-image-card img {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }

    .hero-image-overlay {
      position: absolute;
      inset: 0;

      background:
        linear-gradient(
          to top,
          rgba(0, 0, 0, 0.7),
          transparent 50%
        );
    }

    .hero-floating {
      position: absolute;

      right: -20px;
      bottom: 35px;

      padding: 18px 20px;

      border-radius: 18px;

      background: rgba(15, 15, 15, 0.92);

      border: 1px solid var(--border);

      box-shadow:
        0 20px 50px rgba(0, 0, 0, 0.45);
    }

    .hero-floating strong {
      display: block;

      font-size: 25px;
      color: var(--gold-light);
      line-height: 1;
    }

    .hero-floating small {
      color: #aaa;
    }

    /* =========================================================
       PROMO
    ========================================================= */

    .promo {
      padding: 25px 0;
      background: #0a0a0a;
    }

    .promo-card {
      position: relative;

      overflow: hidden;

      display: grid;

      grid-template-columns: 1fr 1fr;

      min-height: 320px;

      border-radius: 25px;

      border: 1px solid var(--border);

      background: var(--black-card);
    }

    .promo-content {
      display: flex;

      flex-direction: column;
      justify-content: center;

      padding: 40px;
    }

    .promo-label {
      color: var(--gold-light);

      font-size: 12px;
      font-weight: 900;

      letter-spacing: 2px;

      text-transform: uppercase;

      margin-bottom: 10px;
    }

    .promo-title {
      font-size: clamp(30px, 5vw, 48px);

      line-height: 1.05;

      font-weight: 1000;

      margin-bottom: 15px;
    }

    .promo-desc {
      color: var(--muted);

      font-size: 14px;

      max-width: 500px;

      margin-bottom: 22px;
    }

    .promo-price {
      display: flex;
      align-items: baseline;
      gap: 7px;

      margin-bottom: 22px;
    }

    .promo-price strong {
      font-size: 40px;

      color: var(--gold-light);
    }

    .promo-price span {
      color: var(--muted);
      font-size: 13px;
    }

    .promo-image {
      min-height: 320px;

      overflow: hidden;
    }

    .promo-image img {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }

    /* =========================================================
       PACKAGE
    ========================================================= */

    .package-grid {
      display: grid;

      grid-template-columns: repeat(4, 1fr);

      gap: 18px;
    }

    .package-card {
      position: relative;

      padding: 26px;

      border-radius: var(--radius);

      border: 1px solid var(--border);

      background:
        linear-gradient(
          145deg,
          var(--black-card-2),
          var(--black-card)
        );

      transition:
        transform 0.25s ease,
        border-color 0.25s ease,
        box-shadow 0.25s ease;
    }

    .package-card:hover {
      transform: translateY(-5px);

      border-color: rgba(216, 155, 36, 0.5);

      box-shadow:
        0 20px 50px rgba(0, 0, 0, 0.3);
    }

    .package-tag {
      display: inline-block;

      padding: 5px 9px;

      border-radius: 999px;

      background: rgba(216, 155, 36, 0.1);

      color: var(--gold-light);

      font-size: 10px;
      font-weight: 900;

      letter-spacing: 1px;

      margin-bottom: 15px;
    }

    .package-name {
      font-size: 23px;
      font-weight: 1000;

      margin-bottom: 3px;
    }

    .package-price {
      color: var(--gold-light);

      font-size: 31px;

      font-weight: 1000;

      margin-bottom: 20px;
    }

    .package-list {
      display: flex;
      flex-direction: column;
      gap: 10px;

      list-style: none;

      color: #bcbcbc;

      font-size: 13px;
    }

    .package-list li {
      display: flex;
      gap: 9px;
    }

    .package-list li::before {
      content: "✓";

      flex-shrink: 0;

      color: var(--gold-light);

      font-weight: 900;
    }

    /* =========================================================
       BIRTHDAY
    ========================================================= */

    .birthday-grid {
      display: grid;

      grid-template-columns: repeat(2, 1fr);

      gap: 20px;
    }

    .birthday-card {
      padding: 30px;

      border-radius: var(--radius);

      border: 1px solid var(--border);

      background:
        linear-gradient(
          145deg,
          #191919,
          #0e0e0e
        );

      position: relative;

      overflow: hidden;
    }

    .birthday-card::after {
      content: "";

      position: absolute;

      width: 180px;
      height: 180px;

      right: -60px;
      top: -60px;

      border-radius: 50%;

      background:
        radial-gradient(
          circle,
          rgba(216, 155, 36, 0.16),
          transparent 70%
        );
    }

    .birthday-name {
      font-size: 27px;

      font-weight: 1000;

      margin-bottom: 4px;
    }

    .birthday-price {
      color: var(--gold-light);

      font-size: 36px;

      font-weight: 1000;

      margin-bottom: 20px;
    }

    .birthday-list {
      display: grid;

      grid-template-columns: repeat(2, 1fr);

      gap: 9px;

      list-style: none;

      color: #bdbdbd;

      font-size: 13px;
    }

    .birthday-list li::before {
      content: "✓";
      color: var(--gold-light);

      margin-right: 7px;
    }

    /* =========================================================
       ROOM CONCEPT
    ========================================================= */

    .concept-tabs {
      display: flex;

      justify-content: center;

      flex-wrap: wrap;

      gap: 8px;

      margin-bottom: 28px;
    }

    .concept-tab {
      padding: 12px 19px;

      border-radius: 999px;

      border: 1px solid var(--border);

      color: #aaa;

      background: #0d0d0d;

      font-size: 12px;

      font-weight: 900;

      transition:
        color 0.2s ease,
        background 0.2s ease,
        border-color 0.2s ease;
    }

    .concept-tab:hover {
      color: white;
    }

    .concept-tab.active {
      color: #080808;

      background:
        linear-gradient(
          135deg,
          var(--gold-light),
          var(--gold)
        );

      border-color: transparent;
    }

    .concept-info {
      max-width: 650px;

      margin: 0 auto 30px;

      padding: 15px 18px;

      border-radius: 14px;

      border: 1px solid var(--border);

      background: rgba(216, 155, 36, 0.04);

      color: #aaa;

      text-align: center;

      font-size: 13px;
    }

    .concept-info strong {
      color: var(--gold-light);
    }

    .room-grid {
      display: grid;

      grid-template-columns: repeat(4, 1fr);

      gap: 16px;
    }

    .room-card {
      position: relative;

      aspect-ratio: 4 / 5;

      overflow: hidden;

      border-radius: 18px;

      border: 1px solid var(--border);

      background: #111;

      cursor: pointer;
    }

    .room-card img {
      width: 100%;
      height: 100%;

      object-fit: cover;

      transition:
        transform 0.5s ease;
    }

    .room-card:hover img {
      transform: scale(1.05);
    }

    .room-overlay {
      position: absolute;
      inset: 0;

      display: flex;

      flex-direction: column;
      justify-content: flex-end;

      padding: 20px;

      background:
        linear-gradient(
          to top,
          rgba(0, 0, 0, 0.88),
          rgba(0, 0, 0, 0.05) 65%
        );
    }

    .room-badge {
      align-self: flex-start;

      padding: 5px 9px;

      margin-bottom: 8px;

      border-radius: 999px;

      background: rgba(216, 155, 36, 0.85);

      color: #080808;

      font-size: 9px;

      font-weight: 1000;

      letter-spacing: 0.7px;
    }

    .room-name {
      font-size: 19px;

      font-weight: 1000;
    }

    .room-action {
      color: #bbb;

      font-size: 11px;
    }

    /* =========================================================
       ADD ON
    ========================================================= */

    .addon-grid {
      display: grid;

      grid-template-columns: repeat(6, 1fr);

      gap: 12px;
    }

    .addon-card {
      min-height: 130px;

      display: flex;

      flex-direction: column;

      justify-content: center;

      align-items: center;

      padding: 18px;

      text-align: center;

      border-radius: 16px;

      border: 1px solid var(--border);

      background: var(--black-card);

      transition:
        transform 0.2s ease,
        border-color 0.2s ease;
    }

    .addon-card:hover {
      transform: translateY(-3px);

      border-color: rgba(216, 155, 36, 0.45);
    }

    .addon-icon {
      width: 42px;
      height: 42px;

      display: grid;
      place-items: center;

      margin-bottom: 9px;

      border-radius: 13px;

      background: rgba(216, 155, 36, 0.08);

      color: var(--gold-light);

      font-size: 18px;
    }

    .addon-name {
      font-size: 12px;

      font-weight: 800;

      color: #ddd;

      margin-bottom: 2px;
    }

    .addon-price {
      color: var(--gold-light);

      font-size: 13px;

      font-weight: 900;
    }

    /* =========================================================
       LOCATION
    ========================================================= */

    .location-grid {
      display: grid;

      grid-template-columns: 0.8fr 1.2fr;

      gap: 22px;

      align-items: stretch;
    }

    .location-info {
      padding: 30px;

      border-radius: var(--radius);

      border: 1px solid var(--border);

      background: var(--black-card);
    }

    .location-title {
      font-size: 28px;

      font-weight: 1000;

      margin-bottom: 10px;
    }

    .location-desc {
      color: var(--muted);

      font-size: 14px;

      margin-bottom: 25px;
    }

    .location-item {
      display: flex;

      gap: 12px;

      margin-bottom: 17px;
    }

    .location-icon {
      width: 38px;
      height: 38px;

      display: grid;
      place-items: center;

      flex-shrink: 0;

      border-radius: 12px;

      color: var(--gold-light);

      background: rgba(216, 155, 36, 0.08);
    }

    .location-item strong {
      display: block;

      font-size: 13px;

      margin-bottom: 2px;
    }

    .location-item span {
      color: var(--muted);

      font-size: 12px;
    }

    .map-wrapper {
      min-height: 420px;

      overflow: hidden;

      border-radius: var(--radius);

      border: 1px solid var(--border);

      background: #111;
    }

    .map-wrapper iframe {
      width: 100%;
      height: 100%;

      min-height: 420px;

      border: 0;
    }

    /* =========================================================
       SOCIAL
    ========================================================= */

    .social-grid {
      display: grid;

      grid-template-columns: repeat(3, 1fr);

      gap: 15px;
    }

    .social-card {
      display: flex;

      align-items: center;

      gap: 14px;

      padding: 20px;

      border-radius: 18px;

      border: 1px solid var(--border);

      background: var(--black-card);

      transition:
        transform 0.2s ease,
        border-color 0.2s ease;
    }

    .social-card:hover {
      transform: translateY(-3px);

      border-color: rgba(216, 155, 36, 0.5);
    }

    .social-icon {
      width: 45px;
      height: 45px;

      display: grid;
      place-items: center;

      flex-shrink: 0;

      border-radius: 14px;

      background: rgba(216, 155, 36, 0.08);

      color: var(--gold-light);

      font-size: 18px;

      font-weight: 900;
    }

    .social-name {
      font-size: 14px;

      font-weight: 900;
    }

    .social-handle {
      color: var(--muted);

      font-size: 12px;
    }

    /* =========================================================
       FOOTER
    ========================================================= */

    footer {
      padding: 35px 0;

      border-top: 1px solid rgba(255, 255, 255, 0.06);

      background: #050505;
    }

    .footer-inner {
      display: flex;

      justify-content: space-between;

      align-items: center;

      gap: 20px;
    }

    .footer-brand {
      font-size: 18px;

      font-weight: 1000;
    }

    .footer-brand span {
      color: var(--gold-light);
    }

    .footer-copy {
      color: #666;

      font-size: 11px;
    }

    /* =========================================================
       ROOM MODAL
    ========================================================= */

    .modal {
      position: fixed;

      inset: 0;

      z-index: 2000;

      display: none;

      align-items: center;
      justify-content: center;

      padding: 20px;

      background: rgba(0, 0, 0, 0.86);

      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }

    .modal.active {
      display: flex;
    }

    .modal-box {
      width: min(1000px, 100%);

      max-height: 90vh;

      overflow-y: auto;

      border-radius: 24px;

      border: 1px solid var(--border);

      background: #0c0c0c;

      box-shadow:
        0 40px 100px rgba(0, 0, 0, 0.65);
    }

    .modal-header {
      position: sticky;

      top: 0;

      z-index: 3;

      display: flex;

      align-items: center;
      justify-content: space-between;

      padding: 20px 22px;

      background: rgba(12, 12, 12, 0.95);

      backdrop-filter: blur(12px);

      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }

    .modal-title {
      font-size: 21px;

      font-weight: 1000;
    }

    .modal-close {
      width: 40px;
      height: 40px;

      display: grid;
      place-items: center;

      border-radius: 12px;

      background: #191919;

      color: white;

      font-size: 20px;
    }

    .modal-content {
      padding: 20px;
    }

    .modal-desc {
      color: var(--muted);

      font-size: 13px;

      margin-bottom: 18px;
    }

    .modal-gallery {
      display: grid;

      grid-template-columns: repeat(3, 1fr);

      gap: 12px;
    }

    .modal-gallery-item {
      aspect-ratio: 4 / 5;

      overflow: hidden;

      border-radius: 14px;

      cursor: pointer;

      background: #171717;
    }

    .modal-gallery-item img {
      width: 100%;
      height: 100%;

      object-fit: cover;

      transition: transform 0.3s ease;
    }

    .modal-gallery-item:hover img {
      transform: scale(1.04);
    }

    /* =========================================================
       IMAGE VIEWER
    ========================================================= */

    .viewer {
      position: fixed;

      inset: 0;

      z-index: 3000;

      display: none;

      align-items: center;
      justify-content: center;

      padding: 20px;

      background: rgba(0, 0, 0, 0.95);
    }

    .viewer.active {
      display: flex;
    }

    .viewer img {
      max-width: 95vw;
      max-height: 90vh;

      object-fit: contain;

      border-radius: 12px;
    }

    .viewer-close {
      position: absolute;

      top: 20px;
      right: 20px;

      width: 45px;
      height: 45px;

      border-radius: 14px;

      background: #1b1b1b;

      color: white;

      font-size: 22px;
    }

    /* =========================================================
       MOBILE MENU
    ========================================================= */

    .mobile-menu {
      position: fixed;

      z-index: 999;

      top: 72px;
      left: 0;

      width: 100%;

      display: none;

      padding: 15px 16px 20px;

      background: rgba(7, 7, 7, 0.98);

      border-bottom: 1px solid var(--border);
    }

    .mobile-menu.active {
      display: block;
    }

    .mobile-menu a {
      display: block;

      padding: 13px 10px;

      color: #ccc;

      border-bottom: 1px solid rgba(255,255,255,0.05);

      font-size: 14px;

      font-weight: 700;
    }

    /* =========================================================
       RESPONSIVE
    ========================================================= */

    @media (max-width: 1050px) {

      .package-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .room-grid {
        grid-template-columns: repeat(3, 1fr);
      }

      .addon-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (max-width: 850px) {

      .nav-links {
        display: none;
      }

      .menu-toggle {
        display: block;
      }

      .hero-grid {
        grid-template-columns: 1fr;

        gap: 35px;
      }

      .hero {
        padding-top: 105px;
        padding-bottom: 60px;
      }

      .hero-image {
        max-width: 560px;

        width: 100%;

        margin: 0 auto;
      }

      .promo-card {
        grid-template-columns: 1fr;
      }

      .promo-image {
        min-height: 300px;

        order: -1;
      }

      .location-grid {
        grid-template-columns: 1fr;
      }

      .social-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 650px) {

      .section {
        padding: 65px 0;
      }

      .container {
        width: min(
          var(--container),
          calc(100% - 24px)
        );
      }

      .hero-title {
        letter-spacing: -2px;
      }

      .hero-floating {
        right: 10px;
        bottom: 20px;
      }

      .package-grid {
        grid-template-columns: 1fr;
      }

      .birthday-grid {
        grid-template-columns: 1fr;
      }

      .birthday-list {
        grid-template-columns: 1fr;
      }

      .room-grid {
        grid-template-columns: repeat(2, 1fr);

        gap: 10px;
      }

      .room-overlay {
        padding: 13px;
      }

      .room-name {
        font-size: 15px;
      }

      .room-action {
        font-size: 10px;
      }

      .addon-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .modal-gallery {
        grid-template-columns: repeat(2, 1fr);
      }

      .promo-content {
        padding: 27px;
      }

      .footer-inner {
        flex-direction: column;

        text-align: center;
      }
    }

    @media (max-width: 400px) {

      .room-grid {
        grid-template-columns: 1fr 1fr;
      }

      .hero-actions {
        flex-direction: column;
      }

      .hero-actions .btn {
        width: 100%;
      }
    }

    /* =========================================================
       SCROLLBAR
    ========================================================= */

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #080808;
    }

    ::-webkit-scrollbar-thumb {
      background: #333;
      border-radius: 999px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: var(--gold-dark);
    }
  </style>
</head>

<body>

  <!-- =======================================================
       NAVBAR
  ======================================================== -->

  <header class="navbar">

    <div class="container nav-inner">

      <a href="#home" class="brand">

        <div class="brand-mark">
            <img
                src="https://rghvni8wwjsehhhq.private.blob.vercel-storage.com/logo/upscalemedia-transformed.png?vercel-blob-valid-until=1788523295307&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfckdodk5JOFdXSnNFaGhIcSIsIm93bmVySWQiOiJ0ZWFtX2N5VTkwSmk1clBaZGM3cWdVZU9ySFdyNiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzg4NTY1MTE0ODk1LCJpYXQiOjE3ODg1MjE5MTM5OTV9.qaVwZo-0KWhjMDOaRcf1rqmN1kRmL7nrOaiYchl7sb8&vercel-blob-signature=meKI9KjB5yi8YJQlCU1dJ6diYgNv9aD9PPEN7LW8NIA"
                alt="ARS Studio"
            >
            </div>

        <div class="brand-text">
          ARS <span>STUDIO</span>
        </div>

      </a>

      <nav>
        <ul class="nav-links">

          <li>
            <a href="#package">
              Package
            </a>
          </li>

          <li>
            <a href="#birthday">
              Birthday
            </a>
          </li>

          <li>
            <a href="#rooms">
              Rooms
            </a>
          </li>

          <li>
            <a href="#location">
              Lokasi
            </a>
          </li>

          <li>
            <a
              href="https://wa.me/6285188202982"
              target="_blank"
              class="nav-cta"
            >
              Booking
            </a>
          </li>

        </ul>
      </nav>

      <button
        class="menu-toggle"
        id="menuToggle"
        aria-label="Buka menu"
      >
        ☰
      </button>

    </div>

  </header>

  <!-- MOBILE MENU -->

  <div
    class="mobile-menu"
    id="mobileMenu"
  >

    <a href="#package">
      Package
    </a>

    <a href="#birthday">
      Birthday
    </a>

    <a href="#rooms">
      Rooms
    </a>

    <a href="#addon">
      Add On
    </a>

    <a href="#location">
      Lokasi
    </a>

    <a
      href="https://wa.me/6285188202982"
      target="_blank"
    >
      Booking WhatsApp
    </a>

  </div>


  <!-- =======================================================
       HERO
  ======================================================== -->

  <main>

    <section
      class="hero"
      id="home"
    >

      <div class="container hero-grid">

        <div class="hero-content">

          <div class="hero-badge">
            ✦ FOTOBOOTH JATIBARANG
          </div>

          <h1 class="hero-title">
            CAPTURE<br>
            YOUR <span>MOMENT</span>
          </h1>

          <p class="hero-desc">
            Abadikan momen bersama orang tersayang dengan
            berbagai pilihan package dan room concept dari
            ARS Studio.
          </p>

          <div class="hero-actions">

            <a
              href="#package"
              class="btn btn-primary"
            >
              Lihat Package
            </a>

            <a
              href="https://wa.me/6285188202982"
              target="_blank"
              class="btn btn-outline"
            >
              Booking Sekarang
            </a>

          </div>

        </div>


        <div class="hero-image">

          <div class="hero-image-card">

            <!-- GANTI DENGAN FOTO HERO -->

            <img
              src="hthttps://rghvni8wwjsehhhq.private.blob.vercel-storage.com/logo/upscalemedia-transformed.png?vercel-blob-valid-until=1788523295307&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfckdodk5JOFdXSnNFaGhIcSIsIm93bmVySWQiOiJ0ZWFtX2N5VTkwSmk1clBaZGM3cWdVZU9ySFdyNiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzg4NTY1MTE0ODk1LCJpYXQiOjE3ODg1MjE5MTM5OTV9.qaVwZo-0KWhjMDOaRcf1rqmN1kRmL7nrOaiYchl7sb8&vercel-blob-signature=meKI9KjB5yi8YJQlCU1dJ6diYgNv9aD9PPEN7LW8NIA"
              alt="ARS Studio"
              fetchpriority="high"
            >

            <div class="hero-image-overlay"></div>

          </div>

          <div class="hero-floating">

            <strong>
              25K
            </strong>

            <small>
              mulai dari
            </small>

          </div>

        </div>

      </div>

    </section>


    <!-- =====================================================
         PROMO
    ====================================================== -->

    <section class="promo">

      <div class="container">

        <div class="promo-card">

          <div class="promo-content">

            <div class="promo-label">
              PROMO TERBARU
            </div>

            <h2 class="promo-title">
              Foto Seru,<br>
              <span class="gold-text">
                Harga Bersahabat.
              </span>
            </h2>

            <p class="promo-desc">
              Pilih paket favoritmu dan abadikan momen
              bersama pasangan, sahabat, keluarga,
              atau sendiri.
            </p>

            <div class="promo-price">

              <strong>
                25K
              </strong>

              <span>
                mulai
              </span>

            </div>

            <div>

              <a
                href="#package"
                class="btn btn-primary"
              >
                Lihat Semua Package
              </a>

            </div>

          </div>

          <div class="promo-image">

            <!-- GANTI FOTO PROMO -->

            <img
              src="https://placehold.co/900x700/151515/F2BD4B?text=PROMO+ARS+STUDIO"
              alt="Promo ARS Studio"
              loading="lazy"
              decoding="async"
            >

          </div>

        </div>

      </div>

    </section>


    <!-- =====================================================
         PACKAGE
    ====================================================== -->

    <section
      class="section"
      id="package"
    >

      <div class="container">

        <div class="section-header">

          <div class="eyebrow">
            PACKAGE
          </div>

          <h2 class="section-title">
            Pilih Paket <span>Favoritmu</span>
          </h2>

          <p class="section-desc">
            Berbagai pilihan paket untuk couple,
            bestie, solo maupun keluarga.
          </p>

        </div>


        <div class="package-grid">

          <!-- COUPLE -->

          <article class="package-card">

            <span class="package-tag">
              FAVORITE
            </span>

            <h3 class="package-name">
              COUPLE
            </h3>

            <div class="package-price">
              45K
            </div>

            <ul class="package-list">

              <li>
                2 Orang
              </li>

              <li>
                15 Menit
              </li>

              <li>
                Free 1 Polaroid / Strip
              </li>

              <li>
                Free Edit
              </li>

            </ul>

          </article>


          <!-- BESTIE -->

          <article class="package-card">

            <span class="package-tag">
              BESTIE
            </span>

            <h3 class="package-name">
              BESTIE
            </h3>

            <div class="package-price">
              80K
            </div>

            <ul class="package-list">

              <li>
                3–4 Orang
              </li>

              <li>
                18 Menit
              </li>

              <li>
                Free 1 Polaroid
              </li>

              <li>
                Free Edit
              </li>

            </ul>

          </article>


          <!-- SOLO -->

          <article class="package-card">

            <span class="package-tag">
              SOLO
            </span>

            <h3 class="package-name">
              SOLO
            </h3>

            <div class="package-price">
              25K
            </div>

            <ul class="package-list">

              <li>
                10 Menit
              </li>

              <li>
                Free 1 Strip
              </li>

              <li>
                Free Edit
              </li>

            </ul>

          </article>


          <!-- FAMILY -->

          <article class="package-card">

            <span class="package-tag">
              FAMILY
            </span>

            <h3 class="package-name">
              FAMILY
            </h3>

            <div class="package-price">
              149K
            </div>

            <ul class="package-list">

              <li>
                5–9 Orang
              </li>

              <li>
                20 Menit
              </li>

              <li>
                Free 1 Cetak A4
              </li>

              <li>
                Free Edit
              </li>

            </ul>

          </article>

        </div>

      </div>

    </section>


    <!-- =====================================================
         BIRTHDAY
    ====================================================== -->

    <section
      class="section"
      id="birthday"
    >

      <div class="container">

        <div class="section-header">

          <div class="eyebrow">
            BIRTHDAY
          </div>

          <h2 class="section-title">
            Birthday <span>Package</span>
          </h2>

          <p class="section-desc">
            Rayakan hari spesial dengan dekorasi,
            properti dan konsep yang lebih personal.
          </p>

        </div>


        <div class="birthday-grid">

          <!-- BASIC -->

          <article class="birthday-card">

            <h3 class="birthday-name">
              BASIC
            </h3>

            <div class="birthday-price">
              199K
            </div>

            <ul class="birthday-list">

              <li>
                2 Orang
              </li>

              <li>
                20 Menit
              </li>

              <li>
                Dekorasi Sederhana
              </li>

              <li>
                Properti
              </li>

            </ul>

          </article>


          <!-- EXCLUSIVE -->

          <article class="birthday-card">

            <h3 class="birthday-name">
              EXCLUSIVE
            </h3>

            <div class="birthday-price">
              349K
            </div>

            <ul class="birthday-list">

              <li>
                Properti
              </li>

              <li>
                Custom Tema
              </li>

              <li>
                8 Orang
              </li>

              <li>
                25 Menit
              </li>

              <li>
                Free Cetak 4R
              </li>

              <li>
                Cake
              </li>

              <li>
                Dekorasi Custom
              </li>

            </ul>

          </article>

        </div>

      </div>

    </section>


    <!-- =====================================================
         ROOMS
    ====================================================== -->

    <section
      class="section"
      id="rooms"
    >

      <div class="container">

        <div class="section-header">

          <div class="eyebrow">
            OUR ROOMS
          </div>

          <h2 class="section-title">
            Pilih <span>Room Concept</span>
          </h2>

          <p class="section-desc">
            Lihat pilihan background dan room yang
            tersedia di ARS Studio.
          </p>

        </div>


        <!-- CONCEPT TABS -->

        <div
          class="concept-tabs"
          id="conceptTabs"
        >

          <button
            class="concept-tab active"
            data-concept="basic"
          >
            BASIC
          </button>

          <button
            class="concept-tab"
            data-concept="simple"
          >
            SIMPLE
          </button>

          <button
            class="concept-tab"
            data-concept="luxury"
          >
            LUXURY
          </button>

        </div>


        <div
          class="concept-info"
          id="conceptInfo"
        >
          <strong>BASIC</strong>
          — Semua room tersedia untuk semua package.
        </div>


        <!-- ROOM GRID -->

        <div
          class="room-grid"
          id="roomGrid"
        ></div>

      </div>

    </section>


    <!-- =====================================================
         ADD ON
    ====================================================== -->

    <section
      class="section"
      id="addon"
    >

      <div class="container">

        <div class="section-header">

          <div class="eyebrow">
            ADD ON
          </div>

          <h2 class="section-title">
            Tambahan <span>Package</span>
          </h2>

          <p class="section-desc">
            Tambahkan kebutuhanmu sesuai keinginan.
          </p>

        </div>


        <div class="addon-grid">

          <article class="addon-card">

            <div class="addon-icon">
              +
            </div>

            <div class="addon-name">
              Extra Person
            </div>

            <div class="addon-price">
              10K
            </div>

          </article>


          <article class="addon-card">

            <div class="addon-icon">
              ⏱
            </div>

            <div class="addon-name">
              Extra Time 10 Menit
            </div>

            <div class="addon-price">
              15K
            </div>

          </article>


          <article class="addon-card">

            <div class="addon-icon">
              ⏱
            </div>

            <div class="addon-name">
              Extra Time 5 Menit
            </div>

            <div class="addon-price">
              8K
            </div>

          </article>


          <article class="addon-card">

            <div class="addon-icon">
              🖨
            </div>

            <div class="addon-name">
              Extra Cetak 4R
            </div>

            <div class="addon-price">
              4K
            </div>

          </article>


          <article class="addon-card">

            <div class="addon-icon">
              🖨
            </div>

            <div class="addon-name">
              Extra Cetak A4
            </div>

            <div class="addon-price">
              6K
            </div>

          </article>


          <article class="addon-card">

            <div class="addon-icon">
              🖼
            </div>

            <div class="addon-name">
              Bingkai
            </div>

            <div class="addon-price">
              Hubungi Kami
            </div>

          </article>

        </div>

      </div>

    </section>


    <!-- =====================================================
         LOCATION
    ====================================================== -->

    <section
      class="section"
      id="location"
    >

      <div class="container">

        <div class="section-header">

          <div class="eyebrow">
            LOCATION
          </div>

          <h2 class="section-title">
            Temukan <span>ARS Studio</span>
          </h2>

          <p class="section-desc">
            Datang langsung dan abadikan momenmu
            bersama ARS Studio.
          </p>

        </div>


        <div class="location-grid">

          <div class="location-info">

            <h3 class="location-title">
              ARS Studio
            </h3>

            <p class="location-desc">
              Fotobox untuk kamu yang ingin membuat
              momen sederhana menjadi kenangan.
            </p>


            <div class="location-item">

              <div class="location-icon">
                📍
              </div>

              <div>

                <strong>
                  Lokasi
                </strong>

                <span>
                  Jatibarang, Indramayu
                </span>

              </div>

            </div>


            <div class="location-item">

              <div class="location-icon">
                📱
              </div>

              <div>

                <strong>
                  WhatsApp
                </strong>

                <span>
                  0851-8820-2982
                </span>

              </div>

            </div>


            <div class="location-item">

              <div class="location-icon">
                ◎
              </div>

              <div>

                <strong>
                  Instagram
                </strong>

                <span>
                  @ars_fotobox
                </span>

              </div>

            </div>


            <a
              href="https://wa.me/6285188202982"
              target="_blank"
              class="btn btn-primary"
              style="width:100%; margin-top:10px;"
            >
              Chat WhatsApp
            </a>

          </div>


          <div class="map-wrapper">

            <!--
              GANTI src iframe ini dengan EMBED GOOGLE MAP
              lokasi ARS Studio yang sebenarnya.
            -->

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4443398831636!2d108.2974719757672!3d-6.465257163216922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ec7000874ed7d%3A0x18190b77bd13f347!2sARS%20STUDIO%20%26%20FOTOBOX!5e0!3m2!1sid!2sid!4v1788522800121!5m2!1sid!2sid"
              loading="lazy"
              title="Lokasi ARS Studio"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>

        </div>

      </div>

    </section>


    <!-- =====================================================
         SOCIAL
    ====================================================== -->

    <section class="section">

      <div class="container">

        <div class="section-header">

          <div class="eyebrow">
            FOLLOW US
          </div>

          <h2 class="section-title">
            Stay Connected <span>With Us</span>
          </h2>

          <p class="section-desc">
            Follow sosial media ARS Studio untuk promo
            dan update terbaru.
          </p>

        </div>


        <div class="social-grid">

          <!-- INSTAGRAM -->

          <a
            href="https://instagram.com/ars_fotobox"
            target="_blank"
            rel="noopener noreferrer"
            class="social-card"
          >

            <div class="social-icon">
              ◎
            </div>

            <div>

              <div class="social-name">
                Instagram
              </div>

              <div class="social-handle">
                @ars_fotobox
              </div>

            </div>

          </a>


          <!-- TIKTOK -->

          <a
            href="https://www.tiktok.com/@arsfotobox"
            target="_blank"
            rel="noopener noreferrer"
            class="social-card"
          >

            <div class="social-icon">
              ♪
            </div>

            <div>

              <div class="social-name">
                TikTok
              </div>

              <div class="social-handle">
                @arsfotobox
              </div>

            </div>

          </a>


          <!-- WHATSAPP -->

          <a
            href="https://wa.me/6285188202982"
            target="_blank"
            rel="noopener noreferrer"
            class="social-card"
          >

            <div class="social-icon">
              ☎
            </div>

            <div>

              <div class="social-name">
                WhatsApp
              </div>

              <div class="social-handle">
                0851-8820-2982
              </div>

            </div>

          </a>

        </div>

      </div>

    </section>

  </main>


  <!-- =======================================================
       FOOTER
  ======================================================== -->

  <footer>

    <div class="container footer-inner">

      <div class="footer-brand">
        ARS <span>STUDIO</span>
      </div>

      <div class="footer-copy">
        © 2026 ARS Studio. All rights reserved.
      </div>

    </div>

  </footer>


  <!-- =======================================================
       ROOM MODAL
  ======================================================== -->

  <div
    class="modal"
    id="roomModal"
    aria-hidden="true"
  >

    <div class="modal-box">

      <div class="modal-header">

        <div
          class="modal-title"
          id="modalTitle"
        >
          Room
        </div>

        <button
          class="modal-close"
          id="modalClose"
          aria-label="Tutup"
        >
          ×
        </button>

      </div>

      <div class="modal-content">

        <p
          class="modal-desc"
          id="modalDesc"
        ></p>

        <div
          class="modal-gallery"
          id="modalGallery"
        ></div>

      </div>

    </div>

  </div>


  <!-- =======================================================
       IMAGE VIEWER
  ======================================================== -->

  <div
    class="viewer"
    id="viewer"
  >

    <button
      class="viewer-close"
      id="viewerClose"
      aria-label="Tutup gambar"
    >
      ×
    </button>

    <img
      id="viewerImage"
      src=""
      alt="Preview"
    >

  </div>


  <!-- =======================================================
       JAVASCRIPT
  ======================================================== -->

  <script>

    /* =======================================================
       CONFIG
    ======================================================== */

    /*
      =========================================================
      PENTING:
      Ganti URL gambar di bawah dengan PUBLIC BLOB URL.

      Contoh:

      https://xxxxx.public.blob.vercel-storage.com/high/01.webp

      BUKAN:

      https://vercel.com/.../manage-blobs?directory=high

      URL manage-blobs adalah dashboard Vercel,
      bukan URL gambar publik.
      =========================================================
    */


    const BLOB_BASE = "";



    /*
      =========================================================
      ROOM DATA

      SIMPLE hanya:
      - High Angle
      - Party Room
      - Vintage Room

      BASIC:
      - Semua room

      LUXURY:
      - Semua room
      =========================================================
    */


    const ROOMS = [

      {
        id: "high",
        name: "High Angle",

        simple: true,

        description:
          "Room High Angle dengan perspektif dan background yang unik.",

        cover:
          "https://placehold.co/800x1000/151515/D89B24?text=HIGH+ANGLE",

        photos: [
          "https://placehold.co/800x1000/151515/D89B24?text=HIGH+ANGLE+01",
          "https://placehold.co/800x1000/151515/D89B24?text=HIGH+ANGLE+02",
          "https://placehold.co/800x1000/151515/D89B24?text=HIGH+ANGLE+03"
        ]
      },


      {
        id: "left-century",
        name: "Left Century",

        simple: false,

        description:
          "Room Left Century dengan karakter visual yang elegan.",

        cover:
          "https://placehold.co/800x1000/151515/D89B24?text=LEFT+CENTURY",

        photos: [
          "https://placehold.co/800x1000/151515/D89B24?text=LEFT+CENTURY+01",
          "https://placehold.co/800x1000/151515/D89B24?text=LEFT+CENTURY+02",
          "https://placehold.co/800x1000/151515/D89B24?text=LEFT+CENTURY+03"
        ]
      },


      {
        id: "lift",
        name: "Lift",

        simple: false,

        description:
          "Room Lift dengan konsep unik untuk hasil foto yang berbeda.",

        cover:
          "https://placehold.co/800x1000/151515/D89B24?text=LIFT",

        photos: [
          "https://placehold.co/800x1000/151515/D89B24?text=LIFT+01",
          "https://placehold.co/800x1000/151515/D89B24?text=LIFT+02",
          "https://placehold.co/800x1000/151515/D89B24?text=LIFT+03"
        ]
      },


      {
        id: "mid-century",
        name: "Mid Century",

        simple: false,

        description:
          "Konsep Mid Century dengan nuansa klasik modern.",

        cover:
          "https://placehold.co/800x1000/151515/D89B24?text=MID+CENTURY",

        photos: [
          "https://placehold.co/800x1000/151515/D89B24?text=MID+CENTURY+01",
          "https://placehold.co/800x1000/151515/D89B24?text=MID+CENTURY+02",
          "https://placehold.co/800x1000/151515/D89B24?text=MID+CENTURY+03"
        ]
      },


      {
        id: "mid-japanese",
        name: "Mid Japanese",

        simple: false,

        description:
          "Room dengan nuansa Japanese modern yang clean.",

        cover:
          "https://placehold.co/800x1000/151515/D89B24?text=MID+JAPANESE",

        photos: [
          "https://placehold.co/800x1000/151515/D89B24?text=MID+JAPANESE+01",
          "https://placehold.co/800x1000/151515/D89B24?text=MID+JAPANESE+02",
          "https://placehold.co/800x1000/151515/D89B24?text=MID+JAPANESE+03"
        ]
      },


      {
        id: "party",
        name: "Party Room",

        simple: true,

        description:
          "Party Room untuk foto bersama dengan suasana yang lebih fun.",

        cover:
          "https://placehold.co/800x1000/151515/D89B24?text=PARTY+ROOM",

        photos: [
          "https://placehold.co/800x1000/151515/D89B24?text=PARTY+ROOM+01",
          "https://placehold.co/800x1000/151515/D89B24?text=PARTY+ROOM+02",
          "https://placehold.co/800x1000/151515/D89B24?text=PARTY+ROOM+03"
        ]
      },


      {
        id: "polo",
        name: "Polo",

        simple: false,

        description:
          "Room Polo dengan karakter background yang modern.",

        cover:
          "https://placehold.co/800x1000/151515/D89B24?text=POLO",

        photos: [
          "https://placehold.co/800x1000/151515/D89B24?text=POLO+01",
          "https://placehold.co/800x1000/151515/D89B24?text=POLO+02",
          "https://placehold.co/800x1000/151515/D89B24?text=POLO+03"
        ]
      },


      {
        id: "right-century",
        name: "Right Century",

        simple: false,

        description:
          "Room Right Century dengan nuansa klasik dan stylish.",

        cover:
          "https://placehold.co/800x1000/151515/D89B24?text=RIGHT+CENTURY",

        photos: [
          "https://placehold.co/800x1000/151515/D89B24?text=RIGHT+CENTURY+01",
          "https://placehold.co/800x1000/151515/D89B24?text=RIGHT+CENTURY+02",
          "https://placehold.co/800x1000/151515/D89B24?text=RIGHT+CENTURY+03"
        ]
      },


      {
        id: "side-japanese",
        name: "Side Japanese",

        simple: false,

        description:
          "Room Side Japanese dengan nuansa Japanese yang minimalis.",

        cover:
          "https://placehold.co/800x1000/151515/D89B24?text=SIDE+JAPANESE",

        photos: [
          "https://placehold.co/800x1000/151515/D89B24?text=SIDE+JAPANESE+01",
          "https://placehold.co/800x1000/151515/D89B24?text=SIDE+JAPANESE+02",
          "https://placehold.co/800x1000/151515/D89B24?text=SIDE+JAPANESE+03"
        ]
      },


      {
        id: "vintage",
        name: "Vintage Room",

        simple: true,

        description:
          "Vintage Room dengan nuansa klasik yang hangat dan aesthetic.",

        cover:
          "https://placehold.co/800x1000/151515/D89B24?text=VINTAGE+ROOM",

        photos: [
          "https://placehold.co/800x1000/151515/D89B24?text=VINTAGE+ROOM+01",
          "https://placehold.co/800x1000/151515/D89B24?text=VINTAGE+ROOM+02",
          "https://placehold.co/800x1000/151515/D89B24?text=VINTAGE+ROOM+03"
        ]
      }

    ];



    /* =======================================================
       CONCEPT INFO
    ======================================================== */

    const CONCEPT_INFO = {

      basic:
        "<strong>BASIC</strong> — Semua room tersedia untuk semua package.",

      simple:
        "<strong>SIMPLE</strong> — Tersedia High Angle, Party Room dan Vintage Room. Hanya untuk package Couple & Bestie.",

      luxury:
        "<strong>LUXURY</strong> — Semua room tersedia untuk semua package."

    };



    /* =======================================================
       ELEMENTS
    ======================================================== */

    const roomGrid =
      document.getElementById("roomGrid");

    const conceptInfo =
      document.getElementById("conceptInfo");

    const conceptTabs =
      document.querySelectorAll(".concept-tab");

    const roomModal =
      document.getElementById("roomModal");

    const modalTitle =
      document.getElementById("modalTitle");

    const modalDesc =
      document.getElementById("modalDesc");

    const modalGallery =
      document.getElementById("modalGallery");

    const modalClose =
      document.getElementById("modalClose");

    const viewer =
      document.getElementById("viewer");

    const viewerImage =
      document.getElementById("viewerImage");

    const viewerClose =
      document.getElementById("viewerClose");

    const menuToggle =
      document.getElementById("menuToggle");

    const mobileMenu =
      document.getElementById("mobileMenu");



    /* =======================================================
       OPTIONAL BLOB HELPER
    ======================================================== */

    function blobUrl(path) {

      if (!BLOB_BASE) {
        return path;
      }

      return BLOB_BASE.replace(/\/$/, "") +
        "/" +
        path.replace(/^\//, "");

    }



    /* =======================================================
       RENDER ROOMS
    ======================================================== */

    function renderRooms(
      concept = "basic"
    ) {

      roomGrid.innerHTML = "";

      let filteredRooms = ROOMS;


      /*
        BASIC = semua
        LUXURY = semua
        SIMPLE = hanya simple:true
      */

      if (concept === "simple") {

        filteredRooms =
          ROOMS.filter(
            room => room.simple === true
          );

      }


      conceptInfo.innerHTML =
        CONCEPT_INFO[concept];


      filteredRooms.forEach(room => {

        const card =
          document.createElement("article");

        card.className =
          "room-card";


        card.innerHTML = `

          <img
            src="${blobUrl(room.cover)}"
            alt="${room.name}"
            loading="lazy"
            decoding="async"
          >

          <div class="room-overlay">

            <div class="room-badge">
              ${
                concept === "simple"
                  ? "COUPLE • BESTIE"
                  : "ALL PACKAGE"
              }
            </div>

            <div class="room-name">
              ${room.name}
            </div>

            <div class="room-action">
              Tap untuk lihat foto →
            </div>

          </div>

        `;


        card.addEventListener(
          "click",
          () => openRoom(room)
        );


        roomGrid.appendChild(card);

      });

    }



    /* =======================================================
       CONCEPT TAB
    ======================================================== */

    conceptTabs.forEach(tab => {

      tab.addEventListener(
        "click",
        () => {

          conceptTabs.forEach(
            item =>
              item.classList.remove("active")
          );

          tab.classList.add("active");

          const concept =
            tab.dataset.concept;

          renderRooms(concept);

        }
      );

    });



    /* =======================================================
       OPEN ROOM
    ======================================================== */

    function openRoom(room) {

      modalTitle.textContent =
        room.name;

      modalDesc.textContent =
        room.description;

      modalGallery.innerHTML = "";


      /*
        Gallery hanya dibuat ketika user
        membuka room.

        Ini menghemat request gambar.
      */

      room.photos.forEach(
        (photo, index) => {

          const item =
            document.createElement("div");

          item.className =
            "modal-gallery-item";


          item.innerHTML = `

            <img
              src="${blobUrl(photo)}"
              alt="${room.name} ${index + 1}"
              loading="lazy"
              decoding="async"
            >

          `;


          item.addEventListener(
            "click",
            () => {

              openViewer(
                blobUrl(photo)
              );

            }
          );


          modalGallery.appendChild(item);

        }
      );


      roomModal.classList.add("active");

      roomModal.setAttribute(
        "aria-hidden",
        "false"
      );

      document.body.style.overflow =
        "hidden";

    }



    /* =======================================================
       CLOSE ROOM
    ======================================================== */

    function closeRoom() {

      roomModal.classList.remove(
        "active"
      );

      roomModal.setAttribute(
        "aria-hidden",
        "true"
      );

      document.body.style.overflow =
        "";

    }



    modalClose.addEventListener(
      "click",
      closeRoom
    );


    roomModal.addEventListener(
      "click",
      event => {

        if (
          event.target === roomModal
        ) {

          closeRoom();

        }

      }
    );



    /* =======================================================
       IMAGE VIEWER
    ======================================================== */

    function openViewer(src) {

      viewerImage.src = src;

      viewer.classList.add("active");

    }


    function closeViewer() {

      viewer.classList.remove(
        "active"
      );

      viewerImage.src = "";

    }


    viewerClose.addEventListener(
      "click",
      closeViewer
    );


    viewer.addEventListener(
      "click",
      event => {

        if (
          event.target === viewer
        ) {

          closeViewer();

        }

      }
    );



    /* =======================================================
       ESC KEY
    ======================================================== */

    document.addEventListener(
      "keydown",
      event => {

        if (event.key === "Escape") {

          closeRoom();

          closeViewer();

          mobileMenu.classList.remove(
            "active"
          );

        }

      }
    );



    /* =======================================================
       MOBILE MENU
    ======================================================== */

    menuToggle.addEventListener(
      "click",
      () => {

        mobileMenu.classList.toggle(
          "active"
        );

      }
    );


    document
      .querySelectorAll(".mobile-menu a")
      .forEach(link => {

        link.addEventListener(
          "click",
          () => {

            mobileMenu.classList.remove(
              "active"
            );

          }
        );

      });



    /* =======================================================
       INITIAL RENDER
    ======================================================== */

    renderRooms("basic");

  </script>

</body>
</html>
