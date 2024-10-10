function toggleContainer(activeContainer) {
    const signInContainer = document.getElementById('signIn');
    const logInContainer = document.getElementById('logIn');
    const signInButton = document.querySelector('.button__tab button:nth-child(1)');
    const logInButton = document.querySelector('.button__tab button:nth-child(2)');
    
    if (activeContainer === 'signIn' && !signInButton.classList.contains('active')) {
        signInContainer.classList.remove('hide');
        logInContainer.classList.add('hide');
        logInButton.classList.remove('active');
        signInButton.classList.add('active');
    } else if (activeContainer === 'logIn' && !logInButton.classList.contains('active')) {
        logInContainer.classList.remove('hide');
        signInContainer.classList.add('hide');
        signInButton.classList.remove('active');
        logInButton.classList.add('active');
    }
}