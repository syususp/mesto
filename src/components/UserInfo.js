export default class UserInfo {
  constructor({ nameSelector, infoSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._infoElement = document.querySelector(infoSelector);
    this._avatarElement = document.querySelector(avatarSelector);
    this.userId = null;
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._infoElement.textContent,
      avatar: this._avatarElement.src,
    };
  }

  getUserId() {
    return this.userId;
  }

  setUserInfo({ name, about, avatar, _id }) {
    this._nameElement.textContent = name;
    this._infoElement.textContent = about;
    this._avatarElement.src = avatar;
    this.userId = _id;
  }

  setUserAvatar(res) {
    this._avatarElement.src = res.avatar;
  }
}
