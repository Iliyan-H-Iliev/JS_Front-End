function solve(password) {
    let validators = [
    password => (password.length < 6 || password.length > 10) ? "Password must be between 6 and 10 characters" : null,
    password =>  !/^[A-Za-z0-9]+$/.test(password) ? "Password must consist only of letters and digits" : null,
    password => (password.match(/\d/g) ? password.match(/\d/g).length : 0) < 2 ? "Password must have at least 2 digits": null
];

    function passwordValidator(password) {
        let errors = []
        for (const validator of validators) {
            let massage = validator(password)
            if (massage) {
                errors.push(massage)
            }
        }
        if (errors.length !== 0) {
            return errors.join('\n')
        }

        return 'Password is valid'
    }

    console.log(passwordValidator(password))
}

solve('MyPass123')
solve('logIn')
solve('Pa$s$s')