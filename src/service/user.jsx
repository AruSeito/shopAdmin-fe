import { request } from "Util/index.jsx";
export function userLogin(loginInfo) {
  return request({
    url: "/manage/user/login.do",
    type: "POST",
    data: loginInfo,
  });
}

export function userLogout() {
  return request({
    url: "/user/logout.do",
    type: "POST",
  });
}
