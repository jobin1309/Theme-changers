const grandDaddy = document.querySelector(".nav");
const grandTitle = document.querySelector(".title");
const btn = document.querySelector("button");
const container = document.querySelector(".main-container");
const mainy = document.querySelector(".main");
const list = document.querySelectorAll("li");
const input = document.querySelector("input");
const add = document.getElementById("addItems");
const bottom = document.querySelectorAll(".bottom");

class ChangeTheme {
  constructor() {}

  navChange(nav) {
    this.nav = nav;
    if (this.nav.style.backgroundColor === "black") {
      this.nav.style.backgroundColor = "rgb(66, 122, 161)";
    } else {
      this.nav.style.backgroundColor = "black";
    }
  }

  titleChange(title) {
    this.title = title;
    if (this.title.style.color === "rgb(66, 122, 161)") {
      this.title.style.color = "black";
    } else {
      this.title.style.color = "rgb(66, 122, 161)";
    }
  }

  bodyChange(body) {
    this.body = body;
    if (this.body.style.backgroundColor === "black") {
      this.body.style.backgroundColor = "white";
    } else {
      this.body.style.backgroundColor = "black";
    }
  }

  mainChange(main) {
    this.main = main;
    if (this.main.style.border === "1px solid rgb(66, 122, 161)") {
      this.main.style.border = "1px solid black";
    } else {
      this.main.style.border = "1px solid rgb(66, 122, 161)";
    }
  }
  buttonChange(button) {
    this.button = button;
    if (
      button.style.border === "1px solid rgb(66, 122, 161)" &&
      button.style.color === "rgb(66, 122, 161)"
    ) {
      button.style.border = "1px solid black";
      button.style.color = "white";
    } else {
      button.style.border = "1px solid rgb(66, 122, 161)";
      button.style.color = "rgb(66, 122, 161)";
    }
  }
  listChange(list) {
    this.list = list;
    this.list.forEach((lis) => {
      if (
        lis.style.border === "1px solid rgb(66, 122, 161)" &&
        lis.style.color === "rgb(66, 122, 161)"
      ) {
        lis.style.border = "1px solid black";
        lis.style.color = "black";
      } else {
        lis.style.border = "1px solid rgb(66, 122, 161)";
        lis.style.color = "rgb(66, 122, 161)";
      }
    });
  }

  inputChange(input) {
    this.input = input;
    if (this.input.style.backgroundColor === "rgb(66, 122, 161)") {
      this.input.style.backgroundColor = "white";
      this.input.style.border = "1px solid black";
    } else {
      this.input.style.backgroundColor = "rgb(66, 122, 161)";
      this.input.style.border = "1px solid rgb(66, 122, 161)";
    }
  }
  add(items) {
    this.items = items;
    if (this.items.style.color === "rgb(66, 122, 161)") {
      this.items.style.color = "black";
    } else {
      this.items.style.color = "rgb(66, 122, 161)";
    }
  }
  bottomChange(bottom) {
    this.bottom = bottom;
    bottom.forEach((bots) => {
      bots.style.borderBottom = "0";
    });
  }
}
const changeTheme = new ChangeTheme();

btn.addEventListener("click", () => {
  changeTheme.titleChange(grandTitle);
  changeTheme.bodyChange(container);
  changeTheme.mainChange(mainy);
  changeTheme.navChange(grandDaddy);
  changeTheme.buttonChange(btn);
  changeTheme.listChange(list);
  changeTheme.inputChange(input);
  changeTheme.add(add);
  changeTheme.bottomChange(bottom);
});
