window.onload = function () {
    let boringSelect = this.document.getElementsByClassName('px-select')[0];

    let customSelect = this.document.createElement('div');
    customSelect.classList.add('custom-select');

    let customOptions = this.document.createElement('div');
    customOptions.classList.add('custom-select-options');

    let customSelectLabel = this.document.createElement('div');
    customSelectLabel.classList.add('custom-select-label');
    customSelectLabel.innerText = boringSelect.options[0].innerText;

    customSelect.appendChild(customSelectLabel);
    customSelect.appendChild(customOptions);

    for(let i = 0; i < boringSelect.options.length; i++){
        let customOption = this.document.createElement('div');
        customOption.classList.add('custom-select-option');
        customOption.innerText = boringSelect.options[i].innerText;
        customOption.dataset.value = boringSelect.options[i].value;
        customOption.dataset.index = boringSelect.options[i].index;

        /* This event fired when an option inside select element is selected. */
        customOption.addEventListener('click', function(event){
            for(let j = 0; j < customOptions.children.length; j++){
                customOptions.children[j].classList.remove('custom-select-option-active');
            }

            customOption.classList.add('custom-select-option-active');
            customOptions.classList.toggle('custom-select-options-open');
            customSelectLabel.innerText = customOption.innerText;
            boringSelect.value = customOption.dataset.value;
            boringSelect.selectedIndex = customOption.dataset.index;
            event.stopPropagation();
        })

        customOptions.appendChild(customOption);
    }

    boringSelect.parentElement.insertBefore(customSelect, boringSelect);

    customSelect.addEventListener('click', function(event) {
        customOptions.classList.toggle('custom-select-options-open');
    })
}