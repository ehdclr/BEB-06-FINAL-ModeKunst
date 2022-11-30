function Button({ message }) {
  return (
    <button className="w-full block mx-auto bg-black text-white font-semibold py-1 rounded-md cursor-pointer hover:bg-yellow-500">
      {message}
    </button>
  );
}

export { Button };
