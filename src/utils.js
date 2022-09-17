//undefined locales means that the user's settings language is passed
export const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: 'cad',
    style: 'currency',
    minimumFractionDigits: 0
})