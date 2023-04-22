const getDataApi = async () => {
    const res = await fetch('http://localhost:8080/api/v1/book/list');
    const data = await res.json();
    console.log(data);
}

getDataApi()