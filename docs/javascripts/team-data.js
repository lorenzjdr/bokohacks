const teamMembers = [
   // Follow the structure to add more team members. Don't forget to add a comma after the closing curly brace.
   // We can make an API to fetch this data in the future. This will do for now.
  {
        name: "Lorenz De Robles",
        title: "",
        image: "",
        links: {
            linkedin: "",
            github: "", 
            website: "" // Optional
        }
    },
    {
        name: "Olivia Laurel",
        title: "Director of Social Media",   
        image: "/assets/profiles/olivialaurel.jpeg",
        links: {
            linkedin: "https://www.linkedin.com/in/olivialaurel/",
            github: "https://github.com/livlaurel", 
            website: "https://www.olaurel.dev/"
        }
    },
  ];

function createTeamMember(member) {
    // Icons for social media platforms. Font Awesome icons.
    const icons = {
        linkedin: '<i class="fab fa-linkedin"></i>',
        github: '<i class="fab fa-github"></i>',
        website: '<i class="fas fa-globe"></i>'
    };

    // Create social media links for current member.
    const socialLinks = Object.entries(member.links)
        .map(([platform, url]) => `
            <a href="${url}" title="${platform.charAt(0).toUpperCase() + platform.slice(1)}">
                ${icons[platform] || ''}
            </a>
        `).join('');

    return `
        <div class="team-member">
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.title}</p>
            <div class="icons">
                ${socialLinks}
            </div>
        </div>
    `;
}

function renderTeamMembers() {
    const container = document.querySelector('.team-container');
    container.innerHTML = teamMembers.map(member => createTeamMember(member)).join('');
}

document.addEventListener('DOMContentLoaded', renderTeamMembers);
