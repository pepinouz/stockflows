function FloatingInput({label, placeholder, type, name}) {
  return (
    <div class="relative z-0 mb-6 w-full group">
      <input
        type={type}
        name={name}
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-full focus:outline-none focus:ring-0 focus:border-primary-full peer"
        placeholder={placeholder}
        required
      />
      <label
        for={name}
        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-full peer-focus:dark:text-primary-full peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
}

export default FloatingInput