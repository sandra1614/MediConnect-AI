
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");
const quickQuestions = document.querySelectorAll(".quick-question");

// Add a message to the chat window.
function addMessage(message, sender) {
  const messageElement = document.createElement("div");

  messageElement.classList.add("message");

  if (sender === "user") {
    messageElement.classList.add("user-message");
  } else {
    messageElement.classList.add("assistant-message");
  }

  // Use textContent to display messages safely.
  messageElement.textContent = message;

  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Demonstration responses only.
function getDemoResponse(question) {
  const text = question.toLowerCase();

  if (
    text.includes("emergency") ||
    text.includes("can't breathe") ||
    text.includes("cannot breathe") ||
    text.includes("chest pain") ||
    text.includes("unconscious") ||
    text.includes("heavy bleeding")
  ) {
    return "This may be a medical emergency. Please seek emergency medical care immediately or contact your local emergency service. Do not wait for an online response. If possible, ask someone nearby to help you.";
  }

  if (
    text.includes("appointment") ||
    text.includes("book") ||
    text.includes("booking")
  ) {
    return "I can help you get started with an appointment request. Please contact your hospital's reception team to confirm available dates and times. Appointment booking will be added to a future version.";
  }

  if (
    text.includes("doctor") ||
    text.includes("nurse") ||
    text.includes("contact") ||
    text.includes("speak")
  ) {
    return "To speak with a qualified healthcare professional, please contact your hospital's reception or clinical team. In a future version, this assistant will help route your request to the right department.";
  }

  if (
    text.includes("opening") ||
    text.includes("hours") ||
    text.includes("address") ||
    text.includes("location")
  ) {
    return "Hospital opening hours and locations vary. Please check your hospital's official contact information or call its reception team. Hospital-specific information will be available when we add hospital accounts.";
  }

  if (
    text.includes("prescription") ||
    text.includes("medicine") ||
    text.includes("medication") ||
    text.includes("drug")
  ) {
    return "I can provide general information, but I cannot prescribe medicines or tell you to start or stop a medication. Please speak with a qualified clinician or pharmacist about your situation.";
  }

  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("good morning") ||
    text.includes("good afternoon")
  ) {
    return "Hello! Welcome to MediConnect AI. I can demonstrate how to find hospital information, request appointments, or contact a healthcare professional. What would you like help with?";
  }

  return "Thank you for your question. This is currently a demonstration, so I cannot assess your symptoms or provide personalized medical advice. Please contact your hospital's care team for medical guidance. If you think you may be experiencing an emergency, seek emergency care immediately.";
}

// Handle messages submitted through the form.
chatForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const question = chatInput.value.trim();

  if (question === "") {
    return;
  }

  addMessage(question, "user");
  chatInput.value = "";
  chatInput.focus();

  const response = getDemoResponse(question);

  addMessage(response, "assistant");
});

// Handle suggested questions.
quickQuestions.forEach(function (button) {
  button.addEventListener("click", function () {
    const question = button.dataset.question;

    addMessage(question, "user");
    addMessage(getDemoResponse(question), "assistant");
  });
});

console.log("MediConnect AI demo chat is ready!");

