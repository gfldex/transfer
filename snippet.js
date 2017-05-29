document.querySelectorAll("input[type=checkbox]").forEach((e) => { 
    e.previousSibling.addEventListener("click", (ev) => {
        e.click();
    })
});

