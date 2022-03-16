// GET Request
export const getRequest = async (url) => {
    let serverResponse = await fetch(url)
    return serverResponse.json()
}