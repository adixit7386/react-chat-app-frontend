let user;

if (localStorage.getItem("persist:root") !== undefined) {
  if (JSON.parse(localStorage?.getItem("persist:root"))?.user !== undefined) {
    user = JSON.parse(
      JSON.parse(localStorage?.getItem("persist:root"))?.user
    )?.currentUser;
  }
}

module.exports = user;
