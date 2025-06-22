const terminal = document.getElementById("terminal-output");
const input = document.getElementById("terminal-input");

function bootMessage() {
  terminal.innerHTML = "booting up...";
  setTimeout(() => {
    resetTerminal();
  }, 1200);
}

function makeLink(url, text) {
  return `<a href="${url}" target="_blank" class="terminal-link">${text}</a>`;
}

// home page: short, basic command list
function showIntro() {
  terminal.innerHTML += `
    <div class="centered-text">
      Available commands:<br>
      → whoami    See who I am<br>
      → skills    See my tools and certifications<br>
      → projects  View my work<br>
      → resume    Download my resume<br>
      → contact   Connect with me<br>
      → help      List available commands
    </div>
  `;
}


// help command: stylized version with extra content
function showHelp() {
  terminal.innerHTML = `
Welcome to the interface. Limited options. Limited control.<br><br>

<div class="command-list">
  <div class="command-row"><span class="cmd">whoami</span><span class="desc">A brief attempt at self-definition</span></div>
  <div class="command-row"><span class="cmd">skills</span><span class="desc">A list of marketable traits</span></div>
  <div class="command-row"><span class="cmd">projects</span><span class="desc">Evidence of productivity</span></div>
  <div class="command-row"><span class="cmd">resume</span><span class="desc">PDF form of professional identity</span></div>
  <div class="command-row"><span class="cmd">contact</span><span class="desc">For when this needs to go somewhere</span></div>
</div><br>

<span class="terminal-tip">What is Sick Sad World?</span><br>
This website is named after the fake show from <i>Daria</i>.<br>
Weird news there. Resumes here.<br>
Type a command. The illusion continues.<br>
  `;
}

function resetTerminal() {
  terminal.innerHTML = `
Welcome to Sick Sad World — Ariana's portfolio<br/>
`;
  showIntro();
  input.value = "";
  input.focus();
}

function runCommand(cmd) {
  cmd = cmd.trim().toLowerCase();

  switch (cmd) {
    case "whoami":
      fetch("/api/whoami")
        .then(res => res.json())
        .then(data => {
          terminal.innerHTML = `
<b>${data.name}</b><br/>
<i>${data.title}</i><br/><br/>
${data.blurb}
          `;
        })
        .catch(() => {
          terminal.innerHTML = "Error fetching whoami info.";
        });
      break;

    case "skills":
      fetch("/api/skills")
        .then(res => res.json())
        .then(data => {
          terminal.innerHTML = `
<b>Languages:</b> ${data.languages.join(", ")}<br/>
<b>Web & Tools:</b> ${data.tools.join(", ")}<br/>
<b>Platforms:</b> ${data.platforms.join(", ")}<br/>
<b>Certifications:</b> ${data.certifications.join(", ")}
          `;
        })
        .catch(() => {
          terminal.innerHTML = "Error fetching skills.";
        });
      break;

    case "projects":
      fetch("/api/projects")
        .then(res => res.json())
        .then(projects => {
          terminal.innerHTML = `
<b>Projects</b><br/><br/>
${projects.map(p =>
  `<div class="project-line">
    ${makeLink(p.link, `<b>${p.title}</b>`)} – ${p.desc}
  </div>`
).join("<br/>")}`;
        })
        .catch(() => {
          terminal.innerHTML = "Error loading projects.";
        });
      break;

    case "resume":
      fetch("/api/resume")
        .then(res => res.json())
        .then(data => {
          terminal.innerHTML = `
<b>Resume Preview</b><br/><br/>
${data.experiences.map(exp =>
  `<b>${exp.role}</b>: ${exp.summary}`
).join("<br/>")}<br/><br/>
${makeLink(data.link, "--> Download Full Resume (PDF)")}
          `;
        })
        .catch(() => {
          terminal.innerHTML = "Error fetching resume.";
        });
      break;

    case "contact":
      fetch("/api/contact")
        .then(res => res.json())
        .then(data => {
          terminal.innerHTML = makeLink(data.linkedin, "Connect on LinkedIn");
        })
        .catch(() => {
          terminal.innerHTML = "Error fetching contact info.";
        });
      break;

    case "help":
      showHelp();
      break;

    default:
      terminal.innerHTML = `Unknown command: ${cmd}<br/><br/>`;
      showIntro();
  }

  input.focus();
}

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const cmd = input.value;
    runCommand(cmd);
    input.value = "";
  }
});
