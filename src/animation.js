export const swipeRightD = {
    hidden: {
        opacity: 0,
        x: -300,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            delay: 1,
        }
    }
}

export const swipeLeft = {
    hidden: {
        opacity: 0,
        x: 300,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
        }
    }
}

export const popUP = {
    hidden:{
        opacity: 0,
        y: '50%',
    },
    show: {
        opacity: 1,
        y: '0',
        transition: {
            duration: 1,
            when: "beforeChildren",
            staggerChildren: 0.25,
        }
    }
}

export const swipeRight = {
    hidden: {
        opacity: 0,
        x: -300,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.75
        }
    }
}

export const swipeDown = {
    hidden: {
        opacity: 0,
        y: -300,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
        }
    }
}

export const swipeLeftDown = {
    hidden: {
        opacity: 0,
        x: -300,
        y: 300,
    },
    show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 0.75,
        }
    }
}

export const swipeUp = {
    hidden: {
        scale: 0,
        opacity: 0,
        y: 300,
    },
    show: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
            duration: 2,
        }
    }
}

export const extension = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
        }
    }
}

export const pageAnimation = {
    hidden:{
        opacity: 0,
        y: 300,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.25,
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
        }
    },
}


export const titleAnim = {
    hidden: { y: 200, },
    show: {
        y: 0,
        transition: { duration: 0.75, ease: "easeOut", },
    },
}

export const fade = {
    hidden: { opacity: 0, },
    show: {
        opacity: 1,
        transition: { duration: 0.75, ease: "easeOut", },
    },
}

export const photoAnim = {
    hidden: { scale: 1.5, opacity: 0, },
    show: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.75, ease: "easeOut", },
    },
}

export const lineAnim = {
    hidden: { width: '0%' },
    show: {
        width: '100%',
        transition: { duration: 1 }
    }
}

export const slider = {
    hidden: {x: '-130%', skew: '45deg'},
    show: {
        x: '100%',
        skew: '0deg',
        transition: {duration: 1, ease: 'easeOut'}
    }
}

export const sliderContainer = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, ease: 'easeOut' } }
}

export const scrollReveal = {
    hidden: {
        opacity: 0,
        scale: 1.2,
        transition: { duration: 0.5, }
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
        }
    }
}