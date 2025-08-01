let balance = 500;

function saveWallet() {
  const wallet = document.getElementById('wallet').value;
  if(wallet) {
    localStorage.setItem('bnbWallet', wallet);
    alert('Wallet Saved Successfully!');
  } else {
    alert('Please enter a valid wallet address!');
  }
}

function generateReferral() {
  const refCode = Math.random().toString(36).substring(2, 8);
  const referralLink = window.location.origin + "?ref=" + refCode;
  document.getElementById('refLink').value = referralLink;
}

function copyReferral() {
  const copyText = document.getElementById('refLink');
  copyText.select();
  copyText.setSelectionRange(0, 99999); 
  document.execCommand("copy");
  alert("Referral link copied!");
}
