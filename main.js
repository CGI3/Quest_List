window.addEventListener('load', () => {
    const form = document.querySelector("#new-quest-form");
    const input = document.querySelector("#new-quest-input");
    const list_el = document.querySelector("#quests");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const quest = input.value;

        if (!quest) {
            alert("Please fill out a desired quest!");
            return;
        } 

        const quest_el = document.createElement("div");
        quest_el.classList.add("quest");

        const quest_content_el = document.createElement("div");
        quest_content_el.classList.add("content");

        quest_el.appendChild(quest_content_el);

        const quest_input_el = document.createElement("input");
        quest_input_el.classList.add('text'); 
        quest_input_el.type = 'text';
        quest_input_el.value = quest;
        quest_input_el.setAttribute('readonly', 'readonly');

        quest_content_el.appendChild(quest_input_el);

        const quest_actions_el = document.createElement('div');
        quest_actions_el.classList.add('actions');

        const quest_edit_el = document.createElement('button');
        quest_edit_el.classList.add('edit');
        quest_edit_el.innerHTML = 'Edit';

        const quest_delete_el = document.createElement('button');
        quest_delete_el.classList.add('delete');
        quest_delete_el.innerHTML = 'Delete';

        quest_actions_el.appendChild(quest_edit_el);
        quest_actions_el.appendChild(quest_delete_el);

        quest_el.appendChild(quest_actions_el);

        list_el.appendChild(quest_el);

        input.value = "";

        quest_edit_el.addEventListener('click', () => {
            if(quest_edit_el.innerText == 
            "EDIT") {
                quest_input_el.removeAttribute("readonly");
                quest_input_el.focus();
                quest_edit_el.innerText = "Save";
            } else {
                quest_input_el.setAttribute("readonly", "readonly");
                quest_edit_el.innerText = "Edit";
            }
        });

        quest_delete_el.addEventListener('click', () => {
            list_el.removeChild(quest_el);
        });
    })
})