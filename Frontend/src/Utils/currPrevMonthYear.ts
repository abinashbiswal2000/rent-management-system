function f1 () {
    const x = new Date();
    if (x.getMonth() + 1 < 10) {
        return `${x.getFullYear()}-0${x.getMonth() + 1}`
    }
    return `${x.getFullYear()}-${x.getMonth() + 1}`
}

function f2 () {
    const x = new Date();
    if (x.getMonth() + 1 === 1) {
        return `${x.getFullYear() - 1}-12`
    } else if (x.getMonth() + 1 <= 10) {
        return `${x.getFullYear()}-0${x.getMonth()}`
    }
    return `${x.getFullYear()}-${x.getMonth()}`
}

function f3 () {
    const x = new Date();
    if (x.getMonth() + 1 < 9) {
        return `${x.getFullYear()}-0${x.getMonth() + 2}`
    } else if (x.getMonth() + 1 === 12) {
        return `${x.getFullYear() + 1}-01`
    }
    return `${x.getFullYear()}-${x.getMonth() + 2}`
}

export const dateObj = {
    curr: f1,
    prev: f2,
    next: f3
}