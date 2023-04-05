class Api {
  constructor(options) {
    this.options = options;
}

  getInitialCards() {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-62/cards", {
      headers: {
        authorization: "ee3c4bcd-72fb-4109-aa2b-1222878553d2",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  getUserInfo() {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-62/users/me", {
      headers: {
        authorization: "ee3c4bcd-72fb-4109-aa2b-1222878553d2",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}

export const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-42",
  headers: {
    authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
    "Content-Type": "application/json",
  },
});