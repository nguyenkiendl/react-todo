export function range(start, end) {
    return (
        Array(end - start + 1).fill().map((number, index) => (start + index < 10 ? '0' : '') + (start + index)))
}