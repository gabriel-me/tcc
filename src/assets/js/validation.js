function checksRequired($form) {

    let requiredButtons = [];
    let requiredStatus = true;
    let submitButtons = [];

    [...$form].forEach(element => {
        if (element.required) {
            requiredButtons.push(element);
        } else if (element.classList[0] == 'disabled' || element.classList[0] == 'enabled') {
            submitButtons.push(element);
        }
    });

    for (let i = 0; i < requiredButtons.length; i++) {
        if (requiredButtons[i].value.length < 1) {
            requiredStatus = false;
        }
    }

    if (requiredStatus) {
        submitButtons.forEach(button => {
            button.disabled = false;
            button.classList = 'enabled';
        });
    } else {
        submitButtons.forEach(button => {
            button.disabled = 'disabled';
            button.classList = 'disabled';
        });
    }
}