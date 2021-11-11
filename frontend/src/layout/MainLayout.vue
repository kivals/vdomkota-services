<template>
  <div class="container">
    <nav class="side-nav">
      <div class="side-nav__header">
        <p>ВДОМКОТА</p>
        <img
          class="side-nav__logo"
          src="https://firebasestorage.googleapis.com/v0/b/vdomkota-6332e.appspot.com/o/logos%2Flogo_v_dom_kota.jpg?alt=media&token=e5635bf3-73a7-4b97-bb56-dbee2b013f16"
          alt=""
        />
      </div>
      <div class="side-nav__deliver"></div>
      <div class="side-nav__body"></div>
      <ul class="side-nav__list">
        <li>
          <a href="" class="side-menu side-menu_active">
            <div class="side-menu__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-home"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <span class="side-menu__title">Котики</span>
          </a>
        </li>
        <li>
          <a href="" class="side-menu">
            <div class="side-menu__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-layout"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            </div>
            <span class="side-menu__title">Страницы</span>
          </a>
        </li>
      </ul>
    </nav>

    <div class="content">
      <div class="content__intro">
        <h2>Добавление/редактирование/удаление котиков</h2>
      </div>

      <div class="content__data cats-content">
        <div class="cats-content__filter cat-filter">
          <div class="cat-filter__search">
            <input type="text" placeholder="Найти кота..." />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="
                feather feather-search
                w-4
                h-4
                absolute
                my-auto
                inset-y-0
                mr-3
                right-0
                w-4
                h-4
                absolute
                my-auto
                inset-y-0
                mr-3
                right-0
              "
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <div class="cat-filter__switcher switcher-filter">
            <div class="switcher-filter__text">Котики дома</div>
            <div class="switcher-filter__toggle"></div>
          </div>
        </div>
        <div class="cats-content__body">
          <a href="" class="cats-content__item cat-item">
            <div class="cat-item__wrapper">
              <div class="cat-item__photo">
                <div class="cat-item__preview">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/vdomkota-6332e.appspot.com/o/cats%2F%D0%BC%D0%B0%D1%80%D1%84%D0%B0%2FIMG_0223-2web_result.webp?alt=media&token=cf9cc107-f6d0-4217-9878-a4c607abfb56"
                    alt=""
                  />
                </div>
              </div>
              <div class="cat-item__text">Кекс</div>
            </div>
          </a>
          <a href="" class="cats-content__item cat-item">
            <div class="cat-item__wrapper">
              <div class="cat-item__photo">
                <div class="cat-item__preview">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/vdomkota-6332e.appspot.com/o/cats%2F%D0%BC%D0%B0%D1%80%D1%84%D0%B0%2FIMG_0223-2web_result.webp?alt=media&token=cf9cc107-f6d0-4217-9878-a4c607abfb56"
                    alt=""
                  />
                </div>
              </div>
              <div class="cat-item__text">Кекс</div>
            </div>
          </a>
          <a href="" class="cats-content__item cat-item">
            <div class="cat-item__wrapper">
              <div class="cat-item__photo">
                <div class="cat-item__preview">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/vdomkota-6332e.appspot.com/o/cats%2F%D0%BC%D0%B0%D1%80%D1%84%D0%B0%2FIMG_0223-2web_result.webp?alt=media&token=cf9cc107-f6d0-4217-9878-a4c607abfb56"
                    alt=""
                  />
                </div>
              </div>
              <div class="cat-item__text">Кекс</div>
            </div>
          </a>
          <a href="" class="cats-content__item cat-item">
            <div class="cat-item__wrapper">
              <div class="cat-item__photo">
                <div class="cat-item__preview">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/vdomkota-6332e.appspot.com/o/cats%2F%D0%BC%D0%B0%D1%80%D1%84%D0%B0%2FIMG_0223-2web_result.webp?alt=media&token=cf9cc107-f6d0-4217-9878-a4c607abfb56"
                    alt=""
                  />
                </div>
              </div>
              <div class="cat-item__text">Кекс</div>
            </div>
          </a>
          <a href="" class="cats-content__item cat-item">
            <div class="cat-item__wrapper">
              <div class="cat-item__photo">
                <div class="cat-item__preview">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/vdomkota-6332e.appspot.com/o/cats%2F%D0%BC%D0%B0%D1%80%D1%84%D0%B0%2FIMG_0223-2web_result.webp?alt=media&token=cf9cc107-f6d0-4217-9878-a4c607abfb56"
                    alt=""
                  />
                </div>
              </div>
              <div class="cat-item__text">Кекс</div>
            </div>
          </a>
          <a href="" class="cats-content__item cat-item">
            <div class="cat-item__wrapper">
              <div class="cat-item__photo">
                <div class="cat-item__preview">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/vdomkota-6332e.appspot.com/o/cats%2F%D0%BC%D0%B0%D1%80%D1%84%D0%B0%2FIMG_0223-2web_result.webp?alt=media&token=cf9cc107-f6d0-4217-9878-a4c607abfb56"
                    alt=""
                  />
                </div>
              </div>
              <div class="cat-item__text">Кекс</div>
            </div>
          </a>
          <a href="" class="cats-content__item cat-item">
            <div class="cat-item__wrapper">
              <div class="cat-item__photo">
                <div class="cat-item__preview">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/vdomkota-6332e.appspot.com/o/cats%2F%D0%BC%D0%B0%D1%80%D1%84%D0%B0%2FIMG_0223-2web_result.webp?alt=media&token=cf9cc107-f6d0-4217-9878-a4c607abfb56"
                    alt=""
                  />
                </div>
              </div>
              <div class="cat-item__text">Кекс</div>
            </div>
          </a>
          <a href="" class="cats-content__item cat-item">
            <div class="cat-item__wrapper">
              <div class="cat-item__photo">
                <div class="cat-item__preview">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/vdomkota-6332e.appspot.com/o/cats%2F%D0%BC%D0%B0%D1%80%D1%84%D0%B0%2FIMG_0223-2web_result.webp?alt=media&token=cf9cc107-f6d0-4217-9878-a4c607abfb56"
                    alt=""
                  />
                </div>
              </div>
              <div class="cat-item__text">Кекс</div>
            </div>
          </a>
          <a href="" class="cats-content__item cat-item">
            <div class="cat-item__wrapper">
              <div class="cat-item__photo">
                <div class="cat-item__preview">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/vdomkota-6332e.appspot.com/o/cats%2F%D0%BC%D0%B0%D1%80%D1%84%D0%B0%2FIMG_0223-2web_result.webp?alt=media&token=cf9cc107-f6d0-4217-9878-a4c607abfb56"
                    alt=""
                  />
                </div>
              </div>
              <div class="cat-item__text">Кекс</div>
            </div>
          </a>
          <a href="" class="cats-content__item cat-item">
            <div class="cat-item__wrapper">
              <div class="cat-item__photo">
                <div class="cat-item__preview">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/vdomkota-6332e.appspot.com/o/cats%2F%D0%BC%D0%B0%D1%80%D1%84%D0%B0%2FIMG_0223-2web_result.webp?alt=media&token=cf9cc107-f6d0-4217-9878-a4c607abfb56"
                    alt=""
                  />
                </div>
              </div>
              <div class="cat-item__text">Кекс</div>
            </div>
          </a>
          <a href="" class="cats-content__item cat-item">
            <div class="cat-item__wrapper">
              <div class="cat-item__photo">
                <div class="cat-item__preview">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/vdomkota-6332e.appspot.com/o/cats%2F%D0%BC%D0%B0%D1%80%D1%84%D0%B0%2FIMG_0223-2web_result.webp?alt=media&token=cf9cc107-f6d0-4217-9878-a4c607abfb56"
                    alt=""
                  />
                </div>
              </div>
              <div class="cat-item__text">Кекс</div>
            </div>
          </a>
          <a href="" class="cats-content__item cat-item">
            <div class="cat-item__wrapper">
              <div class="cat-item__photo">
                <div class="cat-item__preview">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/vdomkota-6332e.appspot.com/o/cats%2F%D0%BC%D0%B0%D1%80%D1%84%D0%B0%2FIMG_0223-2web_result.webp?alt=media&token=cf9cc107-f6d0-4217-9878-a4c607abfb56"
                    alt=""
                  />
                </div>
              </div>
              <div class="cat-item__text">Кекс</div>
            </div>
          </a>
          <a href="" class="cats-content__item cat-item">
            <div class="cat-item__wrapper">
              <div class="cat-item__photo">
                <div class="cat-item__preview">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/vdomkota-6332e.appspot.com/o/cats%2F%D0%BC%D0%B0%D1%80%D1%84%D0%B0%2FIMG_0223-2web_result.webp?alt=media&token=cf9cc107-f6d0-4217-9878-a4c607abfb56"
                    alt=""
                  />
                </div>
              </div>
              <div class="cat-item__text">Кекс</div>
            </div>
          </a>
          <a href="" class="cats-content__item cat-item">
            <div class="cat-item__wrapper">
              <div class="cat-item__photo">
                <div class="cat-item__preview">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/vdomkota-6332e.appspot.com/o/cats%2F%D0%BC%D0%B0%D1%80%D1%84%D0%B0%2FIMG_0223-2web_result.webp?alt=media&token=cf9cc107-f6d0-4217-9878-a4c607abfb56"
                    alt=""
                  />
                </div>
              </div>
              <div class="cat-item__text">Кекс</div>
            </div>
          </a>
          <a href="" class="cats-content__item cat-item">
            <div class="cat-item__wrapper">
              <div class="cat-item__photo">
                <div class="cat-item__preview">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/vdomkota-6332e.appspot.com/o/cats%2F%D0%BC%D0%B0%D1%80%D1%84%D0%B0%2FIMG_0223-2web_result.webp?alt=media&token=cf9cc107-f6d0-4217-9878-a4c607abfb56"
                    alt=""
                  />
                </div>
              </div>
              <div class="cat-item__text">Кекс</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainLayout",
};
</script>

