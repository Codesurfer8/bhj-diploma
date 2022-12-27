
`use strict`



const createRequest = (options = {}) => {
    const method = options.method;
    const receivedUrl = options.url;
    const userData = options.data;
    const callback = (options.callback) ? options.callback : (f) => f;
    const dataList = [];

    for (let key in userData) {
        const element = `${key}=${userData[key]}`;
        dataList.push(element)
    };

    const xhr = new XMLHttpRequest();
    xhr.responseType = `json`;

    if (method === "GET") {
        let readyUrl = `${receivedUrl}?${dataList.join(`&`)}`;
        xhr.open(method, readyUrl);
        xhr.send();

    } else if (method === "POST") {

        formData = new FormData();
        for (let key in userData) {
            formData.append(key, userData[key])
        }
        xhr.open(method, receivedUrl);
        xhr.send(formData);
    }

    xhr.addEventListener(
        "load",
        () => {
            callback(null, xhr.response);
        }
    );

    xhr.addEventListener(
        "error",
        () => {
            const err = `Accsess error`;
            callback(err)
        }
    );
};

