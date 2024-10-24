function getImgUrl(name) {
    return new URL(`../assets/img/${name}`, import.meta.url)
}
export {getImgUrl}