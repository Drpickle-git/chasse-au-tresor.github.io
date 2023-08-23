var clicks = 0;

function myFunction() {
  if (clicks === 0) {
    alert("Test");
    clicks++;
  } else {
    alert("Vous avez déjà appuyé sur le bouton...");
  }
}
