export function handleControleConsumo(date: Date): string {

    const transformToRoute = `date=${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`

    return transformToRoute;
}