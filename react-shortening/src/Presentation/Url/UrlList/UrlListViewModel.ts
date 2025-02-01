import { useState } from "react";
import { Url } from "../../../Domain/Model/Url";
import { CreateUrl } from "../../../Domain/UseCase/Url/CreateUrl";

import { toast } from "react-toastify";
import UrlAPIDataSourceImpl from "../../../Data/DataSource/API/UrlAPIDataSource";
import { UrlRepositoryImpl } from "../../../Data/Repository/UrlRepositoryImpl";
import { GetUrls } from "../../../Domain/UseCase/Url/GetUrls";

export default function UrlListViewModel() {
  const [urls, setUrls] = useState<Url[]>([]);
  const [value, setValue] = useState("");

  const urlsDataSourceImpl = new UrlAPIDataSourceImpl();
  const urlsRepositoryImpl = new UrlRepositoryImpl(urlsDataSourceImpl);

  const getUrlsUseCase = new GetUrls(urlsRepositoryImpl);
  const createUrlsUseCase = new CreateUrl(urlsRepositoryImpl);

  function _resetValue() {
    setValue("");
  }

  async function getUrls() {
    setUrls(await getUrlsUseCase.invoke());
  }

  async function createUrl() {
    try {
      const createdUrl = await createUrlsUseCase.invoke(value);
      setUrls((prev) => [...prev, createdUrl]);
      _resetValue();
    } catch (e) {
      _resetValue();
      if (e instanceof Error) {
        toast(e.message);
      }
    }
  }

  function onChangeValue(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setValue(e.target.value);
  }

  return {
    getUrls,
    onChangeValue,
    createUrl,
    urls,
    value,
  };
}
