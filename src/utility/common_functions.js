class CommonFunctions {
  static SwitchTheme() {
    let theme = localStorage.getItem("app:theme");

    if (theme === "dark") {
      localStorage.setItem("app:theme", "light");
    } else {
      localStorage.setItem("app:theme", "dark");
    }
  }
}
