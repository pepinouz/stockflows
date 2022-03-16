/*
 *   This is a simple card with an image title description and button (optional)
 *   @Author Philippe Pepinouz
 *
 */

import Link from "next/link";
import PrimaryButton from "../buttons/PrimaryButton";
import ImageCardSkeleton from "../skeleton/cards/ImageCardSkeleton";

function ImageCard({
  image,
  title,
  descritption,
  buttonLabel,
  onClick,
  loading,
  link = "",
}) {
  return (
    <>
      {loading ? (
        <ImageCardSkeleton />
      ) : (
        <Link href={link}>
          <div className="max-w-sm bg-white rounded-2xl border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a
              className="flex justify-center overflow-hidden h-28"
              onClick={onClick}
            >
              <img className="rounded-t-2xl p-2 object-cover" src={image} alt="" />
            </a>
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
