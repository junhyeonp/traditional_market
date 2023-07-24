console.log("공공데이터");
fetch(
  "https://api.odcloud.kr/api/15052836/v1/uddi:2253111c-b6f3-45ad-9d66-924fd92dabd7?page=1&perPage=1000&serviceKey=LZLRsS6R%2FQ38skNVYM80i1xs9N7rAu7y8nZ6WCXtwKkghJCeq8hVOtfA%2B4aVRqJDDjn%2FHVKanJgij%2FmdcfCgSQ%3D%3D"
)
  .then((res) => res.json())
  .then((data) => {
    localStorage.setItem("addressArray", JSON.stringify(data));
    console.log(data);
  });
