function submitForm() {
  // Your form submission logic goes here
  
  // Show alert to the user
  alert("You have successfully registered. You will be contacted by us soon.");
}
function toggleAnswer(answerId, arrowId) {
  var answer = document.getElementById(answerId);
  var arrow = document.getElementById(arrowId);

  // Toggle the answer visibility
  if (answer.style.display === 'block') {
    answer.style.display = 'none';
    arrow.innerHTML = '&#x25BC;'; // Down arrow
  } else {
    // Close other open answers in the same row before opening the current one
    closeOtherRowAnswers(answerId);
    answer.style.display = 'block';
    arrow.innerHTML = '&#x25B2;'; // Up arrow
  }
}

function closeOtherRowAnswers(currentAnswerId) {
  var currentRow = document.getElementById(currentAnswerId).closest('.faq-row');
  var otherRows = document.querySelectorAll('.faq-row:not(.current-row)');

  // Close answers in other rows
  otherRows.forEach(function (row) {
    var otherAnswers = row.querySelectorAll('.answer');
    var otherArrows = row.querySelectorAll('.arrow');

    otherAnswers.forEach(function (ans) {
      ans.style.display = 'none';
    });

    otherArrows.forEach(function (arr) {
      arr.innerHTML = '&#x25BC;'; // Down arrow
    });
  });

  // Mark the current row to exclude it from closing
  currentRow.classList.add('current-row');
}

// Function to close all answers when clicking outside the FAQ container
document.addEventListener('click', function (event) {
  var faqContainer = document.querySelector('.faq-container');

  if (!faqContainer.contains(event.target)) {
    closeAllAnswers();
  }
});

function closeAllAnswers() {
  var allAnswers = document.querySelectorAll('.answer');
  var allArrows = document.querySelectorAll('.arrow');
  var allRows = document.querySelectorAll('.faq-row');

  // Close all answers and set arrow to down arrow
  allAnswers.forEach(function (ans) {
    ans.style.display = 'none';
  });

  allArrows.forEach(function (arr) {
    arr.innerHTML = '&#x25BC;'; // Down arrow
  });

  // Remove the current row marker
  allRows.forEach(function (row) {
    row.classList.remove('current-row');
  });
}
