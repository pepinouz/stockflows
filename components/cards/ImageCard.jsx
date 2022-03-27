/*
 *   This is a simple card with an image title description and button (optional)
 *   @Author Philippe Pepinouz
 *
 */

import Link from "next/link";
import { useState, useRef } from "react";
import { useOutsideClick } from "../../lib/customHooks";
import PrimaryButton from "../buttons/PrimaryButton";
import DropDownMenu from "../menu/DropdownMenu";
import ImageCardSkeleton from "../skeleton/cards/ImageCardSkeleton";

function ImageCard({
  image,
  title,
  descritption,
  buttonLabel,
  onClick,
  loading,
  link = "",
  dropDownItems,
  dropDownItemClick
}) {
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();
  // State of the dropdown menu
  const [isOpen, setIsOpen] = useState(false);
  // Use the custom hook to close the dropdown menu if a user clicks outside
  useOutsideClick(ref, () => setIsOpen(false));
  return (
    <>
      {loading ? (
        <ImageCardSkeleton />
      ) : (
        <Link href={link}>
          <div className="max-w-sm bg-white rounded-2xl border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4 relative">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                class="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                </svg>
              </button>
              <DropDownMenu
                onClick={dropDownItemClick}
                menuItems={dropDownItems}
                ref={ref}
                show={isOpen}
              />
            </div>
            <div className="flex justify-center overflow-hidden h-28">
              <img
                className="rounded-full p-4 object-contain w-28 h-28"
                src={image}
                alt=""
              />
            </div>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight font-main text-primary-full dark:text-white">
                {title}
              </h5>
              <p className="mb-3 text-sm font-normal text-gray-400 dark:text-gray-400">
                {descritption}
              </p>
              {buttonLabel && <PrimaryButton label={buttonLabel} />}
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

export default ImageCard;
