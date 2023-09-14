"use strict";
const apiService = (url, method) => fetch(url, { method });
const method = "POST";
apiService("https://site.com", "POST");
