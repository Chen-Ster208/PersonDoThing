// Load Things_List.txt using fetch (relative to HTML file)
let things = [];
export function loadThings() {
    return fetch('/../Resources/Things_List.txt')
        .then(response => response.text())
        .then(text => {
            things = text.split(/\r?\n/).filter(line => line.trim() !== '');
            console.log('Things loaded:', things);
            // Debug: Check if things is an array and has content
            if (!Array.isArray(things) || things.length === 0) {
                console.warn('Things is not an array or is empty:', things);
            } else {
                console.log('Things successfully loaded with', things.length, 'items.');
            }
            return things;
        });
}

export function getRandomValue() {
    if (!things.length) {
        return '';
    }
    const randomThing = things[Math.floor(Math.random() * things.length)];
    return randomThing;
}

