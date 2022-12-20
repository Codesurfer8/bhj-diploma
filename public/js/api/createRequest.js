const { response } = require("express");

/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
`use strict`

const createRequest = (options = {}) => {

    const method = options.method;
    const receivedUrl = options.url;
    const userData = options.data;
    const callback = (options.callback) ? options.callback : (f) => f;

    userData.getStringData = () => {
        return `?mail=${userData.mail}&${userData.password}`;
    };

    let readyUrl = receivedUrl + userData.getStringData();

    const xhr = new XMLHttpRequest();
    xhr.responseType = `json`;

    if (method === "GET") {
        xhr.open(method, readyUrl);
        xhr.send();

    } else if (method === "POST") {

        formData = new FormData();
        formData.append('mail', options.data.mail);
        formData.append('password', options.data.password);
        xhr.open(method, readyUrl);
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
