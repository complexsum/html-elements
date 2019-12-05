window.onload = function () {
    let accordians = this.document.getElementsByClassName('accordian');

    for (let i = 0; i < accordians.length; i++) {
        let accordian = accordians[i];
        let accordian_btn = accordian.getElementsByClassName('accordian-btn').item(0);
        let accordian_sec = accordian.getElementsByClassName('accordian-sec').item(0);

        accordian_btn.addEventListener('click', () => {
            accordian_btn.classList.toggle('accordian-btn-active');
            accordian_sec.classList.toggle('accordian-sec-active');

            if (accordian_sec.style.maxHeight) {
                accordian_sec.style.maxHeight = null;
            }
            else {
                accordian_sec.style.maxHeight = accordian_sec.scrollHeight + 'px';
            }
        })
    }
}