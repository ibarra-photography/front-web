import React, { useRef, useState } from 'react';

import { IFetchParams, useFetch } from 'hooks/useFetch';

import UploadImageStyles from './UploadImage.module.css';

interface IProps {
  user: string;
}

export const UploadImage = ({ user }: IProps) => {
  const { fetcher, fetchingStatus, response } = useFetch();
  const [photoFile, setPhotoFile] = useState<FileList>();

  const photoFileRef = useRef<HTMLInputElement>(null);
  const photoNameRef = useRef<HTMLInputElement>(null);
  const photoDescriptionRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const photoInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhotoFile(event.target.files!);
  };

  const uploadHandler = async () => {
    debugger;

    const token = window.localStorage.getItem('token') || '';
    if (photoFile) {
      console.log('photoFile', photoFile[0]);

      const text = photoDescriptionRef.current?.value || '';
      const title = photoNameRef.current?.value || '';

      const formData = new FormData();
      formData.append('photo', photoFile[0]);
      formData.append('text', text);
      formData.append('title', title);
      formData.append('token', token);
      formData.append('username', user);

      const fetcherSettings: IFetchParams = {
        url: `${process.env.API_URL}/api/v1/upload`,
        method: 'POST',
        body: formData,
        headers: { 'Content-Type': 'multipart/form-data' }
      };

      //fetcher(fetcherSettings);
      const res = await fetch(`${process.env.API_URL}/api/v1/upload`, { method: 'POST', body: formData });
    } else {
      console.log('There is no photo');
    }
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    uploadHandler();
  };

  return (
    <div className={UploadImageStyles.container}>
      <h3>Upload image</h3>
      {fetchingStatus !== 'loading' ? (
        <form action="" onSubmit={submitHandler} className={UploadImageStyles.form} ref={formRef}>
          <span className={UploadImageStyles.inputContainer}>
            <label>Photo name</label>
            <input type="text" alt="photo-name" ref={photoNameRef} />
          </span>
          <span className={UploadImageStyles.inputContainer}>
            <label>Description</label>
            <input type="text" alt="photo-description" ref={photoDescriptionRef} />
          </span>
          <span className={UploadImageStyles.inputContainer}>
            <label>Photo</label>
            <input type="file" alt="photo-file" ref={photoFileRef} onChange={photoInputHandler} />
          </span>
          <span className={UploadImageStyles.buttonContainer}>
            <button onChange={uploadHandler}>Upload photo</button>
          </span>
        </form>
      ) : null}
      {fetchingStatus === 'loading' ? <p>Loading ...</p> : null}
    </div>
  );
};
