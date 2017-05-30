const loginToServer = () => $.post('http://localhost/authenticate/signIn', {
    "username": "testUser",
    "password": "bfb0dhedonistAdmin37b45dc1",
    "email": "bla@gma.pl"
}).done(console.log('Signed in'));