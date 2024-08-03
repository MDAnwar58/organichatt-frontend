"use client";
import { Fragment, useEffect } from "react";
import FavoriteItem from "./FavoriteItem";
import { useSelector } from "react-redux";

export default function DrawerFavoriteList({
  isOpenFavorite,
  setIsOpenFavorite,
}) {
  const handleClose = () => setIsOpenFavorite(false);
  useEffect(() => {
    if (isOpenFavorite) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up function to reset the style when the component unmounts or isMobileCategoryManusOpen changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenFavorite]);
  const favorites = useSelector((state) => state.commonData.favorites);

  return (
    <Fragment>
      <div
        className={`fixed top-0 right-0 z-40 h-screen overflow-y-auto transition-transform ${
          isOpenFavorite === true ? "translate-none" : "translate-x-full"
        } bg-white sm:w-[30rem] w-full dark:bg-gray-800`}
        tabIndex={-1}
        aria-labelledby="drawer-right-label"
      >
        {/* favorite drawer header */}
        <div className=" bg-green-500 px-5 sticky top-0 z-10">
          <h5
            id="drawer-right-label"
            className="inline-flex items-center mb-4 text-base font-semibold text-white dark:text-gray-400 pt-3"
          >
            <svg
              className="w-7 h-7 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="text-xl font-semibold capitalize">
              Favorite list - {favorites.length}
            </span>
          </h5>
          <button
            type="button"
            className="text-white bg-transparent hover:bg-red-500 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={handleClose}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        {/* favorite drawer body */}
        <div className=" pb-20 -z-10 h-full overflow-y-auto overflow-x-hidden">
          <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
            <ul className="flex flex-col divide-y dark:divide-gray-300">
              {favorites.length > 0
                ? favorites.map((favorite) => (
                    <Fragment key={favorite.id}>
                      <FavoriteItem favorite={favorite} />
                    </Fragment>
                  ))
                : null}
            </ul>
          </div>
        </div>
        <div className="footer sticky bottom-0">
          <button
            type="button"
            className=" uppercase bg-red-400 hover:bg-red-500 w-full text-center py-3 text-lg font-semibold text-white"
            onClick={handleClose}
          >
            close
          </button>
        </div>
      </div>
      {isOpenFavorite === true && (
        <div
          onClick={handleClose}
          className="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30"
        />
      )}
    </Fragment>
  );
}
