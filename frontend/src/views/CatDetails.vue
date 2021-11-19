<template>
  <app-loader v-if="isLoading" />
  <div v-else class="cat-details">
    <div class="cat-details__info cat-card">
      <div class="cat-card__header">
        <h2>Детальная информация о котике по кличке {{ cat.name }}</h2>
      </div>
      <div class="cat-card__body">
        <cat-avatar
          :avatar-url="cat.photos[0]"
          :isEdit="isEdit"
          @edit="isEdit = true"
          @cancel="cancelEditHandler"
          class="cat-card__avatar"
        />
        <div class="cat-card__info">
          <cat-form
            :catData="cat"
            :isEdit="isEdit"
            @addCharacteristic="addCharacteristicHandler"
            @deleteCharacteristic="deleteCharacteristicHandler"
          />
        </div>
      </div>
    </div>
    <div class="cat-details__photos">
      <div class="cat-details__photo cat-photo-card zoom-in">
        <div class="cat-photo-card__content">
          <div class="cat-photo-dropdown">
            <a href="" class="cat-photo-dropdown__item"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users w-4 h-4 mr-2 w-4 h-4 mr-2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> На главную </a>
            <a href="" class="cat-photo-dropdown__item"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash w-4 h-4 mr-2 w-4 h-4 mr-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Удалить </a>
          </div>
          <div class="cat-photo-card__photo">
            <img
              src="http://tinker-vue.left4code.com/img/preview-9.a4a1f893.jpg"
              alt=""
            />
          </div>
          <div class="cat-photo-card__menu cat-photo-menu">
            <a class="cat-photo-menu__icon">
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
                  feather feather-more-vertical
                  w-5
                  h-5
                  text-gray-600
                  w-5
                  h-5
                  text-gray-600
                "
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle></svg
            >
            </a>
          </div>
        </div>
      </div>
      <div class="cat-details__photo cat-photo-card zoom-in">
        <div class="cat-photo-card__content">
          <div class="cat-photo-dropdown">
            <a href="" class="cat-photo-dropdown__item"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users w-4 h-4 mr-2 w-4 h-4 mr-2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> На главную </a>
            <a href="" class="cat-photo-dropdown__item"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash w-4 h-4 mr-2 w-4 h-4 mr-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Удалить </a>
          </div>
          <div class="cat-photo-card__photo">
            <img
                src="http://tinker-vue.left4code.com/img/preview-9.a4a1f893.jpg"
                alt=""
            />
          </div>
          <div class="cat-photo-card__menu cat-photo-menu">
            <a class="cat-photo-menu__icon">
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
                  feather feather-more-vertical
                  w-5
                  h-5
                  text-gray-600
                  w-5
                  h-5
                  text-gray-600
                "
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle></svg
              >
            </a>
          </div>
        </div>
      </div>
      <div class="cat-details__photo cat-photo-card zoom-in">
        <div class="cat-photo-card__content">
          <div class="cat-photo-dropdown">
            <a href="" class="cat-photo-dropdown__item"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users w-4 h-4 mr-2 w-4 h-4 mr-2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> На главную </a>
            <a href="" class="cat-photo-dropdown__item"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash w-4 h-4 mr-2 w-4 h-4 mr-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Удалить </a>
          </div>
          <div class="cat-photo-card__photo">
            <img
                src="http://tinker-vue.left4code.com/img/preview-9.a4a1f893.jpg"
                alt=""
            />
          </div>
          <div class="cat-photo-card__menu cat-photo-menu">
            <a class="cat-photo-menu__icon">
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
                  feather feather-more-vertical
                  w-5
                  h-5
                  text-gray-600
                  w-5
                  h-5
                  text-gray-600
                "
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle></svg
              >
            </a>
          </div>
        </div>
      </div>
      <div class="cat-details__photo cat-photo-card zoom-in">
        <div class="cat-photo-card__content">
          <div class="cat-photo-dropdown">
            <a href="" class="cat-photo-dropdown__item"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users w-4 h-4 mr-2 w-4 h-4 mr-2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> На главную </a>
            <a href="" class="cat-photo-dropdown__item"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash w-4 h-4 mr-2 w-4 h-4 mr-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Удалить </a>
          </div>
          <div class="cat-photo-card__photo">
            <img
                src="http://tinker-vue.left4code.com/img/preview-9.a4a1f893.jpg"
                alt=""
            />
          </div>
          <div class="cat-photo-card__menu cat-photo-menu">
            <a class="cat-photo-menu__icon">
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
                  feather feather-more-vertical
                  w-5
                  h-5
                  text-gray-600
                  w-5
                  h-5
                  text-gray-600
                "
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle></svg
              >
            </a>
          </div>
        </div>
      </div>
      <div class="cat-details__photo cat-photo-card zoom-in">
        <div class="cat-photo-card__content">
          <div class="cat-photo-dropdown show">
            <a href="" class="cat-photo-dropdown__item"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users w-4 h-4 mr-2 w-4 h-4 mr-2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> На главную </a>
            <a href="" class="cat-photo-dropdown__item"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash w-4 h-4 mr-2 w-4 h-4 mr-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Удалить </a>
          </div>
          <div class="cat-photo-card__photo">
            <img
                src="http://tinker-vue.left4code.com/img/preview-9.a4a1f893.jpg"
                alt=""
            />
          </div>
          <div class="cat-photo-card__menu cat-photo-menu">
            <a class="cat-photo-menu__icon">
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
                  feather feather-more-vertical
                  w-5
                  h-5
                  text-gray-600
                  w-5
                  h-5
                  text-gray-600
                "
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle></svg
              >
            </a>
          </div>
        </div>
      </div>
      <div class="cat-details__photo cat-photo-card zoom-in">
        <div class="cat-photo-card__content">
          <div class="cat-photo-dropdown">
            <a href="" class="cat-photo-dropdown__item"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users w-4 h-4 mr-2 w-4 h-4 mr-2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> На главную </a>
            <a href="" class="cat-photo-dropdown__item"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash w-4 h-4 mr-2 w-4 h-4 mr-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Удалить </a>
          </div>
          <div class="cat-photo-card__photo">
            <img
                src="http://tinker-vue.left4code.com/img/preview-9.a4a1f893.jpg"
                alt=""
            />
          </div>
          <div class="cat-photo-card__menu cat-photo-menu">
            <a class="cat-photo-menu__icon">
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
                  feather feather-more-vertical
                  w-5
                  h-5
                  text-gray-600
                  w-5
                  h-5
                  text-gray-600
                "
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle></svg
              >
            </a>
          </div>
        </div>
      </div>
      <div class="cat-details__photo cat-photo-card zoom-in">
        <div class="cat-photo-card__content">
          <div class="cat-photo-dropdown">
            <a href="" class="cat-photo-dropdown__item"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users w-4 h-4 mr-2 w-4 h-4 mr-2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> На главную </a>
            <a href="" class="cat-photo-dropdown__item"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash w-4 h-4 mr-2 w-4 h-4 mr-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Удалить </a>
          </div>
          <div class="cat-photo-card__photo">
            <img
                src="http://tinker-vue.left4code.com/img/preview-9.a4a1f893.jpg"
                alt=""
            />
          </div>
          <div class="cat-photo-card__menu cat-photo-menu">
            <a class="cat-photo-menu__icon">
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
                  feather feather-more-vertical
                  w-5
                  h-5
                  text-gray-600
                  w-5
                  h-5
                  text-gray-600
                "
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle></svg
              >
            </a>
          </div>
        </div>
      </div>
      <div class="cat-details__photo cat-photo-card zoom-in">
        <div class="cat-photo-card__content">
          <div class="cat-photo-dropdown">
            <a href="" class="cat-photo-dropdown__item"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users w-4 h-4 mr-2 w-4 h-4 mr-2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> На главную </a>
            <a href="" class="cat-photo-dropdown__item"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash w-4 h-4 mr-2 w-4 h-4 mr-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Удалить </a>
          </div>
          <div class="cat-photo-card__photo">
            <img
                src="http://tinker-vue.left4code.com/img/preview-9.a4a1f893.jpg"
                alt=""
            />
          </div>
          <div class="cat-photo-card__menu cat-photo-menu">
            <a class="cat-photo-menu__icon">
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
                  feather feather-more-vertical
                  w-5
                  h-5
                  text-gray-600
                  w-5
                  h-5
                  text-gray-600
                "
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle></svg
              >
            </a>
          </div>
        </div>
      </div>
      <div class="cat-details__photo cat-photo-card zoom-in">
        <div class="cat-photo-card__content">
          <div class="cat-photo-dropdown">
            <a href="" class="cat-photo-dropdown__item"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users w-4 h-4 mr-2 w-4 h-4 mr-2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> На главную </a>
            <a href="" class="cat-photo-dropdown__item"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash w-4 h-4 mr-2 w-4 h-4 mr-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Удалить </a>
          </div>
          <div class="cat-photo-card__photo">
            <img
                src="http://tinker-vue.left4code.com/img/preview-9.a4a1f893.jpg"
                alt=""
            />
          </div>
          <div class="cat-photo-card__menu cat-photo-menu">
            <a class="cat-photo-menu__icon">
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
                  feather feather-more-vertical
                  w-5
                  h-5
                  text-gray-600
                  w-5
                  h-5
                  text-gray-600
                "
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle></svg
              >
            </a>
          </div>
        </div>
      </div>
      <div class="cat-details__photo cat-photo-card zoom-in">
        <div class="cat-photo-card__content">
          <div class="cat-photo-dropdown">
            <a href="" class="cat-photo-dropdown__item"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users w-4 h-4 mr-2 w-4 h-4 mr-2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> На главную </a>
            <a href="" class="cat-photo-dropdown__item"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash w-4 h-4 mr-2 w-4 h-4 mr-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Удалить </a>
          </div>
          <div class="cat-photo-card__photo">
            <img
                src="http://tinker-vue.left4code.com/img/preview-9.a4a1f893.jpg"
                alt=""
            />
          </div>
          <div class="cat-photo-card__menu cat-photo-menu">
            <a class="cat-photo-menu__icon">
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
                  feather feather-more-vertical
                  w-5
                  h-5
                  text-gray-600
                  w-5
                  h-5
                  text-gray-600
                "
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle></svg
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <pre>
    {{ cat }}
  </pre>
