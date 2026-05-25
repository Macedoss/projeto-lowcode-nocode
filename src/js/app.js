/**
 * =====================================================
 *  app.js – Lógica principal da aplicação PromoAlerta
 * =====================================================
 */

// ─────────────────────────────────────────────────────────
//  Inicialização
// ─────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  setupForm();
  setupNewRegistrationBtn();
});


// ─────────────────────────────────────────────────────────
//  Renderização dinâmica dos produtos (via config.js)
//  Para adicionar novos produtos, edite apenas config.js!
// ─────────────────────────────────────────────────────────
function renderProducts() {
  const container = document.getElementById("productsContainer");
  const products = Object.values(AppConfig.products);

  if (products.length === 0) {
    container.innerHTML = `<p class="empty-products">Nenhum produto disponível no momento.</p>`;
    return;
  }

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.productId = product.id;

    card.innerHTML = `
      <div class="product-header">
        <label class="product-toggle" for="product-${product.id}">
          <input
            type="checkbox"
            class="product-checkbox"
            id="product-${product.id}"
            data-product="${product.id}"
          >
          <span class="product-info">
            <span class="product-icon">${product.icon}</span>
            <span class="product-text">
              <strong>${product.label}</strong>
              <small>${product.description}</small>
            </span>
          </span>
          <span class="toggle-arrow" id="arrow-${product.id}">›</span>
        </label>
      </div>

      <div class="price-ranges" id="ranges-${product.id}" hidden>
        <p class="ranges-title">Selecione as faixas de preço de interesse:</p>
        <div class="ranges-grid">
          ${product.priceRanges.map(range => `
            <label class="range-option" for="range-${range.id}">
              <input
                type="checkbox"
                id="range-${range.id}"
                name="ranges"
                value="${range.id}"
                data-product="${product.id}"
                data-label="${range.label} (${range.display})"
              >
              <span class="range-content">
                <span class="range-top">
                  <span class="range-label">${range.label}</span>
                  <span class="range-price">${range.display}</span>
                </span>
                <span class="range-desc">${range.description}</span>
              </span>
            </label>
          `).join("")}
        </div>
        <button type="button" class="btn-select-all" data-product="${product.id}">
          Selecionar todas as faixas
        </button>
      </div>
    `;

    container.appendChild(card);

    // Evento: toggle do produto
    const checkbox = card.querySelector(`#product-${product.id}`);
    checkbox.addEventListener("change", () => toggleProductRanges(product.id));

    // Evento: selecionar todas as faixas
    const btnAll = card.querySelector(".btn-select-all");
    btnAll.addEventListener("click", () => selectAllRanges(product.id));
  });
}


// ─────────────────────────────────────────────────────────
//  Abre/fecha faixas de preço ao marcar/desmarcar produto
// ─────────────────────────────────────────────────────────
function toggleProductRanges(productId) {
  const rangesDiv = document.getElementById(`ranges-${productId}`);
  const arrow     = document.getElementById(`arrow-${productId}`);
  const checkbox  = document.getElementById(`product-${productId}`);
  const card      = document.querySelector(`[data-product-id="${productId}"]`);

  if (checkbox.checked) {
    rangesDiv.removeAttribute("hidden");
    rangesDiv.classList.add("open");
    arrow.classList.add("rotated");
    card.classList.add("active");
    clearError("productsError");
  } else {
    rangesDiv.setAttribute("hidden", "");
    rangesDiv.classList.remove("open");
    arrow.classList.remove("rotated");
    card.classList.remove("active");
    // Desmarca todas as faixas deste produto
    rangesDiv.querySelectorAll('input[type="checkbox"]').forEach(cb => (cb.checked = false));
  }
}


// ─────────────────────────────────────────────────────────
//  Selecionar / desselecionar todas as faixas de um produto
// ─────────────────────────────────────────────────────────
function selectAllRanges(productId) {
  const checkboxes = document.querySelectorAll(`#ranges-${productId} input[type="checkbox"]`);
  const allChecked = Array.from(checkboxes).every(cb => cb.checked);
  checkboxes.forEach(cb => (cb.checked = !allChecked));
}


