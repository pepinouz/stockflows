/*
 *   This is a simple card with an image title description and button (optional)
 *   @Author Philippe Pepinouz
 *
 */

import PrimaryButton from "../buttons/PrimaryButton";

function ImageCard({ image, title, descritption, buttonLabel, onClick }) {
  return (
    <div className="max-w-sm bg-white rounded-2xl border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
      <a className="overflow-hidden h-16" onClick={onClick}>
        <img className="rounded-t-2xl" src={image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight font-main text-primary-full dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {descritption}
        </p>
        {buttonLabel && <PrimaryButton label={buttonLabel} />}
      </div>
    </div>
  );
}

export default ImageCard;