</template>

<script>
import catsApi from "@/api/cat";
import AppLoader from "@/components/ui/AppLoader";
import CatAvatar from "@/components/cat/CatAvatar";
import CatForm from "@/components/cat/CatForm";

export default {
  name: "CatDetails",
  components: {
    AppLoader,
    CatAvatar,
    CatForm,
  },
  data() {
    return {
      cat: null,
      isEdit: false,
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  methods: {
    async cancelEditHandler() {
      await this.loadCat();
      this.isEdit = false;
    },
    async loadCat() {
      try {
        this.$store.commit("startLoading");
        const catAlias = this.$route.params.alias;
        this.cat = await catsApi.getCatByAlias(catAlias);
        this.$store.commit("successLoading");
      } catch (e) {
        this.$store.commit("failLoading");
        console.error(e);
      }
    },
    addCharacteristicHandler(payload) {
      this.cat.characteristics.push(payload);
    },
    deleteCharacteristicHandler(payload) {
      this.cat.characteristics = this.cat.characteristics.filter(
        (ch) => ch.alias !== payload
      );
    },
  },
  async created() {
    await this.loadCat();
  },
};
</script>

<style lang="scss" scoped>
.cat-details {
  &__photos {
    margin-top: 1.25rem;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 1.5rem;
  }

  &__photo {
    grid-column: span 2 / span 2;
  }
}

.cat-card {
  margin-top: 1.25rem;
  border-color: transparent;
  border-radius: 0.375rem;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.043137254901960784);
  background-color: rgba(255, 255, 255, 1);
  &__header {
    padding: 1.25rem;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-color: rgb(237, 242, 247);
    h2 {
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 500;
      margin-right: auto;
    }
  }

  &__body {
    display: flex;
    padding: 1.25rem;
  }

  &__avatar {
    width: 13rem;
    margin-left: 1.5rem;
  }

  &__info {
    flex: 1 1 0;
    padding: 0 1rem;
  }
}

.cat-photo-card {
  border-color: transparent;
  border-radius: 0.375rem;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.043137254901960784);
  background-color: rgb(255, 255, 255);
  &__content {
    position: relative;
    padding: 2rem;
    border-radius: 0.375rem;
  }

  &__photo {
    position: relative;
    height: 10rem;
    cursor: pointer;
    img {
      border-radius: 0.375rem;
      height: 100%;
      object-fit: cover;
      position: absolute;
      width: 100%;
    }
  }

  &__menu {
    position: absolute;
    top: 0;
    right: 0;
    margin-left: auto;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
  }
}

.cat-photo-menu {
  cursor: pointer;
  &__icon {
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    svg {
      width: 1.25rem;
      height: 1.25rem;
      color: rgb(113,128,150);
      display: inline-block;
      stroke-width: 1.5;
      vertical-align: middle;
    }
  }


}
.cat-photo-dropdown {
  opacity: 0;
  visibility: hidden;
  width: 160px;
  position: absolute;
  right: 0.25rem;
  top: 2rem;
  z-index:9999;
  box-shadow: 0 3px 10px rgba(0,0,0,.09019607843137255);
  background-color: white;
  border-radius: 0.375rem;
  overflow:hidden;
  &.show {
    opacity: 1;
    visibility: visible;
  }
  &__item {
    display: flex;
    align-items: center;
    justify-content:flex-start;
    padding: .5rem 1rem;
    color: inherit;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      background-color: rgb(237,242,247);
    }
    svg {
      width: 1rem;
      height: 1rem;
      margin-right: 1rem;
      display: inline-block;
      stroke-width: 1.5;
    }
  }
}
</style>