// ─────────────────────────────────────────────────────────
//  Setup do formulário
// ─────────────────────────────────────────────────────────
function setupForm() {
  const form = document.getElementById("registrationForm");
  form.addEventListener("submit", handleSubmit);

  // Validação em tempo real
  document.getElementById("name").addEventListener("input",  () => clearError("nameError"));
  document.getElementById("email").addEventListener("input", () => clearError("emailError"));
}

function handleSubmit(e) {
  e.preventDefault();
  if (!validateForm()) return;

  const data = collectFormData();
  displaySuccess(data);
}


// ─────────────────────────────────────────────────────────
//  Validação do formulário
// ─────────────────────────────────────────────────────────
function validateForm() {
  let valid = true;

  const name  = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const selectedRanges = document.querySelectorAll('input[name="ranges"]:checked');

  if (name.length < 3) {
    showError("nameError", "Por favor, insira seu nome completo (mínimo 3 caracteres).");
    valid = false;
  }

  if (!isValidEmail(email)) {
    showError("emailError", "Por favor, insira um e-mail válido.");
    valid = false;
  }

  if (selectedRanges.length === 0) {
    showError("productsError", "Selecione ao menos uma faixa de preço para continuar.");
    valid = false;
  }

  return valid;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(id, message) {
  const el = document.getElementById(id);
  el.textContent = message;
  el.classList.add("visible");
  // Scroll suave até o erro
  el.scrollIntoView({ behavior: "smooth", block: "center" });
}

function clearError(id) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = "";
    el.classList.remove("visible");
  }
}


// ─────────────────────────────────────────────────────────
//  Coleta os dados do formulário
// ─────────────────────────────────────────────────────────
function collectFormData() {
  const name  = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  // Agrupa as faixas selecionadas por produto
  const interests = {};
  document.querySelectorAll('input[name="ranges"]:checked').forEach(cb => {
    const pid = cb.dataset.product;
    if (!interests[pid]) {
      interests[pid] = {
        label:  AppConfig.products[pid].label,
        icon:   AppConfig.products[pid].icon,
        ranges: []
      };
    }
    interests[pid].ranges.push(cb.dataset.label);
  });

  return { name, email, interests };
}


// ─────────────────────────────────────────────────────────
//  Exibe a tela de sucesso
// ─────────────────────────────────────────────────────────
function displaySuccess(data) {
  const formCard    = document.getElementById("formCard");
  const successCard = document.getElementById("successCard");

  // Mensagem personalizada
  document.getElementById("successMessage").innerHTML =
    `Olá, <strong>${data.name}</strong>! 🎉<br>
     Enviaremos promoções para <strong>${data.email}</strong> assim que identificarmos ofertas nas faixas que você escolheu:`;

  // Resumo das preferências
  const summaryEl = document.getElementById("successSummary");
  summaryEl.innerHTML = Object.values(data.interests).map(product => `
    <div class="summary-product">
      <p class="summary-product-name">${product.icon} <strong>${product.label}</strong></p>
      <ul>
        ${product.ranges.map(r => `<li>✔ ${r}</li>`).join("")}
      </ul>
    </div>
  `).join("");

  // Transição
  formCard.classList.add("fade-out");
  setTimeout(() => {
    formCard.hidden = true;
    formCard.classList.remove("fade-out");
    successCard.hidden = false;
    successCard.classList.add("fade-in");
  }, 280);
}


// ─────────────────────────────────────────────────────────
//  Botão "Fazer novo cadastro"
// ─────────────────────────────────────────────────────────
function setupNewRegistrationBtn() {
  document.getElementById("newRegistration").addEventListener("click", () => {
    const formCard    = document.getElementById("formCard");
    const successCard = document.getElementById("successCard");

    // Reseta formulário
    document.getElementById("registrationForm").reset();

    // Fecha todos os painéis de faixas
    document.querySelectorAll(".price-ranges").forEach(el => {
      el.setAttribute("hidden", "");
      el.classList.remove("open");
    });
    document.querySelectorAll(".toggle-arrow").forEach(el => el.classList.remove("rotated"));
    document.querySelectorAll(".product-card").forEach(el => el.classList.remove("active"));

    // Troca as telas
    successCard.hidden = true;
    successCard.classList.remove("fade-in");
    formCard.hidden = false;
    formCard.classList.add("fade-in");
    setTimeout(() => formCard.classList.remove("fade-in"), 400);
  });
}
