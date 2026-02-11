const nameInput1 = document.getElementById('nameInput1');
const codeArea1 = document.getElementById('codeArea1');
const copyButton1 = document.getElementById('copyButton1');

const nameInput2 = document.getElementById('nameInput2');
const codeArea2 = document.getElementById('codeArea2');
const copyButton2 = document.getElementById('copyButton2');

const codeArea3 = document.getElementById('codeArea3');
const copyButton3 = document.getElementById('copyButton3');

const originalCode1 = `/c
local player = game.players[1]
local position = player.position
local offset = {x = 0, y = -1}
local chest_position = {x = position.x + offset.x, y = position.y + offset.y}
local entity = player.surface.create_entity({
  name = "linked-belt",
  position = chest_position,
  force = player.force })
entity.name_tag = "FCTteam"`;

const originalCode2 = `/c
local player = game.players[1]
local position = player.position
local offset = {x = 0, y = -1}
local chest_position = {x = position.x + offset.x, y = position.y + offset.y}
local entity = player.surface.create_entity({
  name = "linked-belt",
  position = chest_position,
  force = player.force })
entity.name_tag = "FCTteam"`;

const originalCode3 = `/c
local i = game.get_entity_by_tag('FCTteam1')
local o = game.get_entity_by_tag('FCTteam2')
i.linked_belt_type = 'input'
o.linked_belt_type = 'output'
i.connect_linked_belts(o)`;

function updateCombinedCode() {
    const tag1 = nameInput1.value || "FCTteam1";
    const tag2 = nameInput2.value || "FCTteam2";

    const updatedCode1 = originalCode1.replace(/entity\.name_tag = ".*?"/, `entity.name_tag = "${tag1}"`);
    codeArea1.value = updatedCode1;

    const updatedCode2 = originalCode2.replace(/entity\.name_tag = ".*?"/, `entity.name_tag = "${tag2}"`);
    codeArea2.value = updatedCode2;

    const combinedCode = originalCode3
        .replace(/'FCTteam1'/, `'${tag1}'`)
        .replace(/'FCTteam2'/, `'${tag2}'`);
    codeArea3.value = combinedCode;
}

function showCopyFeedback(button) {
    const feedbackSpan = button.nextElementSibling;

    button.classList.add('is-copying');
    feedbackSpan.classList.add('show');

    setTimeout(() => {
        button.classList.remove('is-copying');
    }, 500);

    setTimeout(() => {
        feedbackSpan.classList.remove('show');
    }, 2000);
}

nameInput1.addEventListener('input', updateCombinedCode);
nameInput2.addEventListener('input', updateCombinedCode);

copyButton1.addEventListener('click', () => {
    codeArea1.select();
    document.execCommand('copy');
    showCopyFeedback(copyButton1);
});

copyButton2.addEventListener('click', () => {
    codeArea2.select();
    document.execCommand('copy');
    showCopyFeedback(copyButton2);
});

copyButton3.addEventListener('click', () => {
    codeArea3.select();
    document.execCommand('copy');
    showCopyFeedback(copyButton3);
});

updateCombinedCode();

document.addEventListener('mousemove', (e) => {
    const body = document.body;
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;

    const moveStrength = 40;

    const xPos = (clientX / innerWidth - 0.5) * moveStrength;
    const yPos = (clientY / innerHeight - 0.5) * moveStrength;

    body.style.backgroundPosition = `${-xPos}px ${-yPos}px`;
});
