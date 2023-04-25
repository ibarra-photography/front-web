import React, { use, useRef, useState, type FormEvent } from 'react';

import { IFetchParams, useFetch } from 'hooks/useFetch';

import UploadImageStyles from './UploadImage.module.css';

interface IProps {
  user: string;
}

export const UploadImage = ({ user }: IProps) => {
  const [photoFile, setPhotoFile] = useState<FileList>();
  const [postingState, setPostingState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const photoFileRef = useRef<HTMLInputElement>(null);
  const photoNameRef = useRef<HTMLInputElement>(null);
  const photoDescriptionRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const photoInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhotoFile(event.target.files!);
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    if (postingState === 'loading') return;
    event.preventDefault();
    setPostingState('loading');

    const token = window.localStorage.getItem('token') || '';
    if (photoFile) {
      const text = photoDescriptionRef.current?.value || '';
      const title = photoNameRef.current?.value || '';

      const formData = new FormData(event.currentTarget);
      formData.append('photo', photoFile[0]);
      formData.append('text', text);
      formData.append('title', title);
      formData.append('token', token);
      formData.append('username', user);

      try {
        const res = await fetch(`${process.env.API_URL}/api/v1/upload`, { method: 'POST', body: formData });
        setPostingState('success');
        formRef.current?.reset();
      } catch (error) {
        setPostingState('error');
      }
    } else {
      console.log('There is no photo');
      setPostingState('idle');
    }
  };

  return (
    <div className={UploadImageStyles.container}>
      <h3>Upload image</h3>
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
          {postingState === 'loading' ? <p>Loading...</p> : <button type="submit">Upload photo</button>}
        </span>
      </form>
    </div>
  );
};
