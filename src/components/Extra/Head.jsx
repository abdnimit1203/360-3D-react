const Head = () => {
  return (
<>
      <div class="navbar bg-[#c0444456]">
        <div class="flex-none">
          <button class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div class="flex-none">
          <button class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className='p-6 mt-20 w-28 bg-[#11111148] text-white '>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, repudiandae.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis incidunt ratione, illo harum corporis neque iure molestiae nisi molestias iusto libero, vel velit aliquam inventore necessitatibus ducimus unde ea! Ipsum perferendis tenetur labore, magnam natus porro ducimus repellendus cupiditate iste!</p>
                <button className='btn btn-primary'>Hire me</button>
            </div>
</>
  );
};

export default Head;
