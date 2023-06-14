
export default async (url: string, method: string, body?: any, setter?: any) => {
    return fetch('http://localhost:8080/api' + url
        , {
            method: method,
            // @ts-ignore
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': undefined
            },
            body: body ? JSON.stringify(body) : null
          , mode: 'cors'
    })
}

