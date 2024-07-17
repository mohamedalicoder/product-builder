/**
 * Trims a string to a specified maximum length and appends ellipsis if the string exceeds the maximum length.
 * 
 * @param {string} txt - The string to be trimmed.
 * @param {number} [max=100] - The maximum length of the trimmed string. Defaults to 100 if not provided.
 * @returns {string} The trimmed string, with ellipsis appended if it exceeds the maximum length.
 */
export function txtSlice(txt: string, max: number = 100): string {
    if (txt.length >= max) return `${txt.slice(0, max)} ...`;
    return txt;
}
