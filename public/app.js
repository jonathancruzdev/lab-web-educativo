const form = document.querySelector("#search-form");
const nameInput = document.querySelector("#name");
const status = document.querySelector("#status");
const results = document.querySelector("#results");
const profileButton = document.querySelector("#profile-button");
const profileOutput = document.querySelector("#profile-output");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  status.textContent = "Buscando…";
  results.innerHTML = "";

  try {
    const response = await fetch(`/api/users/search?name=${encodeURIComponent(nameInput.value)}`);
    const payload = await response.json();

    if (!response.ok) {
      status.textContent = `Error: ${payload.error || "No se pudo completar la búsqueda"}`;
      return;
    }

    status.textContent = `${payload.data.length} resultado(s)`;

    for (const user of payload.data) {
      const item = document.createElement("li");
      item.innerHTML = `<strong>${user.name}</strong><br><small>${user.email} · ${user.role}</small>`;
      results.appendChild(item);
    }
  } catch (error) {
    status.textContent = "No se pudo conectar con el servidor.";
  }
});

profileButton.addEventListener("click", async () => {
  const response = await fetch("/api/users/1");
  const payload = await response.json();
  profileOutput.textContent = JSON.stringify(payload, null, 2);
});
