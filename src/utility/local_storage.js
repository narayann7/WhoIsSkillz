class AppTheme {
  static getTheme() {
    let theme = localStorage.getItem("app:theme");
    if (!theme) {
      localStorage.setItem("app:theme", "dark");
    }
    return localStorage.getItem("app:theme");
  }
  static switchTheme() {
    let theme = localStorage.getItem("app:theme");
    if (theme === "dark") {
      localStorage.setItem("app:theme", "light");
    } else {
      localStorage.setItem("app:theme", "dark");
    }
  }
  static isDark() {
    return localStorage.getItem("app:theme") === "dark";
  }
}

export default AppTheme;
