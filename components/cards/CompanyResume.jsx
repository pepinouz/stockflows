function CompanyResume({ title, description, image, ceo }) {
  let endDescription
  if (description.length > 300) {
    endDescription = " ..."
  } else {
    endDescription = ""
  }
  return (
    <div className="flex flex-col items-center bg-white rounded-lg border md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-contain h-36 w-36 p-5 rounded-t-lg md:h-36 md:rounded-none md:rounded-l-lg"
        src={image}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="text-primary-full mb-2 text-2xl font-bold tracking-tight dark:text-white">
          {title}
        </h5>
        <p className="mb-3 text-gray-400">
          {"CEO - " + ceo}
        </p>
        <p className="mb-3 font-normal text-sm text-gray-400 dark:text-gray-400">
          {description.slice(0,300) + endDescription}
        </p>
      </div>
    </div>
  );
}

export default CompanyResume;
