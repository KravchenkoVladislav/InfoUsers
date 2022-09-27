export const stylePaginationBtn = (item:number, currentPage:number) => {
    return {
        background:`${currentPage === item ? '#ECD3FA':'#ffffff'}`,
        border:`${currentPage === item ? '1px solid #52228C':'1px solid #121212'}`,
        color:`${currentPage === item ? '#52228C':'#333333'}`
    }
}