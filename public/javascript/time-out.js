class AutoLogout {
  constructor() {
    this.events = [
      "load",
      "mousemove",
      "mousedown",
      "click",
      "scroll",
      "keypress",
    ];

    this.warn = this.warn.bind(this);
    this.logout = this.logout.bind(this);
    this.resetTimeout = this.resetTimeout.bind(this);

    this.events.forEach((event) => {
      window.addEventListener(event, this.resetTimeout);
    });

    this.setTimeout();
  }
  // if activity clear (reset) timers
  clearTimeout() {
    //   if (this.warnTimeout) clearTimeout(this.warnTimeout);
    //   if (this.logoutTimeout) clearTimeout(this.logoutTimeout);
  }

  setTimeout() {
    // this.warnTimeout = setTimeout(this.warn, 1000 * 60 * 29);
    // this.logoutTimeout = setTimeout(this.logout, 1000 * 60 * 30);
  }

  resetTimeout() {
    // this.clearTimeout();
    // this.setTimeout();
  }
  // give user 1 min warning
  warn() {
    window.alert("You will be logged out automatically in 1 minute.");
  }
  // end session/log user out
  logout() {
    this.destroy(); // Cleanup
  }

  destroy() {
    this.clearTimeout();

    this.events.forEach((event) => {
      window.removeEventListener(event, this.resetTimeout);
    });
  }
}
