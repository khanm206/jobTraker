function showSec(id, btn) {
  const sections = document.getElementsByTagName(`section`);
  for (const sec of sections) {
    sec.classList.add(`hidden`);
  }

  const buttons = document.getElementsByClassName(`opt-btn`);
  for (const btn of buttons) {
    btn.classList.remove(`bg-info`, `text-white`);
  }
  btn.classList.add(`bg-info`, `text-white`);
  document.getElementById(id).classList.remove(`hidden`);
}

function selectedJob(id, jobs) {
  const totalJobs = document.getElementById(id);

  if (id === `interview`) {
    if (jobs.length === 0) {
      totalJobs.innerHTML = `<div class="bg-base-100 py-20 text-center rounded-lg">
                <img class="mx-auto" src="./jobs.png" alt="image">
                <h2 class="text-3xl font-semibold">No jobs available</h2>
                <p class="text-lg text-neutral/60">Check back soon for new job opportunities</p>
            </div>`;
      return;
    }
    totalJobs.innerHTML = ``;
    for (const job of jobs) {
      const div = document.createElement(`div`);
      div.classList.add(
        "card",
        "space-y-4",
        "bg-base-100",
        "p-8",
        "rounded-2xl",
      );
      div.innerHTML = `
<div class="lg:flex justify-between items-start">


   <div class="space-y-6">
   
   
    <div>
                    <h2 class="company text-2xl font-semibold">${job.company}</h2>
                    <p class="role text-lg text-neutral/70">${job.role}</p>
                </div>
                <div class="lg:flex items-center gap-2 text-neutral/70">
                    <p class="location">${job.location}</p>
                    <i class="fa-solid fa-circle"></i>
                    <p class="type">${job.type}</p>
                    <i class="fa-solid fa-circle"></i>
                    <p class="salary">${job.salary}</p>
                </div>
                <div class="stat w-fit px-4 py-2 rounded-lg text-lg font-semibold bg-success/20 text-success border border-success">INTERVIEW</div>
                <p class="description">${job.description}</p>
                <div class="space-x-2 text-xl">
                    <button onclick="changeStatusOnAll('interview-btn')"  class="interview-btn btn btn-outline btn-success">INTERVIEW</button>
                    <button onclick="changeStatusOnAll('rejected-btn')" class="rejected-btn btn btn-outline btn-error">REJECTED</button>
                </div>

   
   </div>
<br class="hidden">
 <button class="del btn border border-neutral/20 p-2 rounded-full">
 <i class="del fa-solid fa-trash-can"></i>
  </button>
</div>
    `;
      totalJobs.appendChild(div);
    }
  } else if (id === `rejected`) {
    if (jobs.length === 0) {
      totalJobs.innerHTML = `<div class="bg-base-100 py-20 text-center rounded-lg">
                <img class="mx-auto" src="./jobs.png" alt="image">
                <h2 class="text-3xl font-semibold">No jobs available</h2>
                <p class="text-lg text-neutral/60">Check back soon for new job opportunities</p>
            </div>`;
      return;
    }
    totalJobs.innerHTML = ``;
    for (const job of jobs) {
      const div = document.createElement(`div`);
      div.classList.add(
        "card",
        "space-y-4",
        "bg-base-100",
        "p-8",
        "rounded-2xl",
      );
      div.innerHTML = `
<div class="lg:flex justify-between items-start">


   <div class="space-y-6">
   
   
    <div>
                    <h2 class="company text-2xl font-semibold">${job.company}</h2>
                    <p class="role text-lg text-neutral/70">${job.role}</p>
                </div>
                <div class="lg:flex items-center gap-2 text-neutral/70">
                    <p class="location">${job.location}</p>
                    <i class="fa-solid fa-circle"></i>
                    <p class="type">${job.type}</p>
                    <i class="fa-solid fa-circle"></i>
                    <p class="salary">${job.salary}</p>
                </div>
                <div class="stat w-fit px-4 py-2 rounded-lg text-lg font-semibold  bg-error/20 text-error border border-error ">REJECTED</div>
                <p class="description">${job.description}</p>
                <div class="space-x-2 text-xl">
                    <button onclick="changeStatusOnAll('interview-btn')" class="interview-btn btn btn-outline btn-success">INTERVIEW</button>
                    <button onclick="changeStatusOnAll('rejected-btn')" class="rejected-btn btn btn-outline btn-error">REJECTED</button>
                </div>

   
   </div>
<br class="hidden">
 <button class="del btn border border-neutral/20 p-2 rounded-full">
 <i class="del fa-solid fa-trash-can"></i>
  </button>
</div>
    `;
      totalJobs.appendChild(div);
    }
  }
}

function changeStatusOnAll(e) {
  let status = document.getElementById(`status`);
  const allJobsDiv = document.getElementById(`allJobsDiv`);
  if (e === `interview-btn`) {
    status.innerText = `INTERVIEW`;
    status.classList.remove(
      `bg-error/20`,
      `text-error`,
      `border`,
      `border-error`,
    );
    status.classList.add(
      `bg-success/20`,
      `text-success`,
      `border`,
      `border-success`,
    );
    allJobsDiv.classList.remove(`border-error`);
    allJobsDiv.classList.add(`border-l-4`, `border-success`);
  } else if (e === `rejected-btn`) {
    status.innerText = `REJECTED`;
    status.classList.remove(
      `bg-success/20`,
      `text-success`,
      `border`,
      `border-success`,
    );
    status.classList.add(`bg-error/20`, `text-error`, `border`, `border-error`);
    allJobsDiv.classList.remove(`border-success`);
    allJobsDiv.classList.add(`border-l-4`, `border-error`);
  }
}
