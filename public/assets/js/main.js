const projects = [
  {
    title: "Portfolio Website",
    image: "./assets/images/portfolioscreen.png",
    desc: "A modern personal portfolio designed to highlight my skills, projects, and experience. Built with clean UI components, smooth animations, and a fully responsive layout for all devices.",
    tech: ["HTML", "CSS", "JS", "Tailwind"],
    demo: null,
    code: "https://github.com/abdullameen", // will show
  },
  {
    title: "Game",
    image: "./assets/images/game.png",
    desc: "A Classic Game built with clean UI components, smooth animations, and a fully responsive layout for all devices.",
    tech: ["HTML", "CSS", "JS", "Tailwind"],
    demo: "https://tictactoe-gameplay.vercel.app/",
    code: "https://github.com/abdullameen", // will show
  }
];

function createProjectCard(project) {
  return `
    <div
      class="group w-[400px] h-[560px] bg-gray-900/60 backdrop-blur-md border border-white/10
             rounded-2xl shadow-[0_0_30px_rgba(138,43,226,0.4)]
             overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,149,255,0.7)] hover:-translate-y-1">

      <!-- Image -->
      <div class="relative w-full h-64 overflow-hidden">
          <img src="${project.image}"
               class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110">

          <!-- Nebula Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          <!-- Project Title -->
          <h3 class="absolute bottom-4 left-4 text-2xl font-semibold text-stone-300 tracking-wide drop-shadow-lg">
              ${project.title}
          </h3>
      </div>

      <!-- Content -->
      <div class="space-y-4 p-4">

          <!-- Live Demo (Left aligned, only if exists) -->
          ${
            project.demo
              ? `
            <div class="flex justify-start">
                <a href="${project.demo}"
                    class="text-purple-300 text-sm flex items-center gap-1   hover:text-purple-200 transition cursor-pointer">
                    Live Demo <span>➜</span>
                </a>
            </div>
          `
              : ""
          }

          <!-- Description -->
          <p class="text-gray-300 text-sm leading-relaxed">
              ${project.desc}
          </p>

          <!-- Tech Stack -->
          <div class="flex flex-wrap gap-2">
              ${project.tech
                .map(
                  (t) =>
                    `<span class="px-3 py-1 text-xs bg-purple-600/20 border border-purple-400/30 text-purple-200 rounded-full">${t}</span>`
                )
                .join("")}
          </div>

          <!-- Code (only if exists) -->
          ${
            project.code
              ? `
              <div class="pt-2">
                <a href="${project.code}"
                    class="flex items-center gap-2 text-purple-300 hover:text-purple-200 transition text-sm">
                    <img src="./assets/images/icons/github.svg" alt="github">
                    Code
                </a>
              </div>
            `
              : ""
          }

      </div>
    </div>
  `;
}

const container = document.getElementById("project-container");

projects.forEach((proj) => {
  container.innerHTML += createProjectCard(proj);
});
