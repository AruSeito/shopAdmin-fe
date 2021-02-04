export const request = (params) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: params.url,
      type: params.type || "GET",
      data: params.data,
      success: (res) => {
        if (0 === res.status) {
          typeof resolve === "function" && resolve(res.data, res.msg);
        } else if (1 === res.status) {
          typeof reject === "function" && reject(res.msg || res.data);
        } else if (10 === res.status) {
          typeof reject === "function" && reject(res.msg);
          doLogin();
        }
      },
      error: (err) => {
        typeof reject === "function" && reject(err);
      },
    });
  });
};

function doLogin() {
  window.location.href = `/login?redirect=${encodeURIComponent(
    window.location.pathname
  )}`;
}

export function getUrlParam(name) {
  let queryString = window.location.search.split("?")[1] || "";
  let reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  let result = queryString.match(reg);
  return result ? decodeURIComponent(result[2]) : null;
}

export function errorTips(errMsg) {
  alert(errMsg || "好像哪里不对～");
}
