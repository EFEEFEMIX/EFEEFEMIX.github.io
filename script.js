function showSecret() {
    var secret = document.getElementById('secret');
    if (secret.classList.contains('hidden')) {
        secret.classList.remove('hidden');
    } else {
        secret.classList.add('hidden');
    }
}
