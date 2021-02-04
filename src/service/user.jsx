import { request } from "Util/index.jsx";
export function userLogin(loginInfo) {
  return request({
    url: "/manage/user/login.do",
    type: "POST",
    data: loginInfo,
  });
}
