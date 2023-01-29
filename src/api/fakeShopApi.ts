import axios, { AxiosHeaders } from "axios";

const fakeShopApi = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  // params: {
  //     key: 'lasdkfjlsdkjfgñslkhjgvlfdskhgñ349u039dfv8fhrh0943'
  // },
  // headers: {
  //     'x-token': 'kodsjflksdjfklsdjfklñsdj'
  // }
});

export default fakeShopApi;