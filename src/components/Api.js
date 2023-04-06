class Api {
  constructor(baseUrl, headers) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: {
        authorization: "ee3c4bcd-72fb-4109-aa2b-1222878553d2",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

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

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  setUserInfo(formData) {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-62/users/me", {
      method: "PATCH",
      headers: {
        authorization: "ee3c4bcd-72fb-4109-aa2b-1222878553d2",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        about: formData.about,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  addCard(formData) {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-62/cards", {
      method: "POST",
      headers: {
        authorization: "ee3c4bcd-72fb-4109-aa2b-1222878553d2",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        link: formData.link,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  deleteCard(cardId) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/cohort-62/cards/${cardId}`,
      {
        method: "DELETE",
        headers: {
          authorization: "ee3c4bcd-72fb-4109-aa2b-1222878553d2",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  likeCard(cardId) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/cohort-62/cards/${cardId}/likes`,
      {
        method: "PUT",
        headers: {
          authorization: "ee3c4bcd-72fb-4109-aa2b-1222878553d2",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  unlikeCard(cardId) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/cohort-62/cards/${cardId}/likes`,
      {
        method: "DELETE",
        headers: {
          authorization: "ee3c4bcd-72fb-4109-aa2b-1222878553d2",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  setUserAvatar(formData) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/cohort-62/users/me/avatar`,
      {
        method: "PATCH",
        headers: {
          authorization: "ee3c4bcd-72fb-4109-aa2b-1222878553d2",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          avatar: formData.link,
        }),
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}

export const api = new Api(`https://mesto.nomoreparties.co/v1/cohort-62`, {
  authorization: "ee3c4bcd-72fb-4109-aa2b-1222878553d2",
  "Content-Type": "application/json",
});
