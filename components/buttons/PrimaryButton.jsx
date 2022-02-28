function PrimaryButton({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-white font-main bg-primary-full hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {label}
    </button>
  );
}

export default PrimaryButton;
