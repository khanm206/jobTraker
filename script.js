let totalList = [
  {
    company: "Mobile First Corp",
    role: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "£100,000–£155,000",
    status: "NOT APPLIED",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
  },
  {
    company: "TechNova Ltd",
    role: "Frontend Developer",
    location: "London",
    type: "Full-time",
    salary: "£55,000–£75,000",
    status: "NOT APPLIED",
    description:
      "Develop responsive web interfaces using HTML, CSS, and JavaScript with modern frameworks.",
  },
  {
    company: "CloudStack",
    role: "Backend Developer",
    location: "Remote",
    type: "Full-time",
    salary: "£70,000–£95,000",
    status: "NOT APPLIED",
    description:
      "Design and maintain scalable APIs and backend services using Node.js and databases.",
  },
  {
    company: "FinCore Solutions",
    role: "Junior Web Developer",
    location: "Manchester",
    type: "Full-time",
    salary: "£28,000–£35,000",
    status: "NOT APPLIED",
    description:
      "Assist in building and maintaining company websites and internal tools.",
  },
  {
    company: "HealthTech Labs",
    role: "Full Stack Developer",
    location: "Remote",
    type: "Full-time",
    salary: "£65,000–£85,000",
    status: "NOT APPLIED",
    description:
      "Work across frontend and backend to deliver healthcare-focused digital products.",
  },
  {
    company: "AI Works",
    role: "JavaScript Developer",
    location: "Birmingham",
    type: "Contract",
    salary: "£400–£500/day",
    status: "NOT APPLIED",
    description:
      "Build fast, interactive web applications with modern JavaScript and tooling.",
  },
  {
    company: "EcomBoost",
    role: "Shopify Developer",
    location: "Remote",
    type: "Contract",
    salary: "£45,000–£60,000",
    status: "NOT APPLIED",
    description:
      "Create and customize Shopify themes and integrations for e-commerce clients.",
  },
  {
    company: "DataWave",
    role: "Frontend Engineer",
    location: "London",
    type: "Full-time",
    salary: "£60,000–£80,000",
    status: "NOT APPLIED",
    description:
      "Translate UI/UX designs into high-quality, accessible frontend code.",
  },
  {
    company: "StartupForge",
    role: "MERN Stack Developer",
    location: "Remote",
    type: "Full-time",
    salary: "£50,000–£70,000",
    status: "NOT APPLIED",
    description:
      "Build full-stack applications using MongoDB, Express, React, and Node.js.",
  },
  {
    company: "SecureNet",
    role: "Web Developer",
    location: "Leeds",
    type: "Full-time",
    salary: "£40,000–£55,000",
    status: "NOT APPLIED",
    description:
      "Maintain and improve company websites with a focus on performance and security.",
  },
];
let interviewList = [];
let rejectedList = [];

let totalJob = document.getElementsByClassName(`total-num`);
let interviewJob = document.getElementById(`interview-num`);
let rejectedJob = document.getElementById(`rejected-num`);

function countJobs() {
  for (let job of totalJob) {
    job.innerText = totalList.length;
  }
  interviewJob.innerText = interviewList.length;
  rejectedJob.innerText = rejectedList.length;
}

// All section
function allJobs(jobs) {
  const totalJobs = document.getElementById(`total`);
  totalJobs.innerHTML = ``;
  for (const job of jobs) {
    const div = document.createElement(`div`);
    div.classList.add(
      "card",
      "space-y-4",
      "bg-base-100",
      "p-4",
      "lg:p-8",
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
    <div class="stat bg-info/20 w-fit px-4 py-2 rounded-lg text-lg font-semibold">${job.status}</div>
    <p class="description">${job.description}</p>
    <div class="space-x-2 text-xl">
      <button class="interview-btn btn btn-outline btn-success">INTERVIEW</button>
      <button class="rejected-btn btn btn-outline btn-error">REJECTED</button>
    </div>
  </div>
<br class="lg:hidden">
  <button class="del btn border border-neutral/20 p-2 rounded-full">
 <i class="del fa-solid fa-trash-can"></i>
  </button>
</div>  
    `;
    totalJobs.appendChild(div);
  }
  countJobs();
}
allJobs(totalList);

document.querySelector(`main`).addEventListener(`click`, function (event) {
  const parent = event.target.parentNode.parentNode;

  const company = parent.querySelector(`.company`).innerText;
  const role = parent.querySelector(`.role`).innerText;
  const location = parent.querySelector(`.location`).innerText;
  const type = parent.querySelector(`.type`).innerText;
  const salary = parent.querySelector(`.salary`).innerText;
  const status = parent.querySelector(`.stat`).innerText;
  const description = parent.querySelector(`.description`).innerText;

  const cardInfo = {
    company,
    role,
    location,
    type,
    salary,
    status,
    description,
  };

  //   Interview button
  if (event.target.classList.contains(`interview-btn`)) {
    let stat = parent.querySelector(`.stat`);
    stat.innerText = `INTERVIEW`;
    stat.classList.remove(
      `bg-error/20`,
      `text-error`,
      `border`,
      `border-error`,
    );
    stat.classList.add(
      `bg-success/20`,
      `text-success`,
      `border`,
      `border-success`,
    );
    parent.parentNode.parentNode.classList.remove(`border-error`);
    parent.parentNode.parentNode.classList.add(`border-l-4`, `border-success`);

    const duplicate = interviewList.find(
      (item) => item.company == cardInfo.company,
    );
    if (!duplicate) {
      interviewList.push(cardInfo);
    }
    rejectedList = rejectedList.filter(
      (item) => item.company != cardInfo.company,
    );
    countJobs();

    selectedJob(`rejected`, rejectedList);
    selectedJob(`interview`, interviewList);
  }

  // Rejected button
  else if (event.target.classList.contains(`rejected-btn`)) {
    let stat = parent.querySelector(`.stat`);
    stat.innerText = `REJECTED`;
    stat.classList.remove(
      `bg-success/20`,
      `text-success`,
      `border`,
      `border-success`,
    );
    stat.classList.add(`bg-error/20`, `text-error`, `border`, `border-error`);
    parent.parentNode.parentNode.classList.remove(`border-success`);
    parent.parentNode.parentNode.classList.add(`border-l-4`, `border-error`);
    const duplicate = rejectedList.find(
      (item) => item.company == cardInfo.company,
    );
    if (!duplicate) {
      rejectedList.push(cardInfo);
    }
    interviewList = interviewList.filter(
      (item) => item.company != cardInfo.company,
    );
    countJobs();
    selectedJob(`interview`, interviewList);
    selectedJob(`rejected`, rejectedList);
  }

  //   Delete button
  else if (event.target.classList.contains(`del`)) {
    totalList = totalList.filter((item) => item.company != cardInfo.company);
    interviewList = interviewList.filter(
      (item) => item.company != cardInfo.company,
    );
    rejectedList = rejectedList.filter(
      (item) => item.company != cardInfo.company,
    );

    selectedJob(`rejected`, rejectedList);
    selectedJob(`interview`, interviewList);
    allJobs(totalList);
    countJobs();
  }
});
