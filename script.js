const panel = document.getElementById("weaver-panel");
const weaver = document.getElementById("weaver");

const content = document.getElementById("panel-content");

const fyiContent = {
    cyber:
        "Cybersecurity protects devices, accounts, networks, and data.",

    service:
        "Service businesses use automation, scheduling, CRM, and customer communication tools.",

    future:
        "Future Technology includes AI, authentication, and emerging digital systems."
};

const faqContent = {
    cyber:
        "Common Questions: What should I protect first?",

    service:
        "Common Questions: What business process should be automated first?",

    future:
        "Common Questions: How can AI help my organization?"
};

let activeSection = "cyber";

function moveWeaver(targetLane, section){

    activeSection = section;

    const lane = document.getElementById(targetLane);

    const rect = lane.getBoundingClientRect();

    const targetX = rect.left + 20;
    const targetY = window.scrollY + rect.top + 20;

    weaver.style.transition =
        "left 1.75s ease-in-out, top 1.75s ease-in-out";

    weaver.style.left = targetX + "px";
    weaver.style.top = targetY + "px";

    setTimeout(() => {

        panel.style.display = "block";

        panel.style.left = (targetX + 70) + "px";
        panel.style.top = targetY + "px";

        content.innerHTML = fyiContent[section];

    }, 1400);
}

document.getElementById("fyi-btn")
.addEventListener("click", () => {
    content.innerHTML = fyiContent[activeSection];
});

document.getElementById("faq-btn")
.addEventListener("click", () => {
    content.innerHTML = faqContent[activeSection];
});

document.addEventListener("pointerup", () => {

    panel.style.opacity = "0";

    setTimeout(() => {

        panel.style.display = "none";
        panel.style.opacity = "1";

    }, 300);

});
