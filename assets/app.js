function updateDateTime() {
  const now = new Date();

  const daysOfWeek = [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
  ];
  const dayOfWeek = daysOfWeek[now.getDay()];
  const capitalizedDayOfWeek =
    dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);

  const months = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];
  const month = months[now.getMonth()];

  const date = now.getDate();

  const dateTimeString = capitalizedDayOfWeek + " " + date + " " + month;

  const dateTimeElement = document.getElementById("date-time");
  dateTimeElement.textContent = dateTimeString;
}

// Appeler la fonction pour mettre à jour le jour et la date au chargement de la page
updateDateTime();

//Récupérer la valeur du input
function getValue() {
  // Sélectionner l'élément input et récupérer sa valeur

  let inputTask = document.getElementById("new-task").value;

  // Sélectionner la liste ul
  let ul = document.getElementById("tasks-list");

  if (inputTask === "") {
    let errorText = document.getElementById("error-text");
    errorText.innerText = "Le champ est vide !"; // Définir le texte de l'élément p

    errorText.style.color = "#E04331";
    errorText.style.marginBottom = "30px";
  } else {
    let errorText = document.getElementById("error-text");
    errorText.innerText = " ";

    // Créer l'élément li
    let li = document.createElement("li");

    // Créer la case à cocher
    let checkbox = li.appendChild(document.createElement("input"));
    checkbox.type = "checkbox";

    // Créer l'élément p
    let task = li.appendChild(document.createElement("p"));
    task.innerHTML = inputTask;

    //Créer le bouton de suppression
    let buttonDelete = li.appendChild(document.createElement("button"));
    let trashIcon = buttonDelete.appendChild(document.createElement("i"));

    trashIcon.setAttribute("class", "fa-solid fa-trash");
    trashIcon.style.cursor = "pointer";

    trashIcon.onclick = function () {
      let parentElement = this.parentNode.parentNode; // Accéder à l'élément li parent
      parentElement.remove(); // Supprimer l'élément li parent
    };

    // Ajouter le nouvel élément li à la liste ul
    ul.appendChild(li);
  }
}

document
  .getElementById("new-task")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Empêcher le rechargement de la page
      getValue();
      this.value = ""; // Réinitialiser la valeur du champ input
    }
  });

document.getElementById("add-task-btn").addEventListener("click", function () {
  getValue();
  document.getElementById("new-task").value = ""; // Réinitialiser la valeur du champ input
});
