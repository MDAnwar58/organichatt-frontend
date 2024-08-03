import React from "react";

export function ImageUrl(url) {
  return process.env.NEXT_PUBLIC_BACKEND_API_URL + url;
}
