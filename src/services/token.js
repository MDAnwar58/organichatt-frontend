import Cookies from "js-cookie";
import { decodeToken } from "react-jwt";

export function getToken(cookie_name) {
  const token = Cookies.get(cookie_name);
  if (token) {
    const DecodedToken = decodeToken(token);
    const { exp, iat, iss, ...filteredObjectToken } = DecodedToken;
    return {
      user: filteredObjectToken,
    };
  } else {
    return null;
  }
}

export function setToken(cookie_name, value, expiry_in) {
  if (typeof expiry_in === "string") {
    if (expiry_in.endsWith("h")) {
      const hours = parseInt(expiry_in.replace("h", ""), 10);
      let expiry_hours = hours / 24;
      Cookies.set(cookie_name, value, {
        expires: expiry_hours,
      });
    } else {
      const minutes = parseInt(expiry_in.replace("min", ""), 10);
      let expiry_minutes = minutes / (24 * 60);
      Cookies.set(cookie_name, value, {
        expires: expiry_minutes,
      });
    }
  } else {
    Cookies.set(cookie_name, value, {
      expires: expiry_in,
    });
  }
}

export function removeToken(cookie_name) {
  if (cookie_name) {
    Cookies.set(cookie_name, "", {
      expires: -1,
    });
  } else {
    return null;
  }
}
