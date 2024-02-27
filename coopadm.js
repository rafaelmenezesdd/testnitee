document.addEventListener("DOMContentLoaded", function() {
    const horariosContainer = document.getElementById("horarios-container");
    const adicionarHorarioBtn = document.getElementById("adicionar-horario");
    const salvarHorariosBtn = document.getElementById("salvar-horarios");

    // Carregar horários armazenados no armazenamento local
    for (let i = 0; i < 6; i++) {
        const horario = localStorage.getItem(`horario${i}`);
        const descricao = localStorage.getItem(`descricao${i}`);
        criarCampoHorario(i, horario, descricao);
    }

    adicionarHorarioBtn.addEventListener("click", function() {
        const horarioCount = horariosContainer.children.length;
        if (horarioCount < 6) {
            criarCampoHorario(horarioCount);
        }
    });

    salvarHorariosBtn.addEventListener("click", function() {
        const camposHorario = horariosContainer.querySelectorAll(".horario");
        camposHorario.forEach((campo, index) => {
            localStorage.setItem(`horario${index}`, campo.querySelector(".horario-input").value);
            localStorage.setItem(`descricao${index}`, campo.querySelector(".descricao-input").value);
        });
        alert("Horários salvos com sucesso!");
    });

    function criarCampoHorario(index, horarioValue = "", descricaoValue = "") {
        const div = document.createElement("div");
        div.classList.add("horario");

        const horarioLabel = document.createElement("label");
        horarioLabel.textContent = `Horário ${index + 1}: `;
        div.appendChild(horarioLabel);

        const horarioInput = document.createElement("input");
        horarioInput.type = "text";
        horarioInput.classList.add("horario-input");
        horarioInput.value = horarioValue;
        div.appendChild(horarioInput);

        const descricaoLabel = document.createElement("label");
        descricaoLabel.textContent = "Descrição: ";
        div.appendChild(descricaoLabel);

        const descricaoInput = document.createElement("input");
        descricaoInput.type = "text";
        descricaoInput.classList.add("descricao-input");
        descricaoInput.value = descricaoValue;
        div.appendChild(descricaoInput);

        horariosContainer.appendChild(div);
    }
});