<style lang="scss">
.container {
  display: flex;
  overflow: hidden;
  background-color: rgb(22, 35, 67);
  position: relative;
  z-index: 0;
}

.side-nav {
  flex-shrink: 0;
  width: 16rem;
  padding: 1rem;
  &__header {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-weight: 600;
      font-size: 2rem;
      color: $color-brand;
      padding: 0.75rem 0;
    }
  }
  &__logo {
    height: 8rem;
    width: 8rem;
    object-fit: cover;
    border-radius: 9999px;
  }

  &__deliver {
    height: 1px;
    position: relative;
    width: 100%;
    background-color: rgb(38, 52, 87);
    margin: 1.5rem 0;
  }
}

.side-menu {
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
  padding-left: 1.25rem;
  position: relative;
  color: rgb(148, 161, 183);

  &__title {
    display: flex;
    align-items: center;
    margin-left: 0.75rem;
    width: 100%;
  }

  &_active {
    background-color: rgb(28, 63, 170);
    .side-menu__title {
      color: #fff;
      font-weight: 500;
    }
  }
}
.content {
  border-radius: 35px/50px 0 0 0;
  background-color: rgb(240, 245, 255);
  flex: 1 1 0%;
  margin-left: 1rem;
  min-width: 0;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 2.5rem;
  position: relative;
  &:before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    border-radius: 40px 0 0 0;
    background-color: rgb(191, 203, 228);
    margin-top: 2rem;
    margin-left: -1rem;
  }

  &__data {
    margin-top: 1rem;
  }

  &__intro {
    margin-top: 2rem;
    h2 {
      font-weight: 500;
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
  }
}

