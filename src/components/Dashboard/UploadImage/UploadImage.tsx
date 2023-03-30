import { IFetchParams, useFetch } from 'hooks/useFetch';
import React, { useRef } from 'react';

interface IProps {
  user: string;
}

export const UploadImage = ({ user }: IProps) => {
  const { fetcher, fetchingStatus, response } = useFetch();

  const photoFileRef = useRef<HTMLInputElement>(null);
  const photoNameRef = useRef<HTMLInputElement>(null);
  const photoDescriptionRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const uploadHandler = () => {
    const token = window.localStorage.getItem('token') || '';

    const formData = new FormData();
    formData.append('photo', photoFileRef.current?.value || '');
    formData.append('text', photoDescriptionRef.current?.value || '');
    formData.append('title', photoNameRef.current?.value || '');
    formData.append('token', token);
    formData.append('username', user);

    const fetcherSettings: IFetchParams = {
      url: `${process.env.API_URL}/api/v1/upload`,
      method: 'POST',
      body: formData,
      headers: { 'Content-Type': 'application/json' }
    };

    fetcher(fetcherSettings);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Upload image</h1>
      {fetchingStatus === 'succeeded' ? (
        <form action="" onSubmit={submitHandler} ref={formRef}>
          <span>
            <label>Photo name</label>
            <input type="text" alt="photo-name" ref={photoNameRef} />
          </span>
          <span>
            <label>Description</label>
            <input type="text" alt="photo-description" ref={photoDescriptionRef} />
          </span>
          <span>
            <label>Photo</label>
            <input type="file" alt="photo-file" ref={photoFileRef} />
          </span>
          <span>
            <button onChange={uploadHandler}>Upload photo</button>
          </span>
        </form>
      ) : null}
      {fetchingStatus ? <p>Loading ...</p> : null}
    </div>
  );
};
