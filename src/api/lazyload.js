const apple = () => {
    const load = async () => {
        try {
            // simulate delay
            await new Promise(resolve => {
                setTimeout(resolve, 2000)
            })

        } catch (err) {
            console.log(error.value);
        }
    }
    return { load }
}
export default apple