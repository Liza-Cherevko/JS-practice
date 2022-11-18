const dragAndDrop = () => { 
    const cardEl = document.querySelector('.js-card');
    const cellEl = document.querySelectorAll('.js-cell');
    const dragStart = function () { 
        setTimeout(() => { 
            this.classList.add('hide');
        }, 0)
    }
    const dragEnd = function () { 
        setTimeout(() => { 
            this.classList.remove('hide');
        }, 0)
    }
    const dragOver = function (e) { 
        e.preventDefault()
    }
    const dragEnter = function () { 
        this.classList.add('hovered');
    }
    const dragLeave = function () { 
        this.classList.remove('hovered');
    }
    const dragDrop = function () { 
        this.append(cardEl);
        this.classList.remove('hovered');
    }

    cellEl.forEach((cell) => { 
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('dragenter', dragEnter);
        cell.addEventListener('dragleave', dragLeave);
        cell.addEventListener('drop', dragDrop);
    })
    cardEl.addEventListener('dragstart', dragStart);
    cardEl.addEventListener('dragend', dragEnd);
    
}
dragAndDrop()