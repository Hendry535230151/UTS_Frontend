function toggleContainer(activeContainer) {
    const signInContainer = document.getElementById('signIn');
    const logInContainer = document.getElementById('logIn');
    const signInButton = document.querySelector('.button__tab button.active');
    const logInButton = document.querySelector('.button__tab button:not(.active)');
    
    if (activeContainer === 'signIn') {
        signInContainer.classList.remove('hide');
        logInContainer.classList.add('hide');
        logInButton.classList.remove('active');
        signInButton.classList.add('active');
    } else if (activeContainer === 'logIn') {
        logInContainer.classList.remove('hide');
        signInContainer.classList.add('hide');
        signInButton.classList.remove('active');
        logInButton.classList.add('active');
    }
}