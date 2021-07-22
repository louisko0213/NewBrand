// const apple = () => {
//     const load = async () => {
//         try {
//             // simulate delay
//             await new Promise(resolve => {
//                 setTimeout(resolve, 2000)
//             })

//         } catch (err) {
//             console.log(error.value);
//         }
//     }
//     return { load }
// }
const reload = () => {
    let isRouterAlive = null;
    this.isRouterAlive = false
    setTimeout(() => {
        this.isRouterAlive = true
    }, 0)
    return { isRouterAlive }
}
export default reload