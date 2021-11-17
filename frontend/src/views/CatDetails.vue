<template>
  <app-loader v-if="isLoading" />
  <div v-else class="cat-details">
    <div class="cat-details__card cat-card">
      <div class="cat-card__header">
        <h2>Детальная информация о котике по кличке {{ cat.name }}</h2>
      </div>
      <div class="cat-card__body">
        <cat-avatar :avatar-url="cat.photos[0]" class="cat-card__avatar" />
        <div class="cat-card__info">
          <form class="cat-form" action="#">
            <div class="cat-form__body">
              <div class="cat-form__item cat-form-control">
                <label class="cat-form-control__label">Кличка котика</label>
                <input
                  type="text"
                  disabled
                  placeholder="Введите текст"
                  value="Кекс"
                />
              </div>

              <div class="cat-form__item cat-form-control">
                <label class="cat-form-control__label">Возраст</label>
                <div class="cat-form-control__body">
                  <input
                    type="number"
                    disabled
                    placeholder="Введите возраст в месяцах"
                    value="15"
                  />
                  <div class="cat-form-control__description">месяцев</div>
                </div>
              </div>

              <div class="cat-form__item cat-form-control">
                <label class="cat-form-control__label">Кастрирован</label>
                <input type="text" placeholder="Введите текст" value="Да" />
              </div>

              <div class="cat-form__item cat-form-control">
                <label class="cat-form-control__label">Привит</label>
                <input type="text" placeholder="Введите текст" value="Да" />
              </div>

              <div class="cat-form__item cat-form-control">
                <label class="cat-form-control__label"
                  >Анализы на ВЛК и ВИК</label
                >
                <input
                  type="text"
                  placeholder="Введите текст"
                  value="Отрицательные"
                />
              </div>
            </div>
            <div class="cat-form__add form-add">
              <div class="form-add__body">
                <div class="form-add__item cat-form-control">
                  <div class="cat-form-control__body-reverse">
                    <input
                      type="text"
                      placeholder="Введите название свойства"
                      value=""
                    />
                    <div class="cat-form-control__description">название</div>
                  </div>
                </div>
                <div class="form-add__item cat-form-control">
                  <div class="cat-form-control__body-reverse">
                    <input
                      type="text"
                      placeholder="Введите значение свойства"
                      value=""
                    />
                    <div class="cat-form-control__description">значение</div>
                  </div>
                </div>
              </div>
              <app-button class="cat-avatar__btn" title="Добавить поле" type="secondary" />
            </div>
            <div class="cat-form__item cat-form-control">
              <label class="cat-form-control__label">История котика</label>
              <textarea type="text" placeholder="Введите текст" rows="10">
ХАРАКТЕР: 😹 Феликс очень человеколюбивый кот! Но он - кот с характером! Что это значит? Это значит, что он - кот-личность, с которой в доме надо считаться! Не беспокоить по пустякам, гладить и играть, когда коту захочется, вкусненько кормить, чтобы получить от него поцелуй!

ОСОБЕННОСТИ: Феликс вырос одним котом и ему очень некомфортно жить с другими собратьями, так как он любит доминировать и не хочет никого терпеть на своем пространстве, кроме хозяина. Но в приюте всё таки случилась любовь – с котом Пиратом! Пират – единственный кот, с кем сдружился Феликс и кого он любит и жалеет, поэтому очень надеемся, что коты поедут в одну семью.

ИСТОРИЯ КОТА:У Феликса умер хозяин и наследники посчитали нужным выставить кота за дверь вместо того, чтобы принять его вместе с наследством. Феликс пару месяцев жил на улице в кустах, его подкармливали одни люди, а другие грозились отловом и усыплением. Кот все это время находился в шоковом состоянии, сидел на одном месте и не понимал куда ему идти. Однажды его заметила его будущий куратор и скоро Феликс попал в приют.</textarea
              >
            </div>
          </form>
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
import AppButton from "@/components/ui/AppButton";

export default {
  name: "CatDetails",
  components: {
    AppLoader,
    CatAvatar,
    AppButton,
  },
  data() {
    return {
      cat: null,
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  async created() {
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
};
</script>

<style lang="scss" scoped>
.cat-details {
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

.cat-form {
  &__body {
    display: flex;
    flex-wrap: wrap;
  }
  &__item {
    flex: 0 1 49%;
    padding: 0.5rem 0;
    &:not(:last-child) {
      margin-right: 1%;
    }
  }
}

.cat-form-control {
  margin-top: 0.75rem;
  &__label {
    display: inline-block;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
    font-weight: 500;
  }

  input,
  textarea {
    width: 100%;
    appearance: none;
    border-radius: 0.375rem;
    border-width: 1px;
    padding: 0.5rem 0.75rem;
    line-height: inherit;
    color: inherit;
    &::placeholder {
      color: rgba(160, 174, 192, 1);
    }
    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
      box-shadow: 0 0 transparent, inset 0 0 0 3px rgba(59, 130, 246, 0.5),
        0 0 transparent;
    }
  }
  &__body {
    display: flex;
    input {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    & > .cat-form-control__description {
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }
  }
  &__body-reverse {
    display: flex;
    flex-direction: row-reverse;
    input {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    & > .cat-form-control__description {
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }
  }
  &__description {
    border-width: 1px;
    padding: 0.5rem 0.75rem;
    color: rgb(113, 128, 150);
    border-color: rgb(226, 232, 240);
    background-color: rgb(247, 250, 252);
  }
}
.form-add {
  &__body {
    max-width: 49%;
  }
  button {
    width: auto;
  }
}
</style>
