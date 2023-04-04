<template>
  <section class="footer section">
    <div class="shape shape__big"></div>
    <div class="shape shape__small"></div>

    <div class="footer__container container grid">
      <div class="footer__content">
        <a href="#" class="footer__logo">
          <i class="ri-steering-line"></i>
          Premium car
        </a>
        <p class="footer__description">
          We offer the best electric cars of <br>
          the most recognized brands in <br>
          the world.
        </p>
      </div>

      <div class="footer__content">
        <h3 class="footer__title">
          Company
        </h3>

        <ul class="footer__links">
          <li>
            <a href="#" class="footer__link">About</a>
          </li>
          <li>
            <a href="#" class="footer__link">Cars</a>
          </li>
          <li>
            <a href="#" class="footer__link">History</a>
          </li>
          <li>
            <a href="#" class="footer__link">Shop</a>
          </li>
        </ul>
      </div>

      <div class="footer__content">
        <h3 class="footer__title">
          Information
        </h3>

        <ul class="footer__links">
          <li>
            <a href="#" class="footer__link">Request a quote</a>
          </li>
          <li>
            <a href="#" class="footer__link">Find a dealer</a>
          </li>
          <li>
            <a href="#" class="footer__link">Contact us</a>
          </li>
          <li>
            <a href="#" class="footer__link">Services</a>
          </li>
        </ul>
      </div>

      <div class="footer__content">
        <h3 class="footer__title">
          Follow us
        </h3>

        <ul class="footer__social">
          <li>
            <a
              href="https://t.me/MadoneFR"
              target="_blank" rel="noopener"
              class="footer__social-link"
            >
              <i class="ri-telegram-line"></i>
            </a>
          </li>
          <li>
            <a
              href="mailto:f1l1ppovmr@gmail.com"
              target="_blank"
              rel="noopener"
              class="footer__social-link"
            >
              <i class="ri-mail-send-line"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mihail666"
              target="_blank"
              rel="noopener"
              class="footer__social-link"
            >
              <i class="ri-github-line"></i>
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=79877933061"
              target="_blank"
              rel="noopener"
              class="footer__social-link"
            >
              <i class="ri-whatsapp-line"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <span class="footer__copy">
      &#169; FMR. All rigths reserved
    </span>
  </section>
</template>

<style lang="scss">
@import '@/assets/scss/variables.scss';
.footer{
  position: relative;
  overflow: hidden;
  &__container {
    row-gap: 2.5rem;
    position: relative;
  }
  &__logo {
    display: inline-flex;
    align-items: center;
    column-gap: .25rem;
    color: $title-color;
    font-size: $h2-font-size;
    font-weight: $font-semi-bold;
    margin-bottom: 1.25rem;
    transition: .3s;
    i {
      font-size: 1.5rem;
    }

    &:hover {
      color: $first-color;
    }
  }
  &__title {
    font-size: $h3-font-size;
    margin-bottom: 1.25rem;
  }

  &__links {
    display: flex;
    flex-direction: column;
    row-gap: .5rem;
  }

  &__link,
  &__social-link {
    color: $text-color;
    transition: .3s;
  }
  &__link:hover,
  &__social-link:hover {
    color: $title-color;
  }
  &__social {
    display: flex;
    column-gap: 1.5rem;
  }
  &__social-link {
    font-size: 1.25rem;
  }
  &__copy {
    display: block;
    margin-top: 4.5rem;
    text-align: center;
  }
}
.footer .shape__big,
.footer .shape__small {
  position: absolute;
}
.footer .shape__big {
  width: 300px;
  height: 300px;
  left: -12rem;
  top: 6rem;
}
.footer .shape__small {
  right: -13rem;
  bottom: -6rem;
}
</style>
