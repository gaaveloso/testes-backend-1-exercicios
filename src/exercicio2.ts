export const exercicio2 = (data: string): string => {
    const [ano, mes, dia] = data.split("/")
    return `${dia}/${mes}/${ano}`
}