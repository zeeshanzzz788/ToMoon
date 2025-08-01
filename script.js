function saveWallet() {
  const wallet = document.getElementById("walletAddress").value;
  if (wallet) {
    localStorage.setItem("wallet", wallet);
    alert("Wallet saved!");
  } else {
    alert("Please enter a wallet address");
  }
}

function goToReferral() {
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("referral").classList.remove("hidden");
}

function goBack() {
  document.getElementById("referral").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
}

function copyReferral() {
  const link = document.getElementById("referralLink").innerText;
  navigator.clipboard.writeText(link);
  alert("Referral link copied!");
}

// Load wallet from local storage on page load
window.onload = function () {
  const wallet = localStorage.getItem("wallet");
  if (wallet) document.getElementById("walletAddress").value = wallet;
};