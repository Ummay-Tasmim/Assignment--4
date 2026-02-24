const jobs = [
{id:1,company:"TechNova",position:"Frontend Developer",location:"Dhaka",type:"Full-time",salary:"$1000",description:"Build modern web applications.",status:"all"},
{id:2,company:"CloudMatrix",position:"Backend Engineer",location:"Remote",type:"Contract",salary:"$1400",description:"Develop scalable APIs.",status:"all"},
{id:3,company:"BrightApps",position:"UI Designer",location:"Chattogram",type:"Full-time",salary:"$900",description:"Design intuitive interfaces.",status:"all"},
{id:4,company:"NextGen IT",position:"React Developer",location:"Sylhet",type:"Part-time",salary:"$800",description:"Create SPA applications.",status:"all"},
{id:5,company:"DevSpark",position:"Node Developer",location:"Dhaka",type:"Full-time",salary:"$1100",description:"Work on backend systems.",status:"all"},
{id:6,company:"InnovaTech",position:"QA Engineer",location:"Remote",type:"Full-time",salary:"$850",description:"Perform software testing.",status:"all"},
{id:7,company:"DataCore",position:"Data Analyst",location:"Dhaka",type:"Full-time",salary:"$1000",description:"Analyze company data.",status:"all"},
{id:8,company:"CyberSoft",position:"Full Stack Developer",location:"Remote",type:"Full-time",salary:"$1500",description:"Handle frontend and backend.",status:"all"},
];

let currentTab="all";

const container=document.getElementById("jobsContainer");
const interviewCount=document.getElementById("interviewCount");
const rejectedCount=document.getElementById("rejectedCount");
const totalCount=document.getElementById("totalCount");
const tabCount=document.getElementById("tabJobCount");
const empty=document.getElementById("emptyState");
const tabs=document.querySelectorAll(".tab");

function render(){
  container.innerHTML="";

  const filtered = jobs.filter(job =>
    currentTab==="all" ? true : job.status===currentTab
  );

  tabCount.innerText = filtered.length + " Jobs";
  empty.style.display = filtered.length===0 ? "block":"none";

  filtered.forEach(job=>{
    const card=document.createElement("div");
    card.className="job-card";

    card.innerHTML=`
      <h3>${job.company}</h3>
      <small>${job.position} • ${job.location}</small>
      <p><b>Type:</b> ${job.type}</p>
      <p><b>Salary:</b> ${job.salary}</p>
      <p>${job.description}</p>
      <button class="btn interview">Interview</button>
      <button class="btn rejected">Rejected</button>
      <button class="btn delete">Delete</button>
    `;

    card.querySelector(".interview").addEventListener("click",()=>{
      job.status="interview";
      currentTab="interview";
      setActiveTab();
      render();
    });

    card.querySelector(".rejected").addEventListener("click",()=>{
      job.status="rejected";
      currentTab="rejected";
      setActiveTab();
      render();
    });

    card.querySelector(".delete").addEventListener("click",()=>{
      const index=jobs.findIndex(j=>j.id===job.id);
      jobs.splice(index,1);
      render();
    });

    container.appendChild(card);
  });

  updateDashboard();
}

function updateDashboard(){
  interviewCount.innerText = jobs.filter(j=>j.status==="interview").length;
  rejectedCount.innerText = jobs.filter(j=>j.status==="rejected").length;
  totalCount.innerText = jobs.length;
}

tabs.forEach(tab=>{
  tab.addEventListener("click",()=>{
    currentTab=tab.dataset.tab;
    setActiveTab();
    render();
  });
});

function setActiveTab(){
  tabs.forEach(t=>t.classList.remove("active"));
  document.querySelector(`[data-tab="${currentTab}"]`).classList.add("active");
}

render();