.cat-filter {
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  &__search {
    position: relative;
    color: rgb(74, 85, 104);
    input {
      color: inherit;
      font-size: inherit;
      appearance: none;
      width: 16rem;
      padding: 0.75rem 2.5rem 0.75rem 1rem;
      border-radius: 0.375rem;
      border: 2px solid transparent;
      position: relative;
      box-shadow: 0 3px 20px rgba(0, 0, 0, 0.043137254901960784);
      background-color: rgb(255, 255, 255);
      &::placeholder {
        color: rgb(160, 174, 192);
      }
      &:focus {
        border: 2px solid #96c0f8;
      }
    }

    svg {
      position: absolute;
      width: 1.2rem;
      height: 1.2rem;
      right: 0;
      top: 0;
      bottom: 0;
      margin-right: 0.75rem;
      margin-top: auto;
      margin-bottom: auto;
      display: inline-block;
      stroke-width: 1.5;
    }
  }
}

.cats-content {
  &__body {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.25rem;
    padding-top: 1.25rem;
    margin-top: 1.25rem;
    border-top-width: 1px;
    border-color: rgb(222, 229, 245);
  }
}

.cat-item {
  display: block;
  color: inherit;
  text-decoration: inherit;

  &__wrapper {
    position: relative;
    padding: 0.75rem;
    border-radius: 0.375rem;

    background-color: rgb(255, 255, 255);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      box-shadow: 0 3px 20px rgba(0, 0, 0, 0.043137254901960784);
      transform: scale(1.03);
    }
  }

  &__photo {
    position: relative;
    flex: none;
    display: block;
    &:before {
      content: "";
      padding-top: 100%;
      display: block;
      width: 100%;
      box-sizing: border-box;
      border-width: 0;
      border-style: solid;
      border-color: #e2e8f0;
    }
  }

  &__preview {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    img {
      border-radius: 0.375rem;
      height: 100%;
      object-fit: cover;
      position: absolute;
      width: 100%;
    }
  }

  &__text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    margin-top: 0.75rem;
    font-weight: 500;
    font-size: 2rem;
  }
}
.switcher-filter {
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 12rem;
  height: 3rem;
  border-radius: 9999px;
  border: 2px solid #e2e8f0;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.043137254901960784);

  &__text {
    color: rgb(74, 85, 104);
    margin-right: 1rem;
  }

  &__toggle {
    position: relative;
    border-radius: 9999px;
    cursor: pointer;
    outline: 2px solid transparent;
    outline-offset: 2px;
    width: 38px;
    height: 24px;
    padding: 1px;
    border: 1px solid #e2e8f0;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      width: 22px;
      height: 22px;
      transition: all 0.2s ease-in-out;
      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
      border-radius: 9999px;
      margin: auto 0;
    }
  }
}
</style>
