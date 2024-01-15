export const plural = (length: number): string => {
    const favoriteDataLength = length
    const plural = new Intl.PluralRules('ru-RU')

    switch (plural.select(favoriteDataLength)) {
        case 'one':
            return `Избранные товары — ${favoriteDataLength} позиция`
        case 'few':
            return `Избранные товары — ${favoriteDataLength} позиции`
        case 'many':
            return `Избранные товары — ${favoriteDataLength} позиций`
        default:
            return `Избранные товары — ${favoriteDataLength} позиций`
    }
